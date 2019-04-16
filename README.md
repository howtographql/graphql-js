# hackernews-graphql-js

This repository contains the final project for the [**GraphQL.js tutorial**](https://www.howtographql.com/graphql-js/0-introduction/) on [How to GraphQL](https://www.howtographql.com/). Note that it also serves as foundation for all frontend tutorials on the site.

## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/howtographql/graphql-js	
cd graphql-js
yarn install # or `npm install`
```

### 2. Install the Prisma CLI

```sh
yarn global add prisma
```

You need to setup a Prisma service. You can refer to [this Quickstart](https://www.prisma.io/docs/quickstart/) to learn how.

### 3. Deploy Prisma and database

```sh
prisma deploy
```

When prompted where (i.e. to which Prisma server) you want to deploy your service, choose the **Demo server** which can be used for free in Prisma Cloud (it comes with a connected AWS Aurora database). If you haven't done so already, you will be asked to register with Prisma Cloud (which you can do via GitHub). For the following prompts in the terminal you can select the suggested values by hitting Enter. (If you have Docker installed, you can also choose to deploy Prisma locally by creating a new database.)

### 4. Start the server & open Playground

To interact with the API in a GraphQL Playground, all you need to do is execute the `start` script defined in `package.json`:

```sh
yarn start
```
