-- AlterTable
CREATE SEQUENCE ebook_id_seq;
ALTER TABLE "Ebook" ALTER COLUMN "id" SET DEFAULT nextval('ebook_id_seq'),
ADD CONSTRAINT "Ebook_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE ebook_id_seq OWNED BY "Ebook"."id";
