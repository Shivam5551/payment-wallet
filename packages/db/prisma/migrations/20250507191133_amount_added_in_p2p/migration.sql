/*
  Warnings:

  - Added the required column `amount` to the `P2PTransferHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "P2PTransferHistory" ADD COLUMN     "amount" INTEGER NOT NULL;
