/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `fg_user` ADD COLUMN `phone` VARCHAR(45),
    ADD COLUMN `username` VARCHAR(45);

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.username_unique` ON `fg_user`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.phone_unique` ON `fg_user`(`phone`);
