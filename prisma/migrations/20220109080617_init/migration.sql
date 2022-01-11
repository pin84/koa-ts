-- DropIndex
DROP INDEX `fg_user.username_unique` ON `fg_user`;

-- AlterTable
ALTER TABLE `fg_user` ADD COLUMN `remark` VARCHAR(500),
    ADD COLUMN `userAvatar` VARCHAR(145),
    ADD COLUMN `weChatAvatar` VARCHAR(145),
    ADD COLUMN `weChatName` VARCHAR(45);
