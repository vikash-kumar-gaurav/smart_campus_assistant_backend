-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isPremimum" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "premimum_expire_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Ebook" (
    "id" INTEGER NOT NULL,
    "pdf_name" TEXT NOT NULL,
    "pdf_url" TEXT NOT NULL,
    "ThumbnailId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Thumbnail" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ebook_ThumbnailId_key" ON "Ebook"("ThumbnailId");

-- AddForeignKey
ALTER TABLE "Ebook" ADD CONSTRAINT "Ebook_ThumbnailId_fkey" FOREIGN KEY ("ThumbnailId") REFERENCES "Thumbnail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
