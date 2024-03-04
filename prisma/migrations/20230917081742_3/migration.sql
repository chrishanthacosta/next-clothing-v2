/*
  Warnings:

  - You are about to alter the column `largewholeautosalesprice` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `largewholepricechange` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `retailautosalesprice` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `retailpricechange` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `smallwholeautosalesprice` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `smallwholepricechange` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `stockcontrol` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

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
    "retailautosalesprice" BOOLEAN NOT NULL,
    "retailpricechange" BOOLEAN NOT NULL,
    "retailmarkup" TEXT NOT NULL,
    "smallwholesalesprice" TEXT NOT NULL,
    "smallwholeautosalesprice" BOOLEAN NOT NULL,
    "smallwholepricechange" BOOLEAN NOT NULL,
    "smallwholemarkup" TEXT NOT NULL,
    "largewholesalesprice" TEXT NOT NULL,
    "largewholeautosalesprice" BOOLEAN NOT NULL,
    "largewholepricechange" BOOLEAN NOT NULL,
    "largewholemarkup" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "stockcontrol" BOOLEAN NOT NULL,
    "currentstock" TEXT NOT NULL,
    "stocklimit" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "netweight" TEXT NOT NULL,
    "grossweight" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_items" ("barcode", "brand", "category", "cost", "currentstock", "extraitemcode", "grossweight", "itemcode", "itemname", "largewholeautosalesprice", "largewholemarkup", "largewholepricechange", "largewholesalesprice", "location", "netweight", "retailautosalesprice", "retailmarkup", "retailpricechange", "retailsalesprice", "smallwholeautosalesprice", "smallwholemarkup", "smallwholepricechange", "smallwholesalesprice", "stockcontrol", "stocklimit", "subcategory", "unit") SELECT "barcode", "brand", "category", "cost", "currentstock", "extraitemcode", "grossweight", "itemcode", "itemname", "largewholeautosalesprice", "largewholemarkup", "largewholepricechange", "largewholesalesprice", "location", "netweight", "retailautosalesprice", "retailmarkup", "retailpricechange", "retailsalesprice", "smallwholeautosalesprice", "smallwholemarkup", "smallwholepricechange", "smallwholesalesprice", "stockcontrol", "stocklimit", "subcategory", "unit" FROM "items";
DROP TABLE "items";
ALTER TABLE "new_items" RENAME TO "items";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
