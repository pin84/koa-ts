/*
  Warnings:

  - A unique constraint covering the columns `[usertype]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `fg_user` ADD COLUMN `usertype` VARCHAR(45);

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.usertype_unique` ON `fg_user`(`usertype`);
