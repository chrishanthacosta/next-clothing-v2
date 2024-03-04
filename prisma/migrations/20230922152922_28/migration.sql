-- CreateTable
CREATE TABLE "purchaseorderdetails" (
    "purchaseorderdetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseorderid" INTEGER NOT NULL,
    "rowindex" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "ratiopack" INTEGER NOT NULL,
    "single" INTEGER NOT NULL
);
