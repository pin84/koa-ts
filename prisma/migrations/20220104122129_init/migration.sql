-- AlterTable
ALTER TABLE `fg_user` ADD COLUMN `openid` VARCHAR(45),
    ADD COLUMN `sessionKey` VARCHAR(45),
    ADD COLUMN `unionid` VARCHAR(45);
