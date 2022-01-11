/*
  Warnings:

  - You are about to drop the column `usertype` on the `fg_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `fg_user` DROP COLUMN `usertype`,
    ADD COLUMN `isAdmin` TINYINT,
    ADD COLUMN `isDesigner` TINYINT,
    ADD COLUMN `token` VARCHAR(45);

-- CreateTable
CREATE TABLE `fg_rides` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `fg_rides.id_unique`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.token_unique` ON `fg_user`(`token`);
