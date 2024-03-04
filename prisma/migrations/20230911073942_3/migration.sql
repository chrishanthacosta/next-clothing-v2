-- CreateTable
CREATE TABLE "users" (
    "userid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staffid" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "staff" (
    "staffid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staffname" TEXT NOT NULL,
    "contracttype" TEXT NOT NULL,
    "contactno" TEXT NOT NULL,
    "nic" TEXT NOT NULL,
    "designation" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
