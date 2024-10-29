/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `isbn` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coverurl" TEXT,
    "isbn" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "review" TEXT
);
INSERT INTO "new_Book" ("coverurl", "isbn", "name", "review", "title") SELECT "coverurl", "isbn", "name", "review", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
