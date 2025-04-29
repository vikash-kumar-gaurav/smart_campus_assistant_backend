/*
  Warnings:

  - Added the required column `teacherId` to the `attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendance" ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "semester" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
