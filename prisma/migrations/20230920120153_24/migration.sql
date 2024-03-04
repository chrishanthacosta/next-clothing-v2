-- CreateTable
CREATE TABLE "suppliers" (
    "supplierid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "suppliercode" TEXT NOT NULL,
    "suppliername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
