# zero-generator

Zero is a stupidly simple cli for bootstrapping code projects. Yea, that's right, another code generator cli. Why? Many software projects later this is our **opinionated** approach to what a zero configuration starters should be. Use zero-generators' templates if you think they fit your use case well.

As of now only a react starter is available but we plan to add more for other runtimes such as:

- Nodejs
- Deno?
- Variations of React

## Prerequisites

- Node 12+

## Install

Simply:

```sh
npm install zero-generator -g
```

## Use

### Interactive

```sh
zero
```

### One liner

```sh
zero --template <template> --name my-sweet-project --version 1.0.0 --author Tom Bombadil --license MIT
```
