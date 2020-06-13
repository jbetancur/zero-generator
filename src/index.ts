#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as template from './utils/template';
import chalk from 'chalk';
import * as yargs from 'yargs';

const banner = `
███████╗███████╗██████╗  ██████╗
╚══███╔╝██╔════╝██╔══██╗██╔═══██╗
  ███╔╝ █████╗  ██████╔╝██║   ██║
 ███╔╝  ██╔══╝  ██╔══██╗██║   ██║
███████╗███████╗██║  ██║╚██████╔╝
`;

const projectNameRegex = /^([A-Za-z\-\_\d])+$/;
const semverRegex = /(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:0|[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:0|[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)/gi;
const CURR_DIR = process.cwd();
const SKIP_FILES = ['node_modules', 'coverage', '.template.json'];
const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
const QUESTIONS = [
	{
		name: 'template',
		type: 'list',
		message: 'Which starter would you like to generate?',
		choices: CHOICES,
		when: () => !yargs.argv['template'],
	},
	{
		name: 'name',
		type: 'input',
		message: 'Project name:',
		when: () => !yargs.argv['name'],
		validate: (input: string) => {
			if (projectNameRegex.test(input)) return true;

			return 'Project name may only include letters, numbers, underscores and hashes.';
		},
	},
	{
		name: 'version',
		type: 'input',
		message: 'Project Version:',
		when: () => !yargs.argv['version'],
		validate: (input: string) => {
			if (semverRegex.test(input)) return true;

			return 'Project version must be in semver format';
		},
	},
	{
		name: 'author',
		type: 'input',
		message: 'Project Author:',
		when: () => !yargs.argv['author'],
	},
	{
		name: 'license',
		type: 'input',
		message: 'Project License:',
		when: () => !yargs.argv['license'],
	},
];

export interface TemplateConfig {
	files?: string[];
	postMessage?: string;
}

export interface CliOptions {
	projectName: string;
	projectVersion: string;
	projectAuthor: string;
	projectLicense: string;
	templateName: string;
	templatePath: string;
	tartgetPath: string;
	config: TemplateConfig;
}

function start() {
	inquirer
		.prompt(QUESTIONS)
		.then((answers: { template: string; name: string; version: string; author: string; license: string }) => {
			answers = { ...answers, ...yargs.argv };

			const projectChoice = answers['template'];
			const projectName = answers['name'];
			const projectVersion = answers['version'];
			const projectAuthor = answers['author'];
			const projectLicense = answers['license'];
			const templatePath = path.join(__dirname, 'templates', projectChoice);
			const tartgetPath = path.join(CURR_DIR, projectName);
			const templateConfig = getTemplateConfig(templatePath);

			const options: CliOptions = {
				projectName,
				projectVersion,
				projectAuthor,
				projectLicense,
				templateName: projectChoice,
				templatePath,
				tartgetPath,
				config: templateConfig,
			};

			if (!createProject(tartgetPath)) {
				return;
			}

			createDirectoryContents(templatePath, projectName, options);

			if (!postProcess(options)) {
				return;
			}

			showMessage(options);
		})
		.catch(error => {
			if (error.isTtyError) {
				console.log(chalk.red(error));
			} else {
				console.log(chalk.red("I've got a bad feeling about this..."));
			}
		});
}

function bruceBanner() {
	console.log(chalk.greenBright(banner));
}

function showMessage(options: CliOptions) {
	console.log('');
	console.log(chalk.green('Done.'));
	console.log(chalk.green(`cd ${options.projectName}`));

	const message = options.config.postMessage;

	if (message) {
		console.log('');
		console.log(chalk.yellow(message));
		console.log('');
	}
}

function getTemplateConfig(templatePath: string): TemplateConfig {
	const configPath = path.join(templatePath, '.template.json');

	if (!fs.existsSync(configPath)) return {};

	const templateConfigContent = fs.readFileSync(configPath);

	if (templateConfigContent) {
		return JSON.parse(templateConfigContent.toString());
	}

	return {};
}

function createProject(projectPath: string) {
	if (fs.existsSync(projectPath)) {
		console.log(chalk.red(`Folder ${projectPath} exists!`));
		return false;
	}

	fs.mkdirSync(projectPath);

	return true;
}

function postProcess(options: CliOptions) {
	if (isNode(options)) {
		return postProcessNode(options);
	}

	return true;
}

function isNode(options: CliOptions) {
	return fs.existsSync(path.join(options.templatePath, 'package.json'));
}

function postProcessNode(options: CliOptions) {
	shell.cd(options.tartgetPath);

	let cmd: string = '';

	if (shell.which('yarn')) {
		cmd = 'yarn';
	} else if (shell.which('npm')) {
		cmd = 'npm install';
	}

	if (cmd) {
		const result = shell.exec(cmd);

		if (result.code !== 0) {
			return false;
		}
	} else {
		console.log(chalk.red('No yarn or npm found. Cannot run installation.'));
	}

	return true;
}

function createDirectoryContents(templatePath: string, projectName: string, options: CliOptions) {
	const filesToCreate = fs.readdirSync(templatePath);

	filesToCreate.forEach(file => {
		const origFilePath = path.join(templatePath, file);

		// get stats about the current file
		const stats = fs.statSync(origFilePath);

		if (SKIP_FILES.indexOf(file) > -1) return;

		if (stats.isFile()) {
			let contents = fs.readFileSync(origFilePath, 'utf8');

			contents = template.render(contents, {
				projectName,
				projectAuthor: options.projectAuthor,
				projectVersion: options.projectVersion,
				projectLicense: options.projectLicense,
			});

			const writePath = path.join(CURR_DIR, projectName, file);
			fs.writeFileSync(writePath, contents, 'utf8');
		} else if (stats.isDirectory()) {
			fs.mkdirSync(path.join(CURR_DIR, projectName, file));

			// recursive call
			createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), options);
		}
	});
}


bruceBanner();
start();
