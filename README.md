# hackernews-graphql-js

This repository contains the final project for the [**GraphQL.js tutorial**](https://www.howtographql.com/graphql-js/0-introduction/) on [How to GraphQL](https://www.howtographql.com/). Note that it also serves as foundation for all frontend tutorials on the site.

## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/howtographql/graphql-js	
cd graphql-js
yarn install # or `npm install`
```

### 2. Deploy the Prisma database service

```sh
yarn prisma deploy
```

When prompted where (i.e. to which Prisma server) you want to deploy your service, choose the Demo server which can be used for free in Prisma Cloud. If you haven't done so already, you will be asked to register with Prisma Cloud (which you can do via GitHub). For the following prompts in the terminal you can select the suggested values by hitting Enter. (If you have Docker installed, you can also choose to deploy Prisma locally by Creating a new database.)

### 3. Set the Prisma service endpoint

From the output of the previous command, copy the `HTTP` endpoint and paste it into `src/index.js` where it's used to instantiate the `Prisma` binding. You need to replace the current placeholder `__PRISMA_ENDPOINT__`:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: "__PRISMA_ENDPOINT__",
      debug: true
    }),
  }),
})
```

For example:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: "https://eu1.prisma.sh/john-dpe/hackernews-graphql-js/dev",
      debug: true,
    }),
  }),
})
```

### 4. Start the server & open Playground

To interact with the API in a GraphQL Playground, all you need to do is execute the `dev` script defined in `package.json`:

```sh
yarn dev
```
