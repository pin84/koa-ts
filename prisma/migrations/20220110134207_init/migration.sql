-- CreateTable
CREATE TABLE `fg_article` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `time` DATETIME(0) NOT NULL,
    `coverImgURL` VARCHAR(45) NOT NULL,
    `content` VARCHAR(0) NOT NULL,
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `fg_article.id_unique`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
