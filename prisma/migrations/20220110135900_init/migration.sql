/*
  Warnings:

  - You are about to alter the column `content` on the `fg_article` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9999)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `fg_article` MODIFY `content` VARCHAR(255);
