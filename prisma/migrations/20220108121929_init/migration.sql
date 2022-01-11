/*
  Warnings:

  - You are about to alter the column `usertype` on the `fg_user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Int`.

*/
-- DropIndex
DROP INDEX `fg_user.usertype_unique` ON `fg_user`;

-- AlterTable
ALTER TABLE `fg_user` MODIFY `usertype` INTEGER;
