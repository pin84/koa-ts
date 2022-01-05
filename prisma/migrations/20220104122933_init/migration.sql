/*
  Warnings:

  - A unique constraint covering the columns `[sessionKey]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[openid]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[unionid]` on the table `fg_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `fg_user.sessionKey_unique` ON `fg_user`(`sessionKey`);

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.openid_unique` ON `fg_user`(`openid`);

-- CreateIndex
CREATE UNIQUE INDEX `fg_user.unionid_unique` ON `fg_user`(`unionid`);
