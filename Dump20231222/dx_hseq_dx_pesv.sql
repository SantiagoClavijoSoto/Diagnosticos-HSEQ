-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: dx_hseq
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dx_pesv`
--

DROP TABLE IF EXISTS dx_pesv;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE dx_pesv (
  Id_dx_pesv int NOT NULL,
  Paso_1 varchar(255) DEFAULT NULL,
  Paso_2 varchar(255) DEFAULT NULL,
  Paso_3 varchar(255) DEFAULT NULL,
  Paso_4 varchar(255) DEFAULT NULL,
  Paso_5 varchar(255) DEFAULT NULL,
  Paso_6 varchar(255) DEFAULT NULL,
  Paso_7 varchar(255) DEFAULT NULL,
  Paso_8 varchar(255) DEFAULT NULL,
  Paso_9 varchar(255) DEFAULT NULL,
  Paso_10 varchar(255) DEFAULT NULL,
  Paso_11 varchar(255) DEFAULT NULL,
  Paso_12 varchar(255) DEFAULT NULL,
  Paso_13 varchar(255) DEFAULT NULL,
  Paso_14 varchar(255) DEFAULT NULL,
  Paso_15 varchar(255) DEFAULT NULL,
  Paso_16 varchar(255) DEFAULT NULL,
  Paso_17 varchar(255) DEFAULT NULL,
  Paso_18 varchar(255) DEFAULT NULL,
  Paso_19 varchar(255) DEFAULT NULL,
  Paso_20 varchar(255) DEFAULT NULL,
  Paso_21 varchar(255) DEFAULT NULL,
  Paso_22 varchar(255) DEFAULT NULL,
  Paso_23 varchar(255) DEFAULT NULL,
  Paso_24 varchar(255) DEFAULT NULL,
  PRIMARY KEY (Id_dx_pesv)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dx_pesv`
--

LOCK TABLES dx_pesv WRITE;
/*!40000 ALTER TABLE dx_pesv DISABLE KEYS */;
/*!40000 ALTER TABLE dx_pesv ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-22 16:21:37
