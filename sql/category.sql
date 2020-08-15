SET NAMES 'utf8';

CREATE DATABASE IF NOT EXISTS `categories-tree`;
USE `categories-tree`;

DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  parent_id INT(10) UNSIGNED NOT NULL,
  number INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 18
AVG_ROW_LENGTH = 963
CHARACTER SET utf8
COLLATE utf8_general_ci;

INSERT INTO category VALUES
(1, 'Notebooks', 0, 1),
(2, 'Acer', 1, 1),
(3, 'Lenovo', 1, 2),
(4, 'Apple', 1, 3),
(5, 'MacBook Pro', 4, 1),
(6, 'MacBook Air', 4, 2),
(7, 'Sony', 1, 4),
(8, 'Smartphones', 0, 2),
(9, 'iPhone', 8, 1),
(10, 'Xiaomi', 8, 2),
(11, 'LG', 8, 3),
(12, 'HTC', 8, 4),
(13, 'Components', 0, 3),
(14, 'CPU', 13, 1),
(15, 'RAM', 13, 2),
(16, 'Video cards', 13, 3),
(17, 'HDD', 13, 4);
