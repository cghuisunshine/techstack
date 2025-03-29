import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a user "Alice" with two posts.
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      posts: {
        create: [
          {
            title: 'Alice First Post',
            content: "This is Alice's first post.",
            published: true,
          },
          {
            title: 'Alice Second Post',
            content: 'Another interesting post by Alice.',
          },
        ],
      },
    },
  });

  // Create a user "Bob" with one post.
  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      posts: {
        create: [
          {
            title: "Bob's Post",
            content: 'Bob shares his thoughts.',
            published: false,
          },
        ],
      },
    },
  });

  // Create a post without assigning it to any user.
  const postWithoutAuthor = await prisma.post.create({
    data: {
      title: 'Lonely Post',
      content: 'This post does not have an author assigned.',
      published: false,
    },
  });

  console.log({ alice, bob, postWithoutAuthor });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
