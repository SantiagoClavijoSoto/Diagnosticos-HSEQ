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
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS django_session;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE django_session (
  session_key varchar(40) NOT NULL,
  session_data longtext NOT NULL,
  expire_date datetime(6) NOT NULL,
  PRIMARY KEY (session_key),
  KEY django_session_expire_date_a5c62663 (expire_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES django_session WRITE;
/*!40000 ALTER TABLE django_session DISABLE KEYS */;
INSERT INTO django_session VALUES ('4z69b3kjkq883jda7htbizcl22ynch5y','.eJxVjMsOwiAQRf-FtSGFMjK4dN9vIAMzlaqBpI-V8d-1SRe6veec-1KRtrXEbZE5TqwuyqjT75YoP6TugO9Ub03nVtd5SnpX9EEXPTSW5_Vw_w4KLeVbQ6Yg6LEzgtZ6B5Z6YUySM_uAYNlDx4guWULfMUAfgByOIaSzoVG9P9hNN5Q:1qixzt:UpxNmvNhIg1NXeKY7PXjDA6-AOZrXbX28JW_1mNtWkw','2023-10-04 14:16:09.142028'),('5221zaxps966iauy7e79r4t29q7am8q8','.eJxVjMsOwiAQRf-FtSHDo0xw6d5vIAwMUjWQlHZl_Hdt0oVu7znnvkSI21rDNngJcxZnocTpd6OYHtx2kO-x3bpMva3LTHJX5EGHvPbMz8vh_h3UOOq3Ru2dRXCKckSDE4CfnDPFA2hbLLLhQly8Z7I2aUiIKesMpihnyBTx_gC0vzdJ:1rGiaR:rt3Ku0OY6BNTTPL8akJttHX1UdqSzaHaZaPP2Eyf-M4','2023-12-22 17:41:23.155241'),('cogdea4h15dx5vyajj1ohdw9bnedjtv6','.eJxVjLEOwjAMRP8lM4qKGscxIzvfEMV2RAookZp2Qvw7rdQBdNu9d_c2Ma1LiWvPc5zUXMzZnH47TvLMdQf6SPXerLS6zBPbXbEH7fbWNL-uh_t3UFIv2xpg8JCZZWTPCEjoVQASCEkmCKoKDtlRCExCmF3YAhRG9DQQms8X4Sw3Lg:1qiFkD:Ak9ccYnmUC9CVTMYvdvYar3YD5Fo9cCQyhqSjlrLLak','2023-10-02 15:01:01.453703'),('jhf78jmp3az275i3dhska1ls44dqtwqx','.eJxVjEsOwjAMBe-SNYocu20aluw5Q2XHDi2gVupnhbg7VOoCtm9m3st1vK19ty02d4O6swvu9LsJ54eNO9A7j7fJ52lc50H8rviDLv46qT0vh_t30PPSf-uEsRULWkmTUGOECG0pXEPdFGqUCSsWlFhnpEQUqCoUAhUTNAAF9_4Ay7Y3LQ:1rAb8W:K807wpzcSFomIMxlbHyRLHdgx-9K6FRHMAw4ujjFlng','2023-12-05 20:31:16.939056'),('konnspebj2p2lxhas207zbbvt8rdanva','.eJxVjEsOwjAMBe-SNYocu20aluw5Q2XHDi2gVupnhbg7VOoCtm9m3st1vK19ty02d4O6swvu9LsJ54eNO9A7j7fJ52lc50H8rviDLv46qT0vh_t30PPSf-uEsRULWkmTUGOECG0pXEPdFGqUCSsWlFhnpEQUqCoUAhUTNAAF9_4Ay7Y3LQ:1rAZWG:knVcGHzx9yqyPnVn8DkqTfII5N99qRDsw1WWhlqNByo','2023-12-05 18:47:40.914244'),('zgv7j2tisf58pk7qty0vcngfbktgepja','.eJxVjEsOwjAMBe-SNYocu20aluw5Q2XHDi2gVupnhbg7VOoCtm9m3st1vK19ty02d4O6swvu9LsJ54eNO9A7j7fJ52lc50H8rviDLv46qT0vh_t30PPSf-uEsRULWkmTUGOECG0pXEPdFGqUCSsWlFhnpEQUqCoUAhUTNAAF9_4Ay7Y3LQ:1rAxYX:cS8qrO_Qj9Ek6JoYnvsWNtNX4hmj7N5khak--O_2sik','2023-12-06 20:27:37.789127');
/*!40000 ALTER TABLE django_session ENABLE KEYS */;
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
