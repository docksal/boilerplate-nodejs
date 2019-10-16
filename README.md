# NodeJS example for Docksal

A basic "Hello world" NodeJS app example.

## Features

- Uses and extends from Docksal's NodeJS stack (`DOCKSAL_STACK=node`)
- Example of stock `docksal/cli` image customization via [Dockerfile](.docksal/services/cli/Dockerfile) to install custom node version
- Live reload via `nodemod` 

## Prerequisites

[Docksal](https://docs.docksal.io/en/master/getting-started/env-setup)

## Usage

```bash
git clone https://github.com/docksal/boilerplate-nodejs.git
cd boilerplate-nodejs
fin init
```

Open [http://boilerplate-nodejs.docksal](http://boilerplate-nodejs.docksal) 
