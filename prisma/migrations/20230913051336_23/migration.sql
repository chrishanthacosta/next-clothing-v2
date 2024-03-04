-- CreateTable
CREATE TABLE "subcategories" (
    "subcategoryid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryid" INTEGER NOT NULL,
    "subcategoryname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "brands" (
    "brandid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brandname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "units" (
    "unitid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unit" TEXT NOT NULL
);
