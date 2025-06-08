-- CreateEnum
CREATE TYPE "Course" AS ENUM ('BCA', 'BBA', 'MCA', 'Mtech', 'BSCIT', 'PGDM');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Pyqs', 'Cimage_internal_exams', 'Montly_Test', 'Technical');

-- CreateEnum
CREATE TYPE "paper_type" AS ENUM ('Honours', 'Subsidiary', 'Composition');

-- CreateTable
CREATE TABLE "pdf" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "year" INTEGER NOT NULL,
    "Department" "Course" NOT NULL,
    "Pyq_category" "paper_type",
    "pdf_Url" TEXT,
    "posted_by" INTEGER NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pdf_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pdf" ADD CONSTRAINT "pdf_posted_by_fkey" FOREIGN KEY ("posted_by") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
