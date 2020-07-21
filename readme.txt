CREATE TABLE `user_data` (
  `id` int NOT NULL,
  `website` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(360) NOT NULL,
  UNIQUE KEY `email` (`email`),
  KEY `id` (`id`),
  CONSTRAINT `user_data_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user_logs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `user_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(360) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci