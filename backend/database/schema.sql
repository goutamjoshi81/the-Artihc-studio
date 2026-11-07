-- ==============================================================================
-- THE ARTIHC STUDIO — Production Database Schema
-- Database: the_artihc_studio
-- Server: 127.0.0.1:3306
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS `the_artihc_studio`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `the_artihc_studio`;

-- 1. Categories / Spatial Typologies
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `count` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Architectural Projects & Monographs
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `category_id` INT,
  `type` VARCHAR(100) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `area` VARCHAR(100) NOT NULL,
  `scope` TEXT NOT NULL,
  `year` VARCHAR(10) NOT NULL,
  `featured` BOOLEAN DEFAULT FALSE,
  `status` ENUM('published', 'draft', 'archived') DEFAULT 'published',
  `cover_image` VARCHAR(500) NOT NULL,
  `short_desc` TEXT NOT NULL,
  `full_desc` TEXT NOT NULL,
  `aspect` VARCHAR(50) DEFAULT 'aspect-cinema',
  `placeholder_theme` VARCHAR(50) DEFAULT 'arch-placeholder-warm',
  `materials` JSON,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Project Gallery Images
CREATE TABLE IF NOT EXISTS `project_gallery` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `project_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `aspect` VARCHAR(50) DEFAULT 'aspect-editorial',
  `theme` VARCHAR(50) DEFAULT 'arch-placeholder-stone',
  `caption` TEXT,
  `image` VARCHAR(500) NOT NULL,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Spatial Disciplines & Metiers (Services)
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `number` VARCHAR(10) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `short_desc` TEXT NOT NULL,
  `full_desc` TEXT NOT NULL,
  `deliverables` JSON,
  `sort_order` INT DEFAULT 0,
  `status` ENUM('published', 'draft') DEFAULT 'published',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Private Commission Concierge Enquiries
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `project_type` VARCHAR(100) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `area` VARCHAR(100) NOT NULL,
  `budget` VARCHAR(100) NOT NULL,
  `message` TEXT,
  `status` ENUM('new', 'contacted', 'in_review', 'closed') DEFAULT 'new',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Analytics & Studio Telemetry
CREATE TABLE IF NOT EXISTS `analytics_metrics` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `metric_key` VARCHAR(100) NOT NULL UNIQUE,
  `metric_value` JSON NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Studio Administrative Accounts
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) DEFAULT 'owner',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

