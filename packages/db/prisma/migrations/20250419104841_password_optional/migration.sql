-- AlterTable
ALTER TABLE "Merchant" ALTER COLUMN "authtype" SET DEFAULT 'Google';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "authtype" SET DEFAULT 'Email';
