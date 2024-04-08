-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventory" TEXT NOT NULL,
    "discount" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "img" TEXT NOT NULL
);
