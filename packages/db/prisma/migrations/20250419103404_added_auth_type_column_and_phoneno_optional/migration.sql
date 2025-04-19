/*
  Warnings:

  - You are about to drop the column `authType` on the `Merchant` table. All the data in the column will be lost.
  - Added the required column `authtype` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authtype` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "AuthType" ADD VALUE 'Email';

-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "authType",
ADD COLUMN     "authtype" "AuthType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authtype" "AuthType" NOT NULL,
ALTER COLUMN "phoneno" DROP NOT NULL;
