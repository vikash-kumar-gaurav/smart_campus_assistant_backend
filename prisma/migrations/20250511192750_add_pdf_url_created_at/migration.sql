/*
  Warnings:

  - Added the required column `pdf_url_createdAt` to the `Ebook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ebook" ADD COLUMN     "pdf_url_createdAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "pdf_url" DROP NOT NULL;
