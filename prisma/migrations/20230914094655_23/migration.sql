/*
  Warnings:

  - You are about to drop the column `autosalesprice` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `markup` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `pricechange` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `salesprice` on the `items` table. All the data in the column will be lost.
  - Added the required column `largewholeautosalesprice` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largewholemarkup` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largewholepricechange` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largewholesalesprice` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retailautosalesprice` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retailmarkup` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retailpricechange` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retailsalesprice` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallwholeautosalesprice` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallwholemarkup` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallwholepricechange` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallwholesalesprice` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_items" (
    "itemcode" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "extraitemcode" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "subcategory" INTEGER NOT NULL,
    "brand" INTEGER NOT NULL,
    "retailsalesprice" TEXT NOT NULL,
    "retailautosalesprice" TEXT NOT NULL,
    "retailpricechange" TEXT NOT NULL,
    "retailmarkup" TEXT NOT NULL,
    "smallwholesalesprice" TEXT NOT NULL,
    "smallwholeautosalesprice" TEXT NOT NULL,
    "smallwholepricechange" TEXT NOT NULL,
    "smallwholemarkup" TEXT NOT NULL,
    "largewholesalesprice" TEXT NOT NULL,
    "largewholeautosalesprice" TEXT NOT NULL,
    "largewholepricechange" TEXT NOT NULL,
    "largewholemarkup" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "stockcontrol" TEXT NOT NULL,
    "currentstock" TEXT NOT NULL,
    "stocklimit" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "netweight" TEXT NOT NULL,
    "grossweight" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_items" ("barcode", "brand", "category", "cost", "currentstock", "extraitemcode", "grossweight", "itemcode", "itemname", "location", "netweight", "stockcontrol", "stocklimit", "subcategory", "unit") SELECT "barcode", "brand", "category", "cost", "currentstock", "extraitemcode", "grossweight", "itemcode", "itemname", "location", "netweight", "stockcontrol", "stocklimit", "subcategory", "unit" FROM "items";
DROP TABLE "items";
ALTER TABLE "new_items" RENAME TO "items";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
