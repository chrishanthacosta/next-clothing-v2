-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_purchaseorders" (
    "purchaseorderid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerid" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "supplierid" INTEGER NOT NULL,
    "customerpo" TEXT NOT NULL,
    "exfactorydate" TEXT NOT NULL,
    "shippingmode" TEXT NOT NULL,
    "customerstylename" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "shippingmethod" TEXT NOT NULL,
    "fabricid" INTEGER NOT NULL,
    "rationpacksize" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "supplierprice" INTEGER NOT NULL,
    "sellingprice" INTEGER NOT NULL,
    "colourcode" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "orderstatus" TEXT NOT NULL,
    "samplestatus" TEXT NOT NULL,
    "totalqty" INTEGER NOT NULL DEFAULT 0,
    "totalvalue" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_purchaseorders" ("colour", "colourcode", "currency", "customerid", "customerpo", "customerstylename", "date", "department", "description", "exfactorydate", "fabricid", "orderstatus", "purchaseorderid", "rationpacksize", "remark", "samplestatus", "sellingprice", "shippingmethod", "shippingmode", "style", "supplierid", "supplierprice") SELECT "colour", "colourcode", "currency", "customerid", "customerpo", "customerstylename", "date", "department", "description", "exfactorydate", "fabricid", "orderstatus", "purchaseorderid", "rationpacksize", "remark", "samplestatus", "sellingprice", "shippingmethod", "shippingmode", "style", "supplierid", "supplierprice" FROM "purchaseorders";
DROP TABLE "purchaseorders";
ALTER TABLE "new_purchaseorders" RENAME TO "purchaseorders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
