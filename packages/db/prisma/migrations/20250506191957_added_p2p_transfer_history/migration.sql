-- CreateTable
CREATE TABLE "P2PTransferHistory" (
    "id" TEXT NOT NULL,
    "receiverID" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "senderID" TEXT NOT NULL,
    "senderName" TEXT NOT NULL,

    CONSTRAINT "P2PTransferHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "P2PTransferHistory" ADD CONSTRAINT "P2PTransferHistory_receiverID_fkey" FOREIGN KEY ("receiverID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2PTransferHistory" ADD CONSTRAINT "P2PTransferHistory_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
