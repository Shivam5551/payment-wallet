import { PrismaClient } from '../src/index'
import { hash } from 'bcrypt-ts';

const prisma = new PrismaClient();


async function main() {
  const alice = await prisma.user.upsert({
    where: { phoneno: '99999999' },
    update: {},
    create: {
      phoneno: '99999999',
      password: await hash('alice', 10),
      name: 'alice',
      email: 'alice@mail.com',
      onramptransactions: {
        create: {
          starttime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
      balance: {
        create: {
          locked: 10,
          amount:  20000
        }
      }
    },
  })
  const bob = await prisma.user.upsert({
    where: { phoneno: '9999999998' },
    update: {},
    create: {
      phoneno: '9999999998',
      password: await hash('bob', 10),
      name: 'bob',
      email: 'bob@mail.com',
      onramptransactions: {
        create: {
          starttime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })