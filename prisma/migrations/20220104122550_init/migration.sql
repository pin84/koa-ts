/*
  Warnings:

  - You are about to drop the column `name` on the `fg_user` table. All the data in the column will be lost.
  - You are about to drop the column `pwd` on the `fg_user` table. All the data in the column will be lost.
  - Made the column `openid` on table `fg_user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sessionKey` on table `fg_user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unionid` on table `fg_user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `fg_user` DROP COLUMN `name`,
    DROP COLUMN `pwd`,
    MODIFY `openid` VARCHAR(45) NOT NULL,
    MODIFY `sessionKey` VARCHAR(45) NOT NULL,
    MODIFY `unionid` VARCHAR(45) NOT NULL;
