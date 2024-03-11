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
-- Table structure for table `consultores`
--

DROP TABLE IF EXISTS consultores;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE consultores (
  Id_consultor int NOT NULL AUTO_INCREMENT,
  Nombres varchar(255) DEFAULT NULL,
  Apellidos varchar(255) DEFAULT NULL,
  Cedula varchar(255) DEFAULT NULL,
  Contrasena varchar(255) DEFAULT NULL,
  Correo_electronico varchar(255) DEFAULT NULL,
  Ultimo_ingreso varchar(255) DEFAULT NULL,
  Cargo varchar(255) DEFAULT NULL,
  Licencia_SST varchar(255) DEFAULT NULL,
  PRIMARY KEY (Id_consultor)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultores`
--

LOCK TABLES consultores WRITE;
/*!40000 ALTER TABLE consultores DISABLE KEYS */;
INSERT INTO consultores VALUES (1,'Andres','Rodriguez','1234567890','pbkdf2_sha256$390000$Z6f50okj9Z5P82xVuuR1z9$QllqoM6a4XioNgnDh4vyhrixLk193J7iehGQxoOUVA0=','andreslamus23@gmail.com','asdssss','Consultor SST','3100/2021'),(2,'asdasd','asdasd','asdasd','123456','asdasdsad','asdsadasd','asdsadasd','asdasdsadffff'),(6,'sdsadsad','asdsad','123456','123456','sdasdsad','sadsad','asdsad','asdasd'),(7,'asdsad','sadasd','sadsad','sadsad','asdsad','asdsad','asdasd','sssssss'),(8,'qwe','qwe','qwe','qwe','qwe','qwe','qwe','qwe');
/*!40000 ALTER TABLE consultores ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-22 16:21:36
