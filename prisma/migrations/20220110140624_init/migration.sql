/*
  Warnings:

  - You are about to alter the column `time` on the `fg_article` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Int`.

*/
-- AlterTable
ALTER TABLE `fg_article` MODIFY `time` INTEGER;
