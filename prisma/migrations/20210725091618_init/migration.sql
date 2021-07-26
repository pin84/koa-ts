-- CreateTable
CREATE TABLE `ice` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `pwd` VARCHAR(45),
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `ice.id_unique`(`id`),
    UNIQUE INDEX `ice.name_unique`(`name`),
    PRIMARY KEY (`id`, `name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `pwd` VARCHAR(45),
    `create_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user.id_unique`(`id`),
    UNIQUE INDEX `user.name_unique`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userid` INTEGER,
    `title` VARCHAR(45),
    `username` VARCHAR(16),
    `content` VARCHAR(255),
    `avatar` VARCHAR(32),
    `avatara` VARCHAR(32),
    `isSecret` TINYINT,
    `create_time` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
