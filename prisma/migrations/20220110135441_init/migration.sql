/*
  Warnings:

  - You are about to drop the column `coverImgURL` on the `fg_article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `fg_article` DROP COLUMN `coverImgURL`,
    ADD COLUMN `coverURL` VARCHAR(45);
