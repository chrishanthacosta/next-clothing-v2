-- CreateTable
CREATE TABLE "bankdetails" (
    "bankaccountid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bankname" TEXT NOT NULL,
    "accountname" TEXT NOT NULL,
    "branchname" TEXT NOT NULL,
    "ibanno" TEXT NOT NULL,
    "bankbic" TEXT NOT NULL,
    "branchbic" TEXT NOT NULL,
    "accountno" TEXT NOT NULL,
    "sort" TEXT NOT NULL
);
