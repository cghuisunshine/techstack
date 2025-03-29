# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.
# Testing-stacks

to run "npm run seed", you should temporarily add "type": "module" :

  "type": "module",
  "scripts": {
    "seed": "node --loader ts-node/esm seed.ts",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },