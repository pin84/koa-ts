/*
  Warnings:

  - You are about to alter the column `userid` on the `fg_uploadfile` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.

*/
-- DropIndex
DROP INDEX `fg_uploadfile.name_unique` ON `fg_uploadfile`;

-- DropIndex
DROP INDEX `fg_uploadfile.originname_unique` ON `fg_uploadfile`;

-- AlterTable
ALTER TABLE `fg_uploadfile` ADD COLUMN `imgURL` VARCHAR(200),
    ADD COLUMN `type` INTEGER UNSIGNED,
    MODIFY `name` VARCHAR(45),
    MODIFY `originname` VARCHAR(45),
    MODIFY `userid` INTEGER UNSIGNED;
