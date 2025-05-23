/*
  Warnings:

  - Made the column `book_name` on table `Ebook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `writer` on table `Ebook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `genre` on table `Ebook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Ebook` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ebook" ALTER COLUMN "book_name" SET NOT NULL,
ALTER COLUMN "writer" SET NOT NULL,
ALTER COLUMN "genre" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
