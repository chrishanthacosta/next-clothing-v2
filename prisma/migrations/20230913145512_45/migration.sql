-- CreateTable
CREATE TABLE "items" (
    "itemcode" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "extraitemcode" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "subcategory" INTEGER NOT NULL,
    "brand" INTEGER NOT NULL,
    "salesprice" TEXT NOT NULL,
    "autosalesprice" TEXT NOT NULL,
    "pricechange" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "markup" TEXT NOT NULL,
    "stockcontrol" TEXT NOT NULL,
    "currentstock" TEXT NOT NULL,
    "stocklimit" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "netweight" TEXT NOT NULL,
    "grossweight" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
