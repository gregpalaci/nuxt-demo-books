/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coverurl" TEXT,
    "isbn" TEXT NOT NULL PRIMARY KEY,
    "review" TEXT
);
INSERT INTO "new_Book" ("coverurl", "isbn", "name", "review", "title") SELECT "coverurl", "isbn", "name", "review", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
