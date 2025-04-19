import { PrismaClient } from "@repo/db/client";

const prismaClientSingleton = (): PrismaClient => {
    return new PrismaClient();
};


declare global {
    // eslint-disable-next-line no-var
    var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

const prisma: PrismaClient = global.prisma ?? prismaClientSingleton();

export default prisma;

// eslint-disable-next-line turbo/no-undeclared-env-vars
if(process.env.NODE_ENV != 'production') global.prisma = prisma;
