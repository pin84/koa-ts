-- CreateTable
CREATE TABLE `fg_user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `pwd` VARCHAR(45),
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `fg_user.id_unique`(`id`),
    UNIQUE INDEX `fg_user.name_unique`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fg_uploadfile` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `originname` VARCHAR(45) NOT NULL,
    `userid` INTEGER NOT NULL,
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `fg_uploadfile.id_unique`(`id`),
    UNIQUE INDEX `fg_uploadfile.name_unique`(`name`),
    UNIQUE INDEX `fg_uploadfile.originname_unique`(`originname`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
