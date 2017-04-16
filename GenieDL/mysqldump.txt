-- MySQL dump 10.13  Distrib 5.7.12, for Linux (x86_64)
--
-- Host: localhost    Database: gogeniedb01
-- ------------------------------------------------------
-- Server version       5.7.12-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address_details`
--

DROP TABLE IF EXISTS `address_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address_details` (
  `ADDRESS_DETAILS_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CUST_ID` int(10) NOT NULL,
  `COUNTRY_ID` int(5) NOT NULL,
  `STATE_ID` int(10) NOT NULL,
  `CITY_ID` int(10) NOT NULL,
  `ADDRESS1` varchar(30) NOT NULL,
  `ADDRESS2` varchar(60) DEFAULT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `ZIPCODE` varchar(10) NOT NULL,
  `ISDEFAULT_ADDRESS` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ADDRESS_DETAILS_ID`),
  KEY `CUST_ID` (`CUST_ID`),
  KEY `COUNTRY_ID` (`COUNTRY_ID`),
  KEY `STATE_ID` (`STATE_ID`),
  KEY `CITY_ID` (`CITY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_details`
--

LOCK TABLES `address_details` WRITE;
/*!40000 ALTER TABLE `address_details` DISABLE KEYS */;
INSERT INTO `address_details` VALUES (2,14,2,2,3,'coimbatore','gandhipuram','2','2016-12-13','2010-12-12','genie','2010-12-12','genie','Y','641035','yes'),(5,16,2,2,3,'delhi','patna','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','1'),(6,17,2,2,3,'coimbatore','gandhipuram','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','yes'),(7,18,2,2,3,'coimbatore','gandhipuram','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','yes'),(8,19,2,2,3,'coimbatore','gandhipuram','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','yes'),(9,14,2,2,3,'coimbatore','gandhipuram','genie','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','yes'),(10,14,2,2,3,'Los Angeles, CA','Santa Rosa','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'mk2 chy','Kaupulehu'),(11,14,2,2,3,'Los Angeles, CA','Santa Rosa','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'mk2 chy','Kaupulehu'),(51,50,2,2,3,'delhi','patna','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','Yes'),(52,50,2,2,3,'coimbatore','gandhipuram','2','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'641035','No'),(54,76,2,2,3,'delhi','patna','gogenie','2016-07-13',NULL,NULL,NULL,NULL,NULL,'641035','Y'),(55,77,2,2,3,'delhi','patna','gogenie','2016-07-16',NULL,NULL,NULL,NULL,NULL,'641035','Y'),(56,78,2,2,3,'sivakasi','','gogenie','2016-07-20',NULL,NULL,NULL,NULL,NULL,'626130','Y'),(57,79,2,2,3,'delhi','patna','gogenie','2016-07-23',NULL,NULL,NULL,NULL,NULL,'641035','Y'),(58,47,2,2,3,'coimbatore','gandhipuram','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'641035','1'),(59,47,2,2,3,'coimbatore','gandhipuram','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'641035','1'),(60,14,2,2,3,'california','Santa Rosa','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'mk2','rossa'),(61,14,2,2,3,'Los Angeles, CA','Santa Rosa','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'mk2 chy','Kaupulehu'),(62,134,2,2,3,'delhi','patna','gogenie','2016-09-24',NULL,NULL,NULL,NULL,NULL,'641035','Y'),(67,139,2,2,3,'delhi','patna','gogenie','2016-09-24','2016-10-02','Customer',NULL,NULL,NULL,'641035','Y'),(68,139,2,2,3,'addrline1','addrline2','gogenie','2016-09-24',NULL,NULL,NULL,NULL,NULL,'11213','N'),(69,140,2,2,3,'addrline1','addrline2','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'11213','Y'),(70,142,2,2,3,'addrline1','addrline2','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'11213','Y'),(71,139,2,2,3,'addrline1','addrline2','gogenie','2016-10-01',NULL,NULL,NULL,NULL,NULL,'11213','Y'),(72,170,2,103,105,'gsdfg','sdfgsdf','gogenie','2016-10-20',NULL,NULL,NULL,NULL,NULL,'74545','Y'),(73,171,2,2,3,'Hhshw','Bsbshbs','gogenie','2016-10-21',NULL,NULL,NULL,NULL,NULL,'626123','Y'),(87,189,2,2,3,'delhi','patna','gogenie','2016-10-25','2016-11-02','customer',NULL,NULL,NULL,'641035','Y');
/*!40000 ALTER TABLE `address_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `CITY_ID` int(10) NOT NULL AUTO_INCREMENT,
  `COUNTRY_ID` int(5) NOT NULL,
  `STATE_ID` int(10) NOT NULL,
  `CITY_NAME` varchar(20) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CITY_ID`),
  KEY `COUNTRY_ID` (`COUNTRY_ID`),
  KEY `STATE_ID` (`STATE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (3,2,2,'coimbatore','1','2016-12-13',NULL,NULL,'2010-12-12','genie','Y'),(4,4,3,'pune','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(5,4,4,'hyderabad','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(6,4,5,'madras','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(7,4,5,'salem','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(8,5,5,'erode','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(9,5,5,'madhurai','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10,5,5,'thiruchi','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(101,100,101,'Milton Kynes','genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(102,2,2,'los angels','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(103,2,2,'los angels','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(104,2,2,'punecity','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(105,2,2,'punecity','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(106,2,2,'los angels','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `COUNTRY_ID` int(5) NOT NULL AUTO_INCREMENT,
  `COUNTRY_NAME` varchar(20) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`COUNTRY_ID`),
  UNIQUE KEY `COUNTRY_NAME_UNIQUE` (`COUNTRY_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (2,'India','1','2016-12-13',NULL,NULL,'2010-12-12','genie','Y'),(3,'Germany','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(4,'Russia','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(5,'China','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(6,'France','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(7,'Pakisthan','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10,'Poland','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(11,'Greece','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(14,'Uganda','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(16,'Nigeria','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(18,'Kenya','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(19,'Iran','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(20,'Iraq','2','2016-12-13',NULL,NULL,NULL,NULL,NULL),(21,'america','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(100,'United Kingdom','genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(101,'Italy','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(102,'Portugal','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(103,'Oxford','genie','2016-06-21',NULL,NULL,NULL,NULL,NULL),(104,'Tent','genie','2016-06-21',NULL,NULL,NULL,NULL,NULL),(105,'fdd','genie','2016-06-21',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuisine`
--

DROP TABLE IF EXISTS `cuisine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuisine` (
  `CUISINE_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CUISINE_NAME` varchar(30) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CUISINE_ID`),
  UNIQUE KEY `CUISINE_NAME_UNIQUE` (`CUISINE_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuisine`
--

LOCK TABLES `cuisine` WRITE;
/*!40000 ALTER TABLE `cuisine` DISABLE KEYS */;
INSERT INTO `cuisine` VALUES (11,'Indian','1','2016-12-13','2016-12-13','1','2010-12-12','genie','Y'),(12,'Multi cusine','1','2016-12-13','2016-12-13','1','2016-12-13','1','1'),(13,'Chinese Daba','1','2016-12-13','2016-12-13','1','2016-12-13','1','1'),(14,'Italian cusine','1','2016-12-13','2016-12-13','1','2016-12-13','1','1'),(15,'Mexican','1','2016-12-13','2016-12-13','1','2016-12-13','1','1'),(16,'African','1','2016-12-13','2016-12-13','1','2016-12-13','1','1'),(17,'Biryani','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(20,'Chinese','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(22,'ravauppuma','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(113,'Indian, Curry, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(114,'Indian, Grill, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(115,'Chicken, Kebab, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(116,'Kebab, American','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(117,'Chinese, Indian, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(118,'Curry, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(119,'Chicken, Burger, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(120,'Peri Peri, Burgers, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(121,'Indiansa','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(122,'English, Pizza, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(123,'Chinese, Oriental','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(124,'Pizza, Peri Peri, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(125,'Persian, Grill, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(126,'Italian, Pizza','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(127,'Pizza, Italian','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(128,'South Indian, Indian, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(129,'Lebanese, Grill, Halal','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(130,'Caribbean','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(131,'Kebab, Turkish','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL),(132,'Chinese, Thai','1','2016-12-13',NULL,'1','2010-12-12',NULL,NULL);
/*!40000 ALTER TABLE `cuisine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `CUST_ID` int(10) NOT NULL AUTO_INCREMENT,
  `FIRSTNAME` varchar(32) NOT NULL,
  `LASTNAME` varchar(32) NOT NULL,
  `DATEOFBIRTH` date DEFAULT NULL,
  `EMAIL` varchar(60) NOT NULL,
  `PASSWORD` varchar(80) NOT NULL,
  `WORKPHONE` varchar(15) NOT NULL,
  `MOBILEPHONE` varchar(15) NOT NULL,
  `PHONE_ISVALID` varchar(10) NOT NULL,
  `CUST_ISACTIVE` varchar(10) DEFAULT NULL,
  `CREATEDDATE` date NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `SECURITY_QUESTION1` varchar(100) NOT NULL,
  `SECURITY_ANSWER1` varchar(25) NOT NULL,
  `SECURITY_QUESTION2` varchar(100) DEFAULT NULL,
  `SECURITY_ANSWER2` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`CUST_ID`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`),
  UNIQUE KEY `MOBILEPHONE_UNIQUE` (`MOBILEPHONE`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (47,'sachin','tendul','1989-12-13','sachin@gmail.com','12345','44335566','9751502126','0','1','2016-12-13','genie','2016-12-13','genie','2010-12-12','genie','Y','What is your nick name','Master','What is your favorite food','Chappathi'),(50,'Deepak','Sundar','1986-12-13','deepaksurf1@gmail.com','12345','042237123','9751502121','yes','Y','2016-12-13','genie','2016-12-13','genie',NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(51,'moorthi','mahalingam','2010-05-06','moorthi@gmail.com','12345','2423432424','4234324324','Y','Y','2016-07-03','123213','2016-12-13','genie',NULL,NULL,NULL,'what is nick name','answer1','what is school teacher name','answer2'),(76,'Shankar','Chithambaram','2010-05-05','shankarc@gmail.com','$2a$12$qeuiLuHq2S6dHr0LZo7VreBC22.0yGAIVWKWAPorLh9OrVQTnZXXG','04223712399','97515021219','Y','Y','2016-07-13','gogenie','2016-07-16','Customer','2010-05-05','manitest','Y','What is your nick name','Master','What is your favorite food','curd'),(77,'Santhosh','Kuppuraj','2010-05-05','santhoshk@gmail.com','$2a$12$M3E6slAgH80FOE0axeFaSOqij1ztMgur/T0hd2M.uec6aSCqEiRsG','04223712300','9751502112','Y','Y','2016-07-16','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(78,'Saravvanan','P','1983-08-13','sarankani@gmail.com','$2a$12$sbWJHmJgYxBXm.g6Zhwk.uLYfbioVU8PmIpDNRFC/TJ5OZEVF6IZW','','919442011696','N','Y','2016-07-20','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Saran','What is your favorite food','Biryani'),(79,'test','c','2010-05-05','test@gmail.com','$2a$12$4wCkUjDXJGeSg1TlPycZpuzfKj3yrRj0Fh1gB217SZWEkbT0a5Wfq','031245789','9874563210','N','Y','2016-07-23','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(87,'praveen','kumar','1989-07-01','praveen2125@yahoo.com','12345','04222517','975150','yes','Y','2016-12-13','genie','2016-12-13','genie',NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(93,'praveen','kumar','1989-07-01','prassveen2125@yahoo.com','12345','04222517','dfdf','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(95,'praveen','kumar','1989-07-01','prav2125@yahoo.com','12345','04222517','2323','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(96,'praveen','kumar','1989-07-01','prav25@yahoo.com','12345','04222517','232883','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(97,'praveen','kumar','1989-07-01','pv25@yahoo.com','12345','04222517','2328565683','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(98,'praveen','kumar','1989-07-01','pv25@fgfg.com','12345','04222517','fgfg','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(99,'praveen','kumar','1989-07-01','pvfg5@fgfg.com','12345','04222517','4545','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(101,'praveen','kumar','1989-07-01','fg4444@fgfg.com','12345','4545','3434','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(102,'praveen','kumar','1989-07-01','fg45444@fgfg.com','12345','45455','34534','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(105,'praveen','kumar','1989-07-01','fgsds444@fgfg.com','12345','4df455','34dfdf4','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(106,'praveen','kumar','1989-07-01','fgs444@fgfg.com','12345','4d455','34ddf4','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(107,'praveen','kumar','1989-07-01','fgs4@fgfg.com','12345','4d55','344','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'what is your favourite food','chappathi','what is your first school teacher name','sachin'),(121,'Sachin','Tendul','1986-12-13','koli007@gmail.com','password','0422123','97502126','yes','Y','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','Chappathi'),(123,'Sachin','Tendul','1986-12-13','sachin007@gmail.com','password','042237123','97515','yes','yes','2016-12-13','genie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','Chappathi'),(124,'Hemnath','singh','2010-05-05','hemnath1188@gmail.com','$2a$12$fI.26YmLa57MehkIJAr/8eDg1rojHfK1wcfOSuGFFmJdMwJcEucs2','9876543210','9442011696','Y','Y','2016-09-09','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','hemnath','What is your favorite food','idlisambar'),(139,'IntTest','IntTest','2010-05-05','inttest@gmail.com','$2a$12$W7g2mHgwqCIb3ra.yC4ma.h3CzU.MyEsOrMvukJV7tv9khLGcCmjy','9999372899','9975130212','Y','Y','2016-09-24','gogenie','2016-11-01','Customer',NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(140,'IntTest','IntTest','2010-05-05','inttest6782@gmail.com','$2a$12$zmFz48iDFrzNSl6uwXf4Puek/cDZ31PxJScKe0saHGW7Jv/aikfPC','0000372899','0075130212','Y','Y','2016-09-25','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(142,'IntTest','IntTest','2010-05-05','inttest678299@gmail.com','$2a$12$QP/a8XyiKYkGFeknFSj.q.5u3JCQBm8CFmTwH81x5hhEVylkv8bfK','0000372899','00751302161','N','N','2016-09-25','gogenie',NULL,NULL,NULL,NULL,NULL,'What is your nick name','Master','What is your favorite food','curd'),(170,'vhdf','hdsfh','2008-07-06','abcd@abcd.com','$2a$12$wNAI1ww.TSfuNsRzpV10juMjf9zWzWfnfpUp/3lgc/dVaUgYdFek2','4362346','9323523523','Y','Y','2016-10-20','gogenie',NULL,NULL,NULL,NULL,NULL,'gfvnb','ghjbgj','hbghbh','hgvfgh'),(171,'Kjhd hash dh','Hhshshss','2016-10-24','Test@test.com','$2a$12$SwqdyeK6ubckQ8C9hQey/e0KVIsdEB1wgYxXXb9f5CS1..0puX5di','9500336500','+919500336500','Y','Y','2016-10-21','gogenie',NULL,NULL,NULL,NULL,NULL,'Nick name','Singh','Favorite food','Dosa'),(189,'singhHemnath','s.','1988-11-24','singh@gmail.com','$2a$12$kNsxCM9Ml/yJg3KqsDufMuE.lYQ.pWlKVdMvEaPmH4pIA/oj5F6o.','9362728484','9362728484','Y','Y','2016-10-25','gogenie','2016-11-02','Customer',NULL,NULL,NULL,'What is your nick name','Hemnath','What is your favorite food','dosa');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_order` (
  `ORDER_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `ORDER_STATUS_ID` bigint(20) NOT NULL,
  `CUST_ID` int(10) NOT NULL,
  `PAYMENT_TYPE` varchar(20) NOT NULL,
  `PAYMENT_STATUS` varchar(10) NOT NULL,
  `SPECIAL_INS` varchar(100) DEFAULT NULL,
  `TOTAL_AMOUNT` float NOT NULL,
  `DISCOUNT` float DEFAULT NULL,
  `DELIVERY_REQUEST_DATE` date DEFAULT NULL,
  `DELIVERY_REQUEST_TIME` time DEFAULT NULL,
  `VAT_AMOUNT` float NOT NULL,
  `SERVICE_CHARGE` float DEFAULT NULL,
  `DELIVERY_FEE` float DEFAULT NULL,
  `CARD_TXN_FEE` float DEFAULT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `CONTACT_PHONE` varchar(15) NOT NULL,
  PRIMARY KEY (`ORDER_ID`),
  KEY `ORDER_STATUS_ID` (`ORDER_STATUS_ID`),
  KEY `RESTAURANT_ID` (`RESTAURANT_ID`),
  KEY `CUST_ID` (`CUST_ID`),
  CONSTRAINT `customer_order_ibfk_2` FOREIGN KEY (`ORDER_STATUS_ID`) REFERENCES `order_status` (`ORDER_STATUS_ID`),
  CONSTRAINT `customer_order_ibfk_3` FOREIGN KEY (`RESTAURANT_ID`) REFERENCES `restaurant` (`RESTAURANT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order`
--

LOCK TABLES `customer_order` WRITE;
/*!40000 ALTER TABLE `customer_order` DISABLE KEYS */;
INSERT INTO `customer_order` VALUES (2,32,2,14,'cash','paid','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,'Y','2010-12-12','genie','9751502126'),(3,33,3,16,'credit','pending','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502127'),(4,34,3,19,'credit','pending','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502128'),(5,35,3,18,'cash','paid','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502129'),(6,36,3,19,'cash','paid','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502125'),(101,10001,2,14,'visa','paid','Deliver the food in leasing office',98.5,3,'2016-05-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(102,10002,2,16,'visa','paid','Deliver the food in leasing office',198.5,3,'2016-07-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(103,10002,2,16,'visa','paid','Deliver the food in leasing office',11.5,3,'2016-07-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(104,10001,2,16,'visa','paid','Deliver the food in leasing office',11.5,3,'2016-07-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(105,10001,2,16,'visa','paid','Deliver the food in leasing office',11.5,3,'2016-07-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(106,10001,2,17,'visa','paid','Deliver the food in leasing office',11.5,3,'2016-07-03','18:00:00',4.55,0,2,0,'genie','2016-05-13',NULL,NULL,'0',NULL,NULL,'0445678901231'),(107,32,2,14,'cash','paid','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502126'),(108,32,2,14,'cash','paid','special',1,1,'2016-12-13','12:30:00',1,1,1,1,'1','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126'),(109,32,2,14,'cash','paid','special',1,1,NULL,'12:30:00',1,1,1,1,'1','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126'),(110,32,2,14,'cash','paid','special',1,1,NULL,NULL,1,1,1,1,'1','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126'),(112,32,2,14,'cash','paid','special',1,1,NULL,NULL,1,1,1,1,'123423','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126'),(113,32,2,14,'cash','paid','special',1,1,NULL,NULL,1,1,1,1,'123423','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126123'),(114,32,2,14,'cash','paid123','special',1,1,NULL,NULL,1,1,1,1,'123423','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126123'),(115,32,2,14,'cash12321','paid','special',1,1,NULL,NULL,1,1,1,1,'123423','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126123'),(124,32,2,14,'cash12321','paid','special',1,1,NULL,NULL,1,1,NULL,1,'123423','2016-03-07',NULL,NULL,NULL,NULL,NULL,'9751502126123'),(125,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'2324324234'),(126,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(127,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(128,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(129,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(130,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(131,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(132,32,2,14,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-03',NULL,NULL,NULL,NULL,NULL,'666666666'),(133,32,2,14,'cash','paid','special',10,10,'2016-12-13','12:30:00',10,10,10,10,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502126'),(141,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-16',NULL,NULL,NULL,NULL,NULL,'666666666'),(142,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-16',NULL,NULL,NULL,NULL,NULL,'666666666'),(143,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-16',NULL,NULL,NULL,NULL,NULL,'666666666'),(144,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-16',NULL,NULL,NULL,NULL,NULL,'666666666'),(145,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-23',NULL,NULL,NULL,NULL,NULL,'666666666'),(146,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'12312321','2016-07-23',NULL,NULL,NULL,NULL,NULL,'666666666'),(147,32,2,14,'credit','pending','special',1,1,'2016-12-13','12:30:00',1,1,10,10,'genei','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502126'),(148,32,2,14,'credit','pending','special',1,1,'2016-12-13','12:30:00',1,1,10,10,'genei','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502126'),(149,32,2,14,'cash','paid','special',10,10,'2016-12-13','12:30:00',10,10,10,10,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'9751502126'),(150,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'gogenie','2016-09-28',NULL,NULL,NULL,NULL,NULL,'666666666'),(151,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'gogenie','2016-09-28',NULL,NULL,NULL,NULL,NULL,'666666666'),(152,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'gogenie','2016-09-28',NULL,NULL,NULL,NULL,NULL,'666666666'),(153,32,2,71,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'gogenie','2016-09-28',NULL,NULL,NULL,NULL,NULL,'666666666'),(154,10001,2,189,'cash','paid','',1.5,0,NULL,NULL,0,0,0,NULL,'gogenie','2016-10-26',NULL,NULL,NULL,NULL,NULL,'987654326'),(155,10001,2,189,'cash','paid','',6.95,0,NULL,NULL,0,0,0,NULL,'gogenie','2016-10-26',NULL,NULL,NULL,NULL,NULL,'987654326'),(156,10001,2,189,'cash','paid','special',234,12,NULL,NULL,10,2,1,1,'gogenie','2016-10-31',NULL,NULL,NULL,NULL,NULL,'666666666'),(157,10001,2,189,'cash','paid','',6.95,0,NULL,NULL,0,0,0,NULL,'gogenie','2016-11-01',NULL,NULL,NULL,NULL,NULL,'987654326');
/*!40000 ALTER TABLE `customer_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_payment_info`
--

DROP TABLE IF EXISTS `customer_payment_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_payment_info` (
  `CUSTOMER_PAYMENT_INFO_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CUST_ID` int(10) NOT NULL,
  `PAYEMENTTYPE` varchar(32) NOT NULL,
  `CARDNUMBER` varchar(70) NOT NULL,
  `EXPIRYDATE` varchar(70) NOT NULL,
  `CVV_NUMBER` varchar(70) DEFAULT NULL,
  `NAME_ON_CARD` varchar(100) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEBY` varchar(20) DEFAULT NULL,
  `DELETEDFLAG` varchar(10) DEFAULT NULL,
  `ADDRESS1` varchar(30) NOT NULL,
  `ADDRESS2` varchar(60) DEFAULT NULL,
  `CITY_ID` int(10) NOT NULL,
  `STATE_ID` int(10) NOT NULL,
  `COUNTRY_ID` int(5) NOT NULL,
  `ZIPCODE` varchar(10) NOT NULL,
  `ISDEFAULT` varchar(10) DEFAULT NULL,
  `CARD_LAST_FOUR` varchar(4) NOT NULL,
  PRIMARY KEY (`CUSTOMER_PAYMENT_INFO_ID`),
  KEY `CUST_ID` (`CUST_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_payment_info`
--

LOCK TABLES `customer_payment_info` WRITE;
/*!40000 ALTER TABLE `customer_payment_info` DISABLE KEYS */;
INSERT INTO `customer_payment_info` VALUES (2,14,'savings','001','2016-12-13','005','virat','1','2016-12-13','2016-12-13','genie','2010-12-12','genie','Y','los vega','california',3,2,2,'641035','yes',''),(3,16,'cash','00987','10','012','ragul','1','2016-12-13',NULL,NULL,'2016-05-05','manitest','Y','Madhurai','arapalyam',8,5,5,'641035',NULL,''),(4,17,'cash','00988','10','013','ramesh','1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'Coimbatore','gandhipuram',9,5,5,'641035',NULL,''),(5,18,'cash','00989','10','014','ganguly','1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'Mettupalyam','blackthunder',6,4,5,'641035',NULL,''),(6,19,'cash','00990','10','016','gayle','1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'Westindies','carabian',7,5,4,'641035',NULL,''),(7,14,'Cash','34567','2016','005','sachin','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'los vegas','california',3,2,2,'mky ty',NULL,''),(8,50,'savings','001','2016-12-13','005','virat','1','2016-12-13','2016-12-13','genie',NULL,NULL,NULL,'los vega','california',3,2,2,'mk ty','yes',''),(9,50,'cash','00987','10','012','ragul','1','2016-12-13',NULL,NULL,NULL,NULL,NULL,'Madhurai','arapalyam',8,5,5,'641035',NULL,''),(10,76,'savings','000001','2016-12-13','5','virat','12312312','2016-07-13',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mk ty',NULL,''),(11,77,'savings','000001','2016-12-13','5','virat','12312312','2016-07-16',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mk ty',NULL,''),(12,78,'savings','000001','2024-12-13','5','Saravanan P','12312312','2016-07-20',NULL,NULL,NULL,NULL,NULL,'Sivakasi','',3,2,2,'mk ty',NULL,''),(13,79,'savings','000001','2016-12-13','5','virat','12312312','2016-07-23',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mk ty',NULL,''),(14,14,'cash','100988','10','005','sachin','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'coimbatore','kovai',3,2,2,'641035',NULL,''),(15,14,'cash','100988','10','005','sachin','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'coimbatore','kovai',3,2,2,'641035',NULL,''),(16,14,'Cash','34567','2016','005','sachin','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,'los vegas','california',3,2,2,'mky ty',NULL,''),(17,139,'savings','$2a$12$DKBhN8kYS5401Gp/mqtrxOXALu1wMkkt1E9tbyCSfCi0UNZ0fsmme','2016-12-13','5','virat','gogenie','2016-09-24',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mkty','N','1321'),(18,139,'savings','$2a$12$DP7S53kVYW6M/S1IWhLR3OPdVCamW/3lWXjsGUyA.1iacfIVBJ2PS','2016-12-13','5','virat','gogenie','2016-09-24',NULL,NULL,NULL,NULL,NULL,'Address line1','Address line2',3,2,2,'mkty','N','9999'),(19,139,'savings','$2a$12$skqW89kWiMcvF8SGcDZpPOPpX7FHu45zazxrzQddadt1vG80bEUBC','2016-12-13','5','virat','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mkty','N','1321'),(20,139,'savings','$2a$12$2r0W05b95KqBFkAs7WBO1uPChMNlteSe5Kr2ntmRXlBk5.31zuwg.','2016-12-13','5','virat','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mkty','N','1321'),(21,140,'savings','$2a$12$IpldJ6qzzzw/8hDqYVCsoeHgHXbiDvKzeU/Way6ujcwvZ.NIOuHhe','2016-12-13','5','virat','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mkty',NULL,'1321'),(22,142,'savings','$2a$12$CzwYnCBT.o9A5oVtKlUtae304.ldz7g6vTZxH3zMKRX8tff8UYeIK','2016-12-13','5','virat','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'los vega','california',3,2,2,'mkty',NULL,'1321'),(23,139,'savings','$2a$12$DH.Vzu.dcc9azpnOfxMUiu3vIu5EbW/9FwPes78TIu0sVcOR3w0Ri','2016-12-13','5','virat','gogenie','2016-10-01',NULL,NULL,NULL,NULL,NULL,'Address line1','Address line2',3,2,2,'mkty',NULL,'9999'),(24,170,'gcvhvfgb','$2a$12$hvuz/dLJRW5JAYZC6Sonu.j3d6bkXAxb199RCXaYUYY9cnUB4ygfW','4/2026','876','gfcdjgf','gogenie','2016-10-20',NULL,NULL,NULL,NULL,NULL,'hjgvbfh','vfhng',6,4,4,'765767',NULL,'cgfj'),(25,171,'Cash on delivery','$2a$12$gA9McZ7EP9cSbFQi7r7JaeZVxVmiwtheknCXv.ZE6LTUViizIIsd2','11/2025','898','Twst','gogenie','2016-10-21',NULL,NULL,NULL,NULL,NULL,'Tggshgs','Bsbsbs',3,2,2,'626123',NULL,'5432'),(26,189,'savings','$2a$12$O2bZOg72ntWKsDQPmjhHj.qlrf2s2.N2JT0Z/6D9uPoomFvIljFxe','11/2020','608','singh','gogenie','2016-10-25',NULL,NULL,NULL,NULL,NULL,'delhi','california',3,2,2,'mk ty',NULL,'8026');
/*!40000 ALTER TABLE `customer_payment_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_reviews`
--

DROP TABLE IF EXISTS `customer_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_reviews` (
  `CUSTOMER_REVIEW_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CUST_ID` int(10) NOT NULL,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `ORDER_ID` bigint(20) NOT NULL,
  `REVIEW_TITLE` varchar(30) DEFAULT NULL,
  `REVIEW_DESC` varchar(500) DEFAULT NULL,
  `RATING` varchar(2) NOT NULL,
  PRIMARY KEY (`CUSTOMER_REVIEW_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_reviews`
--

LOCK TABLES `customer_reviews` WRITE;
/*!40000 ALTER TABLE `customer_reviews` DISABLE KEYS */;
INSERT INTO `customer_reviews` VALUES (1,16,33,3,'Lunch','food is really awesome','5'),(2,16,10002,102,'Lunch','food is really awesome','5'),(3,16,10002,103,'Dinner','food is really awesome','5'),(4,16,10001,104,'Lunch','food is really awesome','5'),(5,16,10001,105,'Dinner','food is really awesome','5');
/*!40000 ALTER TABLE `customer_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_info`
--

DROP TABLE IF EXISTS `device_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device_info` (
  `DEVICE_INFO_ID` bigint(20) NOT NULL,
  `DEVICE_ID` bigint(20) NOT NULL,
  `CUST_ID` int(10) NOT NULL,
  `PLATFORM` varchar(15) NOT NULL,
  `DEVICE_NAME` varchar(18) DEFAULT NULL,
  `DEVICE_MODEL` varchar(30) DEFAULT NULL,
  `DEVICE_VERSION` varchar(10) DEFAULT NULL,
  `DEVICE_MFTRE` varchar(20) DEFAULT NULL,
  `CARRIER` varchar(20) DEFAULT NULL,
  `LANGUAGE` varchar(20) DEFAULT NULL,
  `IMEI` varchar(20) NOT NULL,
  `MACHINE_INFO` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`DEVICE_INFO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_info`
--

LOCK TABLES `device_info` WRITE;
/*!40000 ALTER TABLE `device_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `error_log`
--

DROP TABLE IF EXISTS `error_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `error_log` (
  `ERROR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ERROR_CODE` char(5) DEFAULT NULL,
  `ERROR_MESSAGE` varchar(100) DEFAULT NULL,
  `ERROR_SQLSTATE` varchar(100) DEFAULT NULL,
  `ERROR_TIMESTAMP` timestamp NULL DEFAULT NULL,
  `ERROR_USERID` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ERROR_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `error_log`
--

LOCK TABLES `error_log` WRITE;
/*!40000 ALTER TABLE `error_log` DISABLE KEYS */;
INSERT INTO `error_log` VALUES (1,'42S22','Unknown column \'code\' in \'field list\'','1054',NULL,NULL),(2,'42S22','Unknown column \'code\' in \'field list\'','1054',NULL,NULL),(3,'42S22','Unknown column \'returnCustId\' in \'field list\'','1054',NULL,NULL),(4,'42S22','Unknown column \'returnCustId\' in \'field list\'','1054',NULL,NULL),(5,'23000','Duplicate entry \'4545\' for key \'MOBILEPHONE_UNIQUE\'','1062',NULL,NULL),(6,'23000','Duplicate entry \'fg45444@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(7,'23000','Duplicate entry \'fg45444@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(8,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(9,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(10,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(11,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(12,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(13,'23000','Duplicate entry \'fgs4@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062',NULL,NULL),(14,'23000','Duplicate entry \'9751502126\' for key \'MOBILEPHONE_UNIQUE\'','1062',NULL,NULL),(15,'23000','Duplicate entry \'pvfg5@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062','2016-07-26 04:08:09','deepak@localhost'),(16,'23000','Duplicate entry \'pvfg5@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062','2016-07-26 04:08:24','deepak@localhost'),(17,'23000','Duplicate entry \'pvfg5@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062','2016-07-26 04:09:05','deepak@localhost'),(18,'23000','Duplicate entry \'pvfg5@fgfg.com\' for key \'EMAIL_UNIQUE\'','1062','2016-07-26 04:09:26','deepak@localhost'),(19,'23000','Duplicate entry \'Chinese Daba\' for key \'CUISINE_NAME_UNIQUE\'','1062','2016-07-26 05:09:02','deepak@localhost'),(20,'23000','Cannot add or update a child row: a foreign key constraint fails (`gogeniedb01`.`order_item_detail`,','1452','2016-07-26 07:20:46','deepak@localhost'),(21,'23000','Duplicate entry \'972929\' for key \'BUSINESS_PHONE_UNIQUE\'','1062',NULL,NULL),(22,'42S22','Unknown column \'isdef_address\' in \'field list\'','1054','2016-07-26 08:20:44','deepak@localhost'),(23,'42S22','Unknown column \'isdef_address\' in \'field list\'','1054','2016-07-26 08:24:24','deepak@localhost'),(24,'42S22','Unknown column \'isdef_address\' in \'field list\'','1054','2016-07-26 08:26:28','deepak@localhost'),(25,'42S22','Unknown column \'isdef_address\' in \'field list\'','1054','2016-07-26 08:27:59','deepak@localhost'),(26,'42000','Result consisted of more than one row','1172','2016-07-26 09:59:05','deepak@localhost'),(27,'42S22','Unknown column \'isflag\' in \'field list\'','1054','2016-07-26 09:59:05','deepak@localhost'),(28,'42S22','Unknown column \'rtCountry\' in \'field list\'','1054',NULL,NULL),(29,'23000','Cannot add or update a child row: a foreign key constraint fails (`gogeniedb01`.`order_item_detail`,','1452','2016-08-01 21:44:32','deepak@localhost'),(30,'23000','Cannot add or update a child row: a foreign key constraint fails (`gogeniedb01`.`order_item_detail`,','1452','2016-08-01 21:45:09','deepak@localhost'),(31,'23000','Cannot add or update a child row: a foreign key constraint fails (`gogeniedb01`.`order_item_detail`,','1452','2016-08-01 22:28:22','deepak@localhost'),(32,'42S22','Unknown column \'cu.CUST_ISACTIVE\' in \'where clause\'','1054','2016-08-04 15:12:16','deepak@localhost'),(33,'42S22','Unknown column \'cpitt.CUST_ID\' in \'on clause\'','1054','2016-08-04 15:23:31','deepak@localhost'),(34,'23000','Duplicate entry \'9751502126\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-08-04 15:36:33','deepak@localhost'),(35,'42S22','Unknown column \'cu.CUST_ISACTIVE\' in \'where clause\'','1054','2016-08-04 15:58:56','deepak@localhost'),(36,'42000','Result consisted of more than one row','1172','2016-08-07 05:47:43','deepak@localhost'),(37,'42S22','Unknown column \'isflag\' in \'field list\'','1054','2016-08-07 05:47:43','deepak@localhost'),(38,'42S22','Unknown column \'UPDATEDATE\' in \'field list\'','1054','2016-08-07 05:59:24','deepak@localhost'),(39,'23000','Duplicate entry \'Biryani\' for key \'CUISINE_NAME_UNIQUE\'','1062','2016-08-07 06:59:24','deepak@localhost'),(40,'23000','Duplicate entry \'9751502126\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-08-07 07:13:35','deepak@localhost'),(41,'23000','Duplicate entry \'Non veg\' for key \'MENU_CATEGORY_NAME_UNIQUE\'','1062','2016-08-07 07:27:27','deepak@localhost'),(42,'23000','Duplicate entry \'107\' for key \'PRIMARY\'','1062','2016-08-08 07:03:26','deepak@localhost'),(43,'23000','Duplicate entry \'101\' for key \'PRIMARY\'','1062','2016-08-08 07:05:38','deepak@localhost'),(44,'23000','Duplicate entry \'101\' for key \'PRIMARY\'','1062','2016-08-08 07:07:49','deepak@localhost'),(45,'23000','Duplicate entry \'101\' for key \'PRIMARY\'','1062','2016-08-08 07:08:43','deepak@localhost'),(46,'23000','Duplicate entry \'101\' for key \'PRIMARY\'','1062','2016-08-08 07:10:49','deepak@localhost'),(47,'23000','Duplicate entry \'102\' for key \'PRIMARY\'','1062','2016-08-08 07:12:08','deepak@localhost'),(48,'23000','Duplicate entry \'102\' for key \'PRIMARY\'','1062','2016-08-08 07:14:33','deepak@localhost'),(49,'42S21','Duplicate column name \'RATING\'','1060','2016-08-11 21:42:26','deepak@localhost'),(50,'42S21','Duplicate column name \'RATING\'','1060','2016-08-11 21:43:48','deepak@localhost'),(51,'42000','In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column \'re','1140','2016-08-11 21:46:15','deepak@localhost'),(52,'42S21','Duplicate column name \'RATING\'','1060','2016-08-11 21:47:33','deepak@localhost'),(53,'42S21','Duplicate column name \'RATING\'','1060','2016-08-12 03:02:21','deepak@localhost'),(54,'42S21','Duplicate column name \'RATING\'','1060','2016-08-12 03:03:15','deepak@localhost'),(55,'42S21','Duplicate column name \'RATING\'','1060','2016-08-12 03:04:31','deepak@localhost'),(56,'42S21','Duplicate column name \'RATING\'','1060','2016-08-12 03:04:51','deepak@localhost'),(57,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-22 22:20:32','deepak@localhost'),(58,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-22 22:21:57','deepak@localhost'),(59,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-22 22:22:35','deepak@localhost'),(60,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:35:49','deepak@localhost'),(61,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:37:31','deepak@localhost'),(62,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:38:59','deepak@localhost'),(63,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:39:31','deepak@localhost'),(64,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:39:34','deepak@localhost'),(65,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 10:52:23','deepak@localhost'),(66,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-08-23 12:24:25','deepak@localhost'),(67,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 03:37:21','deepak@localhost'),(68,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 03:47:32','deepak@localhost'),(69,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 03:48:09','deepak@localhost'),(70,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 03:52:40','deepak@localhost'),(71,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 04:03:13','deepak@localhost'),(72,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 04:03:46','deepak@localhost'),(73,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 04:05:36','deepak@localhost'),(74,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 12:28:55','deepak@localhost'),(75,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 12:31:03','deepak@localhost'),(76,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 12:31:35','deepak@localhost'),(77,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:32:42','deepak@localhost'),(78,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:34:24','deepak@localhost'),(79,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:35:50','deepak@localhost'),(80,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:36:39','deepak@localhost'),(81,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:38:26','deepak@localhost'),(82,'23000','Column \'LASTNAME\' cannot be null','1048','2016-08-24 20:38:58','deepak@localhost'),(83,'42S22','Unknown column \'N\' in \'field list\'','1054','2016-08-30 04:32:20','deepak@localhost'),(84,'23000','Cannot add or update a child row: a foreign key constraint fails (`gogeniedb01`.`menu_item`, CONSTRA','1452','2016-09-09 08:11:10','deepak@localhost'),(85,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-09 08:11:10','deepak@localhost'),(86,'23000','Duplicate entry \'inttest@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-24 12:39:19','deepak@localhost'),(87,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-24 12:39:19','deepak@localhost'),(88,'23000','Duplicate entry \'inttest@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-24 12:55:57','deepak@localhost'),(89,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-24 12:55:57','deepak@localhost'),(90,'23000','Duplicate entry \'inttest@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-24 13:38:23','deepak@localhost'),(91,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-24 13:38:23','deepak@localhost'),(92,'23000','Duplicate entry \'0075130212\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-09-26 00:39:19','deepak@localhost'),(93,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-26 00:39:19','deepak@localhost'),(94,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-09-26 12:11:35','deepak@localhost'),(95,'23000','Column \'WORKPHONE\' cannot be null','1048','2016-09-26 12:21:31','deepak@localhost'),(96,'23000','Duplicate entry \'tamilselvianbumani@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-26 12:56:52','deepak@localhost'),(97,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-26 12:56:52','deepak@localhost'),(98,'23000','Duplicate entry \'tamilselvianbumani@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-26 13:05:12','deepak@localhost'),(99,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-26 13:05:12','deepak@localhost'),(100,'23000','Duplicate entry \'tamilselvianbumani@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-26 13:05:47','deepak@localhost'),(101,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-26 13:05:47','deepak@localhost'),(102,'23000','Duplicate entry \'tamilselvianbumani@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-09-26 13:06:11','deepak@localhost'),(103,'22001','Data too long for column \'estatus\' at row 1','1406','2016-09-26 13:06:11','deepak@localhost'),(104,'23000','Column \'MOBILEPHONE\' cannot be null','1048','2016-09-30 12:27:09','deepak@localhost'),(105,'23000','Column \'MOBILEPHONE\' cannot be null','1048','2016-09-30 12:35:49','deepak@localhost'),(106,'23000','Column \'MOBILEPHONE\' cannot be null','1048','2016-09-30 12:38:40','deepak@localhost'),(107,'23000','Column \'FIRSTNAME\' cannot be null','1048','2016-10-01 14:12:17','deepak@localhost'),(108,'23000','Column \'FIRSTNAME\' cannot be null','1048','2016-10-01 14:35:17','deepak@localhost'),(109,'23000','Column \'FIRSTNAME\' cannot be null','1048','2016-10-01 14:40:14','deepak@localhost'),(110,'23000','Column \'FIRSTNAME\' cannot be null','1048','2016-10-01 14:55:03','deepak@localhost'),(111,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-01 14:56:29','deepak@localhost'),(112,'23000','Column \'FIRSTNAME\' cannot be null','1048','2016-10-01 15:01:11','deepak@localhost'),(113,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-01 15:14:38','deepak@localhost'),(114,'23000','Column \'SECURITY_QUESTION1\' cannot be null','1048','2016-10-01 19:40:42','deepak@localhost'),(115,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-01 19:41:52','deepak@localhost'),(116,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-01 20:25:58','deepak@localhost'),(117,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-01 20:55:11','deepak@localhost'),(118,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-02 02:26:34','deepak@localhost'),(119,'23000','Duplicate entry \'inttest678299@gmail.com\' for key \'EMAIL_UNIQUE\'','1062','2016-10-02 02:32:49','deepak@localhost'),(120,'23000','Duplicate entry \'+919500336500\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-10-25 11:35:51','deepak@localhost'),(121,'23000','Duplicate entry \'+919500336500\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-10-25 11:41:47','deepak@localhost'),(122,'23000','Duplicate entry \'+919500336500\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-10-25 11:51:38','deepak@localhost'),(123,'23000','Duplicate entry \'+919500336500\' for key \'MOBILEPHONE_UNIQUE\'','1062','2016-10-25 11:55:54','deepak@localhost'),(124,'23000','Column \'VAT_AMOUNT\' cannot be null','1048','2016-10-26 05:21:13','deepak@localhost'),(125,'23000','Column \'VAT_AMOUNT\' cannot be null','1048','2016-10-26 05:22:24','deepak@localhost');
/*!40000 ALTER TABLE `error_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_category`
--

DROP TABLE IF EXISTS `menu_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_category` (
  `MENU_CATEGORY_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `MENU_CATEGORY_NAME` varchar(150) NOT NULL,
  `CUISINE_ID` bigint(20) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`MENU_CATEGORY_ID`),
  UNIQUE KEY `MENU_CATEGORY_NAME_UNIQUE` (`MENU_CATEGORY_NAME`),
  KEY `CUSINE_ID` (`CUISINE_ID`),
  CONSTRAINT `menu_category_ibfk_1` FOREIGN KEY (`CUISINE_ID`) REFERENCES `cuisine` (`CUISINE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10021 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_category`
--

LOCK TABLES `menu_category` WRITE;
/*!40000 ALTER TABLE `menu_category` DISABLE KEYS */;
INSERT INTO `menu_category` VALUES (4,'Mutton bryiyani',11,'1','2016-12-13',NULL,NULL,'2010-12-12','genie','Y'),(5,'Chicken briyani',12,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(6,'Veg briyani',13,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(7,'Mushroom briyani',14,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(8,'Chillichicken briyani',15,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(9,'Carrot briyani',16,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10001,'Vegetarian Starters',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10002,'Non-Veg Starters',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10003,'Indo-Chinese Veg Starters',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10004,'Indo-Chinese Non-Veg Starters',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10005,'Himalaya Combo',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10006,'Veg Main C0urse',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10007,'Non-Veg Main Course',11,'genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(10008,'Non veg',11,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10010,'chicken pulav',11,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10012,'Nonveg',11,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(10013,'Breads',132,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10014,'Sundries',132,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10015,'Starters',132,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10016,'Main Courses',132,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10017,'Biryani dishes',128,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10018,'Vegetarian dishes',128,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10019,'Vegetable side dishes',128,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10020,'Rice, bread and sundries',128,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `menu_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_item`
--

DROP TABLE IF EXISTS `menu_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_item` (
  `MENU_ITEM_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `MENU_ITEM_NAME` varchar(50) NOT NULL,
  `ITEM_DESCRIPTION` varchar(250) NOT NULL,
  `PRICE` decimal(10,2) NOT NULL,
  `SPECIAL_NOTES` varchar(100) DEFAULT NULL,
  `SPICELEVEL_DEFAULT` int(2) DEFAULT NULL,
  `IS_FLAGSHIP_ITEM` varchar(5) NOT NULL,
  `IMAGEURL` varchar(300) DEFAULT NULL,
  `IS_ITEM_AVAILABLE` varchar(10) NOT NULL,
  `CUISINE_ID` bigint(20) NOT NULL,
  `MENU_CATEGORY_ID` bigint(20) NOT NULL,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `MENU_ITEM_SIZE` int(2) DEFAULT NULL,
  `MENU_SUBCATEGORY_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`MENU_ITEM_ID`),
  KEY `CUSINE_ID` (`CUISINE_ID`),
  KEY `MENU_CATEGORY_ID` (`MENU_CATEGORY_ID`),
  KEY `RESTAURANT_ID` (`RESTAURANT_ID`),
  CONSTRAINT `menu_item_ibfk_1` FOREIGN KEY (`CUISINE_ID`) REFERENCES `cuisine` (`CUISINE_ID`),
  CONSTRAINT `menu_item_ibfk_2` FOREIGN KEY (`MENU_CATEGORY_ID`) REFERENCES `menu_category` (`MENU_CATEGORY_ID`),
  CONSTRAINT `menu_item_ibfk_3` FOREIGN KEY (`RESTAURANT_ID`) REFERENCES `restaurant` (`RESTAURANT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20035 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_item`
--

LOCK TABLES `menu_item` WRITE;
/*!40000 ALTER TABLE `menu_item` DISABLE KEYS */;
INSERT INTO `menu_item` VALUES (18,'Rava uppuma','Rava special',10.00,'Super quality',1,'0','image','yes',11,4,32,'1','2016-12-13','2010-12-12','genie','2010-12-12','genie','Y',10,NULL),(19,'Mutton spicy','Meat spicy',10.00,'Super quality',1,'1','image','1',12,5,33,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(20,'Chicken rice','Vegetable mix',10.00,'Super quality',1,'1','image','1',13,6,34,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(21,'Broilerchicken','Chilli spicy',10.00,'Super quality',1,'1','image','1',13,6,34,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(22,'Briyani veg','Sweet special',10.00,'Super quality',1,'1','image','1',14,7,35,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(23,'Rice veg','Meals special',10.00,'Super quality',1,'1','image','1',15,8,36,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(24,'Rava uppuma','Rava special',10.00,'Super quality',1,'1','image','1',16,9,37,'1','2016-12-13',NULL,NULL,NULL,NULL,NULL,5,NULL),(10001,'Poppadom Tray (Per Person)','Descriptions will be all same for now',1.50,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10001,'genie','2016-01-01',NULL,NULL,NULL,NULL,'0',NULL,NULL),(10002,'Himalaya Special Tandoori Veg Sizzler','Descriptions will be all same for now',11.95,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10001,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10081,'Methi Paneer','Descriptions will be all same for now',6.95,'Some special notes',4,'0','/abc/abc/a.jpg','0',11,10004,10001,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10082,'Chilli item','Spicy',10.00,'Special',1,'1','image','yes',11,4,32,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(10083,'Mutton','Meat spicy',10.00,'Super quality',1,'1','image','available',11,4,32,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(10084,'Mutton','Meat spicy',10.00,'Super quality',1,'1','image','available',11,4,32,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(10085,'Chilli item','Spicy',10.00,'Special',1,'1','image','yes',11,4,32,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(20001,'Poppadom Tray (Per Person)','Descriptions will be all same for now',1.50,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,'0',NULL,NULL),(20002,'Himalaya Special Tandoori Veg Sizzler','Descriptions will be all same for now',11.95,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20003,'Methi Paneer','Descriptions will be all same for now',6.95,'Some special notes',4,'0','/abc/abc/a.jpg','0',11,10004,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20004,'Poppadom Tray (Per Person)','Descriptions will be all same for now',1.50,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,'0',NULL,NULL),(20005,'Himalaya Special Tandoori Veg Sizzler','Descriptions will be all same for now',11.95,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20006,'Methi Paneer','Descriptions will be all same for now',6.95,'Some special notes',4,'0','/abc/abc/a.jpg','0',11,10004,10027,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20007,'Chilli item','Spicy',10.00,'Special',1,'1','image','yes',11,4,10027,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(20008,'Mutton','Meat spicy',10.00,'Super quality',1,'1','image','available',11,4,10028,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(20009,'Mutton','Meat spicy',10.00,'Super quality',1,'1','image','available',11,4,10029,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(20010,'Chilli item','Spicy',10.00,'Special',1,'1','image','yes',11,4,10028,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL,1,NULL),(20011,'Poppadom Tray (Per Person)','Descriptions will be all same for now',1.50,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10028,'genie','2016-01-01',NULL,NULL,NULL,NULL,'0',NULL,NULL),(20012,'Himalaya Special Tandoori Veg Sizzler','Descriptions will be all same for now',11.95,'Some special notes',2,'0','/abc/abc/a.jpg','0',11,10001,10029,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20013,'Methi Paneer','Descriptions will be all same for now',6.95,'Some special notes',4,'0','/abc/abc/a.jpg','0',11,10004,10029,'genie','2016-01-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20015,'Mutton Curry','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',11,10001,10001,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,NULL,0,NULL),(20016,'Mutton Fry','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',11,10001,10001,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,NULL,0,NULL),(20017,'Mutton Fry','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',11,10002,10002,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,NULL,0,NULL),(20018,'Veg Rice','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',11,10002,10002,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,NULL,0,NULL),(20019,'Pizza','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',11,10002,10002,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,NULL,0,NULL),(20020,'Prawn Puri','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10015,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10014),(20021,'Gobi Manchurian','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10015,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10015),(20022,'Chilli Chicken Dry','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10015,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10016),(20023,'Veg Mix Combo(3-4 People)','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10015,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10017),(20024,'Paneer Makhani','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10018),(20025,'Chicken Tikka Karahi Masala','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10019),(20026,'Veg Biryani','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10020),(20027,'Vegetable Chow Mein','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10021),(20028,'Vegetable Fried Rice','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10022),(20029,'Chicken Manchurian With Sauce','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10016,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,100023),(20030,'Poppadom Tray (Per Person)','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',132,10015,10118,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,10013),(20031,'Cooked with basmati rice and  curry','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',128,10017,10115,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,NULL),(20032,'Vegetables in a mild creamy sauce','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',128,10018,10115,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,NULL),(20033,'Spiced potato','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',128,10019,10115,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,NULL),(20034,'Boiled basmati rice','Desc',200.00,'Yummy',5,'0','/abc/abc/a.jpg','Yes',128,10020,10115,'gogenie','2016-09-09',NULL,NULL,NULL,NULL,'0',5,NULL);
/*!40000 ALTER TABLE `menu_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_item_like`
--

DROP TABLE IF EXISTS `menu_item_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_item_like` (
  `MENU_ITEM_LIKE_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `MENU_ITEM_ID` bigint(20) NOT NULL,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `CUST_ID` int(10) NOT NULL,
  `IS_LIKED` varchar(10) DEFAULT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT '0',
  PRIMARY KEY (`MENU_ITEM_LIKE_ID`),
  KEY `MENU_ITEM_ID` (`MENU_ITEM_ID`),
  KEY `RESTAURANT_ID` (`RESTAURANT_ID`),
  CONSTRAINT `menu_item_like_ibfk_1` FOREIGN KEY (`MENU_ITEM_ID`) REFERENCES `menu_item` (`MENU_ITEM_ID`),
  CONSTRAINT `menu_item_like_ibfk_2` FOREIGN KEY (`RESTAURANT_ID`) REFERENCES `restaurant` (`RESTAURANT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_item_like`
--

LOCK TABLES `menu_item_like` WRITE;
/*!40000 ALTER TABLE `menu_item_like` DISABLE KEYS */;
INSERT INTO `menu_item_like` VALUES (101,10001,10001,11000,'1','genie','2016-06-01','2010-12-12',NULL,'2010-12-12','genie','N'),(104,20017,10002,11000,'1','genie','2016-06-01',NULL,NULL,NULL,NULL,'Y'),(105,10002,10001,11000,'1','genie','2016-06-01',NULL,NULL,NULL,NULL,'Y'),(107,10081,10001,11000,'1','genie','2016-06-01','2010-12-12',NULL,NULL,NULL,'Y'),(108,10081,10001,11000,'1','genie','2016-06-01','2010-12-12',NULL,NULL,NULL,'Y'),(110,10081,10001,11000,'1','genie','2016-06-01','2010-12-12',NULL,NULL,NULL,'Y');
/*!40000 ALTER TABLE `menu_item_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_subcategory`
--

DROP TABLE IF EXISTS `menu_subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_subcategory` (
  `MENU_SUBCATEGORY_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `MENU_SUBCATEGORY_NAME` varchar(150) NOT NULL,
  `MENU_CATEGORY_ID` bigint(20) DEFAULT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`MENU_SUBCATEGORY_ID`),
  KEY `menu_subcategory_ibfk_1` (`MENU_CATEGORY_ID`),
  CONSTRAINT `menu_subcategory_ibfk_1` FOREIGN KEY (`MENU_CATEGORY_ID`) REFERENCES `menu_category` (`MENU_CATEGORY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10024 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_subcategory`
--

LOCK TABLES `menu_subcategory` WRITE;
/*!40000 ALTER TABLE `menu_subcategory` DISABLE KEYS */;
INSERT INTO `menu_subcategory` VALUES (10013,'Vegetarian ',10015,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10014,'Non-Veg',10015,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10015,'Indo-Chinese Veg ',10015,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10016,'Indo-Chinese Non-Veg ',10015,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10017,'Himalaya Combo',10015,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10018,'Vegetarian ',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10019,'Non-Veg',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10020,'Biryani',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10021,'Noodles',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10022,'Rice',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL),(10023,'Indo-Chinese ',10016,'gogenie','2016-12-13','2016-12-13',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `menu_subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item_detail`
--

DROP TABLE IF EXISTS `order_item_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item_detail` (
  `ORDER_ID` bigint(20) NOT NULL,
  `MENU_ITEM_ID` bigint(20) NOT NULL,
  `ITEM_NAME` varchar(50) NOT NULL,
  `QUANTITY` int(10) NOT NULL,
  `PRICE` decimal(10,2) NOT NULL,
  `SPECIAL_INS` varchar(200) DEFAULT NULL,
  `SPICE_LEVEL` int(2) DEFAULT NULL,
  `ORDER_ITEM_DETAILID` bigint(20) NOT NULL AUTO_INCREMENT,
  `MENU_ITEM_SIZE` int(2) DEFAULT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ORDER_ITEM_DETAILID`),
  KEY `ORDER_ID` (`ORDER_ID`),
  KEY `dfdf_idx` (`MENU_ITEM_ID`),
  CONSTRAINT `order_item_detail_ibfk_1` FOREIGN KEY (`ORDER_ID`) REFERENCES `customer_order` (`ORDER_ID`),
  CONSTRAINT `order_item_detail_ibfk_2` FOREIGN KEY (`MENU_ITEM_ID`) REFERENCES `menu_item` (`MENU_ITEM_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item_detail`
--

LOCK TABLES `order_item_detail` WRITE;
/*!40000 ALTER TABLE `order_item_detail` DISABLE KEYS */;
INSERT INTO `order_item_detail` VALUES (101,10001,'Poppadom Tray (Per Person)',3,4.00,'No onion, no pepper',3,100,NULL,'genie','2016-06-06',NULL,NULL,'2010-12-12','Y','genie'),(102,10001,'Poppadom Tray (Per Person)',3,4.00,'No onion, no pepper',3,101,NULL,'genie','2016-06-06',NULL,NULL,NULL,'0',NULL),(103,10001,'Poppadom Tray (Per Person)',3,4.00,'No onion, no pepper',3,103,NULL,'genie','2016-06-06',NULL,NULL,NULL,'0',NULL),(106,10001,'Poppadom Tray (Per Person)',3,4.00,'No onion, no pepper',3,104,NULL,'genie','2016-06-06',NULL,NULL,NULL,'0',NULL),(106,10081,'Methi Paneer',2,23.00,'No onion and make it spicy',3,108,NULL,'genie','2016-06-06',NULL,NULL,NULL,'0',NULL),(106,10002,'Himalaya Special Tandoori Veg Sizzler',2,11.00,'No onion and make it spicy',3,109,NULL,'genie','2016-06-06',NULL,NULL,NULL,'0',NULL),(132,18,'Chicken spicy',12,10.00,'Chilli taste',1,110,1,'121232','2016-07-03',NULL,NULL,NULL,NULL,NULL),(132,19,'Mutton spicy',12,10.00,'Super quality',1,111,1,'121232','2016-07-03',NULL,NULL,NULL,NULL,NULL),(110,19,'Chappathi',1,1.00,'special',5,118,10,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(110,19,'Roti',1,1.00,'special',5,119,10,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(133,18,'Rava uppuma',2,10.20,'littls spicy',2,120,2,'12321321','2016-07-16',NULL,NULL,NULL,NULL,NULL),(141,18,'Rava uppuma',12,10.00,'Chilli taste',1,121,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(141,10082,'Chilli item',12,10.00,'Super quality',1,122,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(142,18,'Rava uppuma',12,10.00,'Chilli taste',1,123,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(142,10082,'Chilli item',12,10.00,'Super quality',1,124,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(143,18,'Rava uppuma',12,10.00,'Chilli taste',1,125,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(143,10082,'Chilli item',12,10.00,'Super quality',1,126,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(144,18,'Rava uppuma',12,10.00,'Chilli taste',1,127,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(144,10082,'Chilli item',12,10.00,'Super quality',1,128,5,'121232','2016-07-16',NULL,NULL,NULL,NULL,NULL),(145,18,'Rava uppuma',12,10.00,'Chilli taste',1,129,5,'121232','2016-07-23',NULL,NULL,NULL,NULL,NULL),(145,10082,'Chilli item',12,10.00,'Super quality',1,130,5,'121232','2016-07-23',NULL,NULL,NULL,NULL,NULL),(146,18,'Rava uppuma',12,10.00,'Chilli taste',1,131,5,'121232','2016-07-23',NULL,NULL,NULL,NULL,NULL),(146,10082,'Chilli item',12,10.00,'Super quality',1,132,5,'121232','2016-07-23',NULL,NULL,NULL,NULL,NULL),(101,10001,'Rava uppuma',12,10.00,'special',5,134,10,'genie','2016-12-13',NULL,NULL,'2010-12-12','Y','genie'),(133,18,'Rava uppuma',2,10.20,'littls spicy',2,136,2,'12321321','2016-07-16',NULL,NULL,NULL,NULL,NULL),(133,18,'Rava uppuma',2,10.20,'littls spicy',2,139,2,'12321321','2016-07-16',NULL,NULL,NULL,NULL,NULL),(133,18,'Rava uppuma',2,10.20,'littls spicy',2,140,2,'12321321','2016-07-16',NULL,NULL,NULL,NULL,NULL),(133,18,'Rava uppuma',2,10.20,'littls spicy',2,141,2,'12321321','2016-07-16',NULL,NULL,NULL,NULL,NULL),(110,19,'Chappathi',1,1.00,'special',5,142,10,'genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(151,18,'Chicken spicy',12,10.00,'Chilli taste',1,143,1,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(151,19,'Mutton spicy',12,10.00,'Super quality',1,144,1,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(152,18,'Rava uppuma',12,10.00,'Chilli taste',1,145,5,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(152,10082,'Chilli item',12,10.00,'Super quality',1,146,5,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(153,18,'Rava uppuma',12,10.00,'Chilli taste',1,147,5,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(153,10082,'Chilli item',12,10.00,'Super quality',1,148,5,'121232','2016-09-28',NULL,NULL,NULL,NULL,NULL),(154,10001,'Poppadom Tray (Per Person)',1,1.50,'Some special notes',1,149,0,'121232','2016-10-26',NULL,NULL,NULL,NULL,NULL),(155,10081,'Methi Paneer',1,6.95,'Some special notes',1,150,0,'121232','2016-10-26',NULL,NULL,NULL,NULL,NULL),(156,18,'Rava uppuma',12,10.00,'Chilli taste',1,151,5,'121232','2016-10-31',NULL,NULL,NULL,NULL,NULL),(156,10082,'Chilli item',12,10.00,'Super quality',1,152,5,'121232','2016-10-31',NULL,NULL,NULL,NULL,NULL),(157,10081,'Methi Paneer',1,6.95,'',1,153,0,'121232','2016-11-01',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `order_item_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_status` (
  `ORDER_STATUS_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ORDER_STATUS` varchar(30) NOT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ORDER_STATUS_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES (2,'Ready','1'),(3,'Waiting','1'),(4,'Preparing','1');
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `RESTAURANT_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RESTAURANT_NAME` varchar(50) NOT NULL,
  `BUSINESS_PHONE` varchar(15) NOT NULL,
  `EMAILID` varchar(60) NOT NULL,
  `ADDRESS1` varchar(50) NOT NULL,
  `ADDRESS2` varchar(50) DEFAULT NULL,
  `RESTAURANT_ISACTIVE` varchar(20) DEFAULT '\0',
  `COUNTRY_ID` int(5) NOT NULL,
  `STATE_ID` int(10) NOT NULL,
  `CITY_ID` int(10) NOT NULL,
  `LATITUDE` decimal(12,9) NOT NULL,
  `LONGITUDE` decimal(12,9) NOT NULL,
  `CUISINE_ID` bigint(20) NOT NULL,
  `RATING` int(2) NOT NULL,
  `PRICING_CATEGORY` int(2) NOT NULL,
  `ZIPCODE` varchar(10) NOT NULL,
  `LANDMARK` varchar(60) DEFAULT NULL,
  `DELIVERY_FEE` float NOT NULL DEFAULT '0',
  `RESTAURANT_WEBSITE` varchar(50) DEFAULT NULL,
  `CREATEDDATE` date NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT '0',
  `RESTAURANT_OPENINGTIME` time DEFAULT NULL,
  `RESTAURANT_CLOSINGTIME` time DEFAULT NULL,
  `MINIMUM_ORDER_VAL_DELIVERY` float NOT NULL,
  `BASE_DELIVERY_TIME` time NOT NULL,
  `IMAGEURL` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`RESTAURANT_ID`),
  UNIQUE KEY `BUSINESS_PHONE_UNIQUE` (`BUSINESS_PHONE`),
  KEY `COUNTRY_ID` (`COUNTRY_ID`),
  KEY `STATE_ID` (`STATE_ID`),
  KEY `CITY_ID` (`CITY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10120 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (32,'Go Go Pizza','4423111221','gopizza@gmail.com','141 Queensway, Bletchley','Buckinghamshire','Y',2,2,3,51.995391000,-0.728436000,11,5,10,'MK2 2TP','twin towers',10,'http://www.pizzagogo.co.uk/stores/milton-keynes','2016-12-13','1','2016-12-13','genie','2010-12-12','genie','Y','12:30:00','00:00:01',0,'00:00:00',NULL),(33,'Anandbhavan','042225177','anandbhavan@gmail.com','coimbatore','saravanpatti','Y',3,4,4,52.000000000,-1.000000000,11,5,10,'641035','near kovai',10,'www.eton.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(34,'Aryabhavan','0422251166','aryabhavan@gmail.com','Pune','saravanpatti','Y',4,4,5,52.000000000,-1.000000000,12,5,10,'641035','near twintower',10,'www.aryabhavan.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(35,'Krishnasweets','0422251155','Krishnasweets@gmail.com','Madras','Gandhipuram','Y',5,4,6,52.000000000,-1.000000000,12,5,10,'641035','near tower',10,'www.Krishnasweets.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(36,'Rosewood','0422251121','Rosewood@gmail.com','Salem','Arapalyam','Y',5,4,7,52.000000000,-1.000000000,13,5,10,'641035','near busstand',10,'www.Rosewood.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(37,'Thendral','0422251123','Thendral@gmail.com','Erode','Erodecity','Y',5,5,8,52.000000000,-1.000000000,14,5,10,'641035','near school',10,'www.Thendral.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(38,'Chettinadu','0422251122','Chettinadu@gmail.com','Madhurai','Madhuraicity','Y',5,5,9,52.000000000,-1.000000000,15,5,10,'641035','near school',10,'www.Chettinadu.com','2016-12-13','1',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',0,'00:00:00',NULL),(10001,'Himalaya','447405122100','himalaya.info@gmail.com','2a Cambridge Street','','Y',100,101,101,9.477221100,77.806922400,11,5,3,'MK2 2TP','',3.5,'http://himalayafinedining.co.uk','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','00:00:01','23:59:59',2.5,'00:30:00',NULL),(10002,'Willen Tandoori','447800122100','willen.tandoori@gmail.com','2 Granville Square','Buckinghamshire','Y',100,101,101,9.477221100,77.806922400,12,1,2,'MK2 2TP','',2,'http://www.willentandoori.com/','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','00:00:01','23:59:59',1.5,'00:20:00',NULL),(10003,'Go Go Pizza','442311122100','gopizza@gmail.com','141 Queensway, Bletchley','','Y',100,101,101,9.477221100,77.806922400,11,3,2,'MK2 2TP','',2.5,'http://www.pizzagogo.co.uk/stores/milton-keynes','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','00:00:01','23:59:59',3.5,'00:10:00',NULL),(10004,'Punjabhi Dhaba','449876543210','info@punjabi.com','900 Windy Cove Cir','Door 2003','Y',100,101,101,52.000000000,-1.000000000,14,3,3,'mk2 chy','',3,'www.pdhaba.com','2016-01-01','genie',NULL,NULL,NULL,NULL,'0','00:30:00','23:00:00',5,'00:30:00',NULL),(10005,'Dominos Pizza','9729292','Dominos.info@gmail.com','1-6 Bateman','Row London EC2A3HH','Y',100,101,101,51.995254000,-0.728114000,16,5,10,'mk2 chy',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','00:00:01','23:59:59',5,'00:20:00',NULL),(10008,'Shankar Cafe Express','132132132132','shankarcafe@gogenie.com',' dasfkjkasjfk',' 23423 fdas','Y',2,2,3,51.995391000,-0.728436000,11,4,2,'MK2 2TP','Near London bridge',5,'shankarcafe@restauant.com','2016-07-16','gogenie','2016-07-16','customer',NULL,NULL,'0','00:00:01','23:59:59',20,'23:46:29',NULL),(10024,'Dominos','972929','Dominos.info@gmail.com','1-6 Bateman','Row London','Y',100,101,101,51.995254000,-0.728114000,16,5,10,'mk2',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','00:00:01','23:59:59',5,'00:20:00',NULL),(10026,'Dominos Pizza','97292','Dominos.info@gmail.com','1-6 Bateman','Row London EC2A3HH','Y',100,101,101,51.995254000,-0.728114000,16,5,10,'mk2 chy',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00',NULL),(10027,'Himalaya','8045534132','himalaya.info@gmail.com','3221 copper mill trace','','Y',100,101,101,37.633017000,-77.560181000,11,5,3,'23294','',3.5,'http://himalayafinedining.co.uk','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',3.5,'00:30:00',NULL),(10028,'Willen Tandoori','8045534109','willen.tandoori@gmail.com','9310 windy cover circle','Buckinghamshire','Y',100,101,101,37.633017000,-77.560181000,11,3,2,'23294','',2.5,'http://www.willentandoori.com/','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','09:00:00','23:00:00',3.5,'00:20:00',NULL),(10029,'Go Go Pizza','8045534199','gopizza@gmail.com','9300 windy cove circle','','Y',100,101,101,37.633017000,-77.560181000,14,3,2,'23294','',2.5,'http://www.pizzagogo.co.uk/stores/milton-keynes','2016-06-21','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',3.5,'00:10:00',NULL),(10030,'Punjabhi Dhaba','8045534190','info@punjabi.com','900 Windy Cove Cir','Door 2003','Y',100,101,101,37.633017000,-77.560181000,14,3,3,'23294','',3,'www.pdhaba.com','2016-01-01','genie',NULL,NULL,NULL,NULL,'0','00:30:00','23:00:00',5,'00:30:00',NULL),(10031,'Dominos Pizza','8045534131','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00',NULL),(10098,'Dial-a-Curry','8045534111','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://dialacurry'),(10099,'Mahbirs Tandooriy','8045574132','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://MahbirsTandoori'),(10100,'Chicki-licious','8045534133','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10101,'Golden Palace','8045534134','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10102,'Herbies Pizza','8045534135','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10103,'Himalaya Tandoori','8045534136','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10104,'Just Curry Deals','8045534137','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10105,'Krispy Foods','8045534138','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10106,'Mastee','8045534139','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10107,'Munch Box','8045534110','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10108,'Noor Indian Takeaway','8045534171','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10109,'Orient Pizza & Fish & Chips','8045534112','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-li,cious'),(10110,'Oriental Garden','8045534113','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10111,'Oriental Go Go','8045534114','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10112,'Papa Lui Pizza Grill & Peri Peri','8045534115','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10113,'Persian Grill','8045534116','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10114,'Pronto Pizza','8045534117','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,16,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10115,'Purple Spice Restaurant','8045534118','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,128,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10116,'Rose of India','8045534119','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,129,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10117,'Sai Mantra Restaurant','8045534120','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,130,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10118,'Sinbad Express','8045534121','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,132,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious'),(10119,'Chicki-licious','8045534152','Dominos.info@gmail.com','3220 copper mill trace','Row London EC2A3HH','Y',100,101,101,37.633017000,-77.560181000,127,5,10,'23294',' Pepper Deals Ltd',0,'dominos.vouchercodes.co.uk','2016-12-13','genie',NULL,NULL,NULL,NULL,'0','23:59:59','00:00:01',5,'00:20:00','http://Chicki-licious');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_acct`
--

DROP TABLE IF EXISTS `restaurant_acct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant_acct` (
  `RESTAURANT_ACCT_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `BANK_ACCT_TYPE` char(20) NOT NULL,
  `BANK_NAME` char(50) NOT NULL,
  `BANK_ROUTING_NUMBER` varchar(70) NOT NULL,
  `BANK_ACCT_NUMBER` varchar(70) NOT NULL,
  `BANK_ACCT_HOLDER_NM` varchar(70) NOT NULL,
  `SETTLMNT_DATE` date DEFAULT NULL,
  `BILLING_ST_DATE` date DEFAULT NULL,
  `BILLING_END_DATE` date DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `CREATEDDATE` date NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`RESTAURANT_ACCT_ID`),
  KEY `RESTAURANT_ID` (`RESTAURANT_ID`),
  CONSTRAINT `restaurant_acct_ibfk_1` FOREIGN KEY (`RESTAURANT_ID`) REFERENCES `restaurant` (`RESTAURANT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_acct`
--

LOCK TABLES `restaurant_acct` WRITE;
/*!40000 ALTER TABLE `restaurant_acct` DISABLE KEYS */;
INSERT INTO `restaurant_acct` VALUES (1,32,'Savings','Indus','0012345','500123','Sachin','2016-12-13','2016-12-13','2016-12-13','Y','2016-12-13','genie',NULL,NULL,'2010-12-12','genie'),(2,10008,'Savings','Indus','0012345','500123','Shankar C','2016-12-12','2016-12-12','2016-12-22',NULL,'2016-07-16','gogenie',NULL,NULL,NULL,NULL),(3,32,'Savings','Ind','00123','5001','Sachin','2016-12-13','2016-12-13','2016-12-13',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL),(4,32,'Savings','Ind','00123','5001','Sachin','2016-12-13','2016-12-13','2016-12-13',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL),(5,32,'Savings','Indus','0012345','500123','Sachin','2016-12-13','2016-12-13','2016-12-13',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `restaurant_acct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_employee`
--

DROP TABLE IF EXISTS `restaurant_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant_employee` (
  `RESTAURANT_EMPLOYEE_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RESTAURANT_ID` bigint(20) NOT NULL,
  `EMPLOYEE_NAME` varchar(30) NOT NULL,
  `EMPLOYEE_MOBILENUMBER` varchar(30) NOT NULL,
  `EMPLOYEE_DESIGNATION` varchar(30) DEFAULT NULL,
  `USERNAME` varchar(70) NOT NULL,
  `PASSWORD` varchar(70) NOT NULL,
  `EMAILID` varchar(50) NOT NULL,
  `IS_ACCOUNTMANAGER` varchar(10) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `CREATEDDATE` date NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`RESTAURANT_EMPLOYEE_ID`),
  KEY `RESTAURANT_ID` (`RESTAURANT_ID`),
  CONSTRAINT `restaurant_employee_ibfk_1` FOREIGN KEY (`RESTAURANT_ID`) REFERENCES `restaurant` (`RESTAURANT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_employee`
--

LOCK TABLES `restaurant_employee` WRITE;
/*!40000 ALTER TABLE `restaurant_employee` DISABLE KEYS */;
INSERT INTO `restaurant_employee` VALUES (1,32,'Sachin','9751502126','Analyst','Sachin','Password','sachin@gmail.com','yes','Y','2016-12-13','genie','2010-12-12','genie','2010-12-12','genie'),(2,10008,'Moorthi','24322432432','supplier','dsfkjasf','$2a$12$Stj2LCMecvglWomiSbHMk.GT1JhI2roOJgi1B6e2dfTu9Wq5T5oMC','dsafkjaklj@adf.com',NULL,NULL,'2016-07-17','gogenie',NULL,NULL,NULL,NULL),(3,10008,'Moorthi','24322432432','supplier','dsfkjasf','$2a$12$/VgSLN503mqlNCYtatkAGe3.9YBngQ6zzS4Y2ifF4Hy.nDqHUpVxS','dsafkjaklj@adf.com',NULL,NULL,'2016-07-23','gogenie',NULL,NULL,NULL,NULL),(4,10008,'Moorthi','24322432432','supplier','dsfkjasf','$2a$12$LRSUnaQzi.EnRpu3raQSJOF3RCWcFFE.tTBqT.cq8y/ARgWHBfMT6','dsafkjaklj@adf.com',NULL,NULL,'2016-07-25','gogenie',NULL,NULL,NULL,NULL),(5,10008,'test4','323232','test','test','$2a$12$qc7C5rZxf3xiLp51NrHUJO.5rDPZGNZtJhPHmyiengIeOBtkInixe','test@test.com',NULL,NULL,'2016-07-25','gogenie',NULL,NULL,NULL,NULL),(6,10008,'test4','323232','test','test','$2a$12$bT.fSP9qTBBa7kbjYL8/Ued9s8owV10ZZWCEYtZUL1bjbzGpTbg0G','test@test.com',NULL,NULL,'2016-07-25','gogenie',NULL,NULL,NULL,NULL),(7,32,'Sachin','97515','Analyst','tendul','Password','sachin@gmail.com','yes',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL),(8,32,'Sachin','97515','Analyst','tendul','Password','sachin@gmail.com','yes',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL),(9,32,'Sachin','9751502126','Analyst','Sachin','Password','sachin@gmail.com','yes',NULL,'2016-12-13','genie',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `restaurant_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `security_question`
--

DROP TABLE IF EXISTS `security_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `security_question` (
  `QUESTION_ID` int(10) NOT NULL AUTO_INCREMENT,
  `SECURITY_QUESTION` varchar(100) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  `ISACTIVE` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`QUESTION_ID`),
  UNIQUE KEY `SECURITY_QUESTION_UNIQUE` (`SECURITY_QUESTION`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `security_question`
--

LOCK TABLES `security_question` WRITE;
/*!40000 ALTER TABLE `security_question` DISABLE KEYS */;
INSERT INTO `security_question` VALUES (1,'What is your favorite car','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'1'),(2,'What is your favorite sports','gogenie','2016-09-25',NULL,NULL,NULL,NULL,NULL,'1');
/*!40000 ALTER TABLE `security_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `state` (
  `STATE_ID` int(10) NOT NULL AUTO_INCREMENT,
  `COUNTRY_ID` int(5) NOT NULL,
  `STATE_NAME` varchar(20) NOT NULL,
  `CREATEDBY` varchar(20) NOT NULL,
  `CREATEDDATE` date NOT NULL,
  `UPDATEDDATE` date DEFAULT NULL,
  `UPDATEDBY` varchar(20) DEFAULT NULL,
  `DELETEDDATE` date DEFAULT NULL,
  `DELETEDBY` varchar(20) DEFAULT NULL,
  `DELETEFLAG` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`STATE_ID`),
  KEY `COUNTRY_ID` (`COUNTRY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (2,2,'tamilnadu','1','2016-12-13',NULL,NULL,'2010-12-12','genie','Y'),(3,3,'andhra','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(4,4,'kerala','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(5,5,'maharashtra','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(6,5,'dehli','1','2016-12-13',NULL,NULL,NULL,NULL,NULL),(101,100,'N/A','genie','2016-06-21',NULL,NULL,NULL,NULL,'0'),(102,2,'Andhra','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(103,2,'delhi','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(104,2,'delhi','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL),(105,2,'Andhra','genie','2016-12-13',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zipcode`
--

DROP TABLE IF EXISTS `zipcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zipcode` (
  `ZIPCODE_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ZIPCODE` varchar(10) DEFAULT NULL,
  `LATITUDE` decimal(12,9) DEFAULT NULL,
  `LONGITUDE` decimal(12,9) DEFAULT NULL,
  PRIMARY KEY (`ZIPCODE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zipcode`
--

LOCK TABLES `zipcode` WRITE;
/*!40000 ALTER TABLE `zipcode` DISABLE KEYS */;
INSERT INTO `zipcode` VALUES (15,'1',52.033889000,-0.772203000),(16,'122',5.000000234,5.000000234),(17,'AB2DEG',52.033889000,-0.772203000),(18,'641035',5.333300000,123.121200000),(19,'641035',5.333300000,123.121200000),(20,'641035',5.333300000,123.121200000);
/*!40000 ALTER TABLE `zipcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gogeniedb01'
--
/*!50003 DROP PROCEDURE IF EXISTS `delete_address_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_address_details`(
        IN  address_details_id  BIGINT(20) ,
        IN deleteddate   date ,
            IN deletedby varchar(20),
        OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);

        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.address_details ad  set ad.DELETEFLAG ='Y' ,ad.DELETEDDATE = deleteddate, ad.DELETEDBY=deletedby
    where ad.ADDRESS_DETAILS_ID=address_details_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = address_details_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_city` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_city`(
        IN  city_id INT(10) ,
        IN deleteddate   date ,
            IN deletedby varchar(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);

        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update

    update  gogeniedb01.city ci  set ci.DELETEFLAG ='Y' ,ci.DELETEDDATE = deleteddate, ci.DELETEDBY=deletedby
    where ci.CITY_ID=city_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = city_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_country` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_country`(
        IN  country_id INT(5) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
        OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);

        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.country cou  set cou.DELETEFLAG ='Y' ,cou.DELETEDDATE = deleteddate, cou.DELETEDBY=deletedby
    where cou.COUNTRY_ID=country_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = country_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_cuisine` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_cuisine`(
        IN  cuisine_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.cuisine cui  set cui.DELETEFLAG ='Y' ,cui.DELETEDDATE = deleteddate, cui.DELETEDBY=deletedby
    where cui.CUISINE_ID=cuisine_id;

   -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = cuisine_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_customer`(
        IN  cust_id  INT(10) ,
        IN deleteddate   date ,
            IN deletedby varchar(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.customer cus  set cus.DELETEFLAG ='Y' ,cus.DELETEDDATE = deleteddate, cus.DELETEDBY=deletedby
    where cus.CUST_ID=cust_id;

   -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = cust_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_customer_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_customer_order`(
        IN  order_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.customer_order cuor  set cuor.DELETEFLAG ='Y' ,cuor.DELETEDDATE = deleteddate, cuor.DELETEDBY=deletedby
    where cuor.ORDER_ID=order_id;

  -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = order_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_customer_payment_info` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_customer_payment_info`(
        IN  customer_payment_info_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deleteby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.customer_payment_info cupy  set cupy.DELETEDFLAG ='Y' ,cupy.DELETEDDATE = deleteddate, cupy.DELETEBY=deleteby
    where cupy.CUSTOMER_PAYMENT_INFO_ID=customer_payment_info_id;

   -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = customer_payment_info_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_menu_category` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_menu_category`(
        IN  menu_category_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.menu_category men  set men.DELETEFLAG ='Y' ,men.DELETEDDATE = deleteddate, men.DELETEDBY=deletedby
    where men.MENU_CATEGORY_ID=menu_category_id;


    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = menu_category_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_menu_item` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_menu_item`(
        IN  menu_item_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.menu_item ment  set ment.DELETEFLAG ='Y' ,ment.DELETEDDATE = deleteddate, ment.DELETEDBY=deletedby
    where ment.MENU_ITEM_ID=menu_item_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = menu_item_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_order_item_detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_order_item_detail`(
        IN  order_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
        OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.order_item_detail ord  set ord .DELETEFLAG ='Y' ,ord .DELETEDDATE = deleteddate, ord .DELETEDBY=deletedby
    where ord .ORDER_ID=order_id;


 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = order_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_restaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_restaurant`(
        IN  restaurant_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.restaurant res set res .DELETEFLAG ='Y' ,res .DELETEDDATE = deleteddate, res .DELETEDBY=deletedby
    where res .RESTAURANT_ID=restaurant_id;

   -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = restaurant_id ;

  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_restaurant_acct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_restaurant_acct`(
        IN  restaurant_acct_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.restaurant_acct rac  set rac .DELETEFLAG ='Y' ,rac .DELETEDDATE = deleteddate, rac .DELETEDBY=deletedby
    where rac .RESTAURANT_ACCT_ID=restaurant_acct_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = restaurant_acct_id ;
      -- Say what happened

  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_restaurant_employee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_restaurant_employee`(
        IN  restaurant_employee_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
        OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.restaurant_employee remp  set remp .DELETEFLAG ='Y' ,remp .DELETEDDATE = deleteddate, remp .DELETEDBY=deletedby
    where remp .RESTAURANT_EMPLOYEE_ID=restaurant_employee_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = restaurant_employee_id ;

  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_security_question` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_security_question`(


        IN  question_id INT(5) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
        OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
  -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);

        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  security_question cou  set cou.DELETEFLAG ='N' ,cou.DELETEDDATE = deleteddate, cou.DELETEDBY=deletedby
    where cou.QUESTION_ID=question_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = question_id ;
      -- Say what happened
      #SELECT sstatus;
  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    #SELECT estatus;
  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_state` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `delete_state`(
        IN  state_id BIGINT(20) ,
        IN deleteddate   DATE ,
            IN deletedby VARCHAR(20),
                OUT estatus varchar(50),
        OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        #DECLARE estatus TEXT DEFAULT null;
        #DECLARE sstatus TEXT DEFAULT null;
        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

  -- Perform the update
    update  gogeniedb01.state st  set st .DELETEFLAG ='Y' ,st .DELETEDDATE = deleteddate, st .DELETEDBY=deletedby
    where st .STATE_ID=state_id;

    -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = state_id ;

  ELSE
  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_like_counts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_all_like_counts`(

IN  restaurant_id     bigint(20)

     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);



  DECLARE estatus TEXT DEFAULT null;


  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
    Select MENU_ITEM_ID,sum(is_liked) as count from menu_item_like where RESTAURANT_ID=restaurant_id
    and DELETEFLAG ='Y'  group by MENU_ITEM_ID;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN

    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_carddetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_carddetails`( IN custid int(20),IN card_last_four varchar(5))
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
CARDNUMBER,EXPIRYDATE,CVV_NUMBER,NAME_ON_CARD
FROM customer_payment_info where CUST_ID =custid and CARD_LAST_FOUR =card_last_four ;

-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_customer`(
   IN cust_id int,
   IN email varchar(60)

   )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch

Select distinct
C.CUST_ID ,C.FIRSTNAME,C.LASTNAME,C.DATEOFBIRTH,C.EMAIL,
C.PASSWORD,
C.WORKPHONE,
C.MOBILEPHONE ,
C.PHONE_ISVALID,
C.CUST_ISACTIVE,
C.SECURITY_QUESTION1,
C.SECURITY_ANSWER1,
C.SECURITY_QUESTION2,
C.SECURITY_ANSWER2,
ad.ADDRESS_DETAILS_ID ,
ad.COUNTRY_ID,
ad.STATE_ID ,
ad.CITY_ID,
ad.ADDRESS1,
ad.ADDRESS2 ,
ad.ZIPCODE ,
ad.ISDEFAULT_ADDRESS,
cpi.CUSTOMER_PAYMENT_INFO_ID ,
cpi.PAYEMENTTYPE ,
cpi.CARDNUMBER,
cpi.CARD_LAST_FOUR,
cpi.EXPIRYDATE ,
cpi.CVV_NUMBER ,
cpi.NAME_ON_CARD ,
cpi.ADDRESS1 as payment_address_1,
cpi.ADDRESS2 as payment_address_2,
cpi.CITY_ID as payment_city,
cpi.STATE_ID as payment_state,
cpi.COUNTRY_ID as payment_country,
cpi.ZIPCODE as payment_zipcode,
cpi.ISDEFAULT as payment_default_addr
FROM customer C join address_details ad on (C.CUST_ID=ad.CUST_ID)
join customer_payment_info cpi on (cpi.CUST_ID=C.CUST_ID)
Where C.CUST_ISACTIVE='Y' and (C.CUST_ID=cust_id or C.EMAIL=email);

-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_credentials` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_customer_credentials`(
   IN email_id varchar(60)

   )
BEGIN

-- Declare variables to hold diagnostics area information
DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
DECLARE ERROR_MESSAGE varchar(100);
DECLARE ERROR_SQLSTATE varchar(100);


DECLARE estatus TEXT DEFAULT null;
DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;


 IF EXISTS (select * from customer where EMAIL = email_id ) THEN
  BEGIN

   IF EXISTS (select * from customer where EMAIL = email_id and CUST_ISACTIVE ='N')  THEN
      BEGIN
           SET sstatus=2;
   END;
   Else
   BEGIN
    Select distinct cu.CUST_ID,cu.PASSWORD FROM customer cu
                        Where cu.CUST_ISACTIVE ='Y' and cu.EMAIL =email_id;

   END;
   END IF;

  END;
  else
  BEGIN

   SET sstatus=1;
  END;
  END IF;





  -- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
   SELECT sstatus;
  ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened

  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_customer_order`( IN custid int(20))
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
co.ORDER_ID ,
co.RESTAURANT_ID ,
co.ORDER_STATUS_ID ,
co.CUST_ID ,
co.PAYMENT_TYPE,
co.PAYMENT_STATUS,
co.SPECIAL_INS,
co.TOTAL_AMOUNT,
co.DISCOUNT,
co.CREATEDDATE,
co.DELIVERY_REQUEST_DATE,
co.DELIVERY_REQUEST_TIME,
co.VAT_AMOUNT,
co.SERVICE_CHARGE,
co.DELIVERY_FEE,
co.CARD_TXN_FEE,
oid.ORDER_ID ,
oid.MENU_ITEM_ID ,
oid.ITEM_NAME,
oid.QUANTITY,
oid.PRICE,
oid.SPECIAL_INS,
oid.SPICE_LEVEL,
oid.CREATEDDATE,
oid.UPDATEDDATE,
oid.ORDER_ITEM_DETAILID ,
oid.MENU_ITEM_SIZE
# co.ORDER_STATUS_ID - Duplicate field
FROM customer_order co left join order_item_detail oid on (co.ORDER_ID = oid.ORDER_ID)
left join  order_status os on (os.ORDER_STATUS_ID =  co.ORDER_STATUS_ID)
where co.CUST_ID=custid
# order by co.CREATEDDATE asc; - last orders should come first
order by co.ORDER_ID desc;

-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_order_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_customer_order_status`( IN orderId bigint)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
co.ORDER_ID ,
co.RESTAURANT_ID ,
co.ORDER_STATUS_ID ,
co.CUST_ID ,
co.PAYMENT_TYPE,
co.PAYMENT_STATUS,
co.SPECIAL_INS,
co.TOTAL_AMOUNT,
co.DISCOUNT,
co.CREATEDDATE,
co.DELIVERY_REQUEST_DATE,
co.DELIVERY_REQUEST_TIME,
co.VAT_AMOUNT,
co.SERVICE_CHARGE,
co.DELIVERY_FEE,
co.CARD_TXN_FEE,
oid.ORDER_ID ,
oid.MENU_ITEM_ID ,
oid.ITEM_NAME,
oid.QUANTITY,
oid.PRICE,
oid.SPECIAL_INS,
oid.SPICE_LEVEL,
oid.CREATEDDATE,
oid.UPDATEDDATE,
oid.ORDER_ITEM_DETAILID ,
oid.MENU_ITEM_SIZE
#co.ORDER_STATUS_ID - Duplicate field
FROM customer_order co left join order_item_detail oid on (co.ORDER_ID = oid.ORDER_ID)
left join  order_status os on (os.ORDER_STATUS_ID =  co.ORDER_STATUS_ID)
#where co.CUST_ID=custid order by co.CREATEDDATE asc;
where co.ORDER_ID=orderId order by co.CREATEDDATE asc;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_payment_type` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_customer_payment_type`(
   IN cust_id bigint

   )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
cpi.CUSTOMER_PAYMENT_INFO_ID,
cpi.CUST_ID ,
cpi.PAYEMENTTYPE ,
cpi.CARDNUMBER ,
cpi.EXPIRYDATE,
cpi.CVV_NUMBER ,
cpi.NAME_ON_CARD ,
cpi.ISDEFAULT
FROM customer_payment_info cpi
Where cpi.CUST_ID =cust_id;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurants_have_this_menu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_restaurants_have_this_menu`(IN mylat DECIMAL(9,6), IN mylon DECIMAL(9,6),IN dist int, IN menuItem varchar(50))
BEGIN


 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        DECLARE estatus TEXT DEFAULT null;

declare lon1 float;
declare lon2 float;
declare lat1 float;
declare lat2 float;

        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

         insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;
-- calculate lon and lat for the rectangle:
set lon1 = mylon-dist/abs(cos(radians(mylat))*69);
set lon2 = mylon+dist/abs(cos(radians(mylat))*69);
set lat1 = mylat-(dist/69);
set lat2 = mylat+(dist/69);

Select
Res.RESTAURANT_ID,
Res.RESTAURANT_NAME,
Res.ADDRESS1,
Res.LANDMARK,
Res.RATING,
Res.PRICING_CATEGORY,
Res.DELIVERY_FEE,
Res.MINIMUM_ORDER_VAL_DELIVERY,
3959 * 2 * ASIN(SQRT( POWER(SIN((mylat-Res.LATITUDE) * pi()/180 / 2), 2) +COS(mylat * pi()/180) * COS(Res.LATITUDE * pi()/180) *POWER(SIN((mylon-Res.LONGITUDE) * pi()/180 / 2), 2) )) as distance,
Res.RESTAURANT_WEBSITE,
Res.RESTAURANT_OPENINGTIME,
Res.RESTAURANT_CLOSINGTIME,
Res.BASE_DELIVERY_TIME


-- mi.MENU_ITEM_ID,mi.MENU_ITEM_NAME,mi.MENU_ITEM_SIZE,mi.ITEM_DESCRIPTION,
-- mi.PRICE,mi.SPECIAL_NOTES,mi.SPICELEVEL_DEFAULT,mi.IS_FLAGSHIP_ITEM,
-- mi.IMAGEURL,mi.IS_ITEM_AVAILABLE,mi.CUISINE_ID
FROM restaurant Res left join menu_item mi on (Res.RESTAURANT_ID =mi.RESTAURANT_ID)
where mi.MENU_ITEM_NAME like concat ('%',menuItem,'%') and
(3959 * 2 * ASIN(SQRT( POWER(SIN((mylat-Res.LATITUDE) * pi()/180 / 2), 2) +COS(mylat * pi()/180) * COS(Res.LATITUDE * pi()/180) *POWER(SIN((mylon-Res.LONGITUDE) * pi()/180 / 2), 2) ))) < dist and
mi.IS_ITEM_AVAILABLE=1 and Res.RESTAURANT_ISACTIVE='Y'
 order by Res.RATING desc;


    -- Check whether the insert was successful
  IF ERROR_CODE != '00000' THEN

  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    SELECT estatus;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant_by_distance` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_restaurant_by_distance`( IN mylat DECIMAL(9,6), IN mylon DECIMAL(9,6),IN dist int)
BEGIN
 -- Declare variables to hold diagnostics area information
        DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
        DECLARE ERROR_MESSAGE varchar(100);
        DECLARE ERROR_SQLSTATE varchar(100);
        DECLARE estatus TEXT DEFAULT null;

declare lon1 float;
declare lon2 float;
declare lat1 float;
declare lat2 float;

        -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

         insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE);

    END;

-- calculate lon and lat for the rectangle:
set lon1 = mylon-dist/abs(cos(radians(mylat))*69);
set lon2 = mylon+dist/abs(cos(radians(mylat))*69);
set lat1 = mylat-(dist/69);
set lat2 = mylat+(dist/69);

-- run the query:

select restTemp.RESTAURANT_ID,
restTemp.RESTAURANT_NAME,
restTemp.CUISINE_ID,
restTemp.CUISINE_NAME,
restTemp.RATING,
restTemp.PRICING_CATEGORY,
restTemp.DELIVERY_FEE,
restTemp.MINIMUM_ORDER_VAL_DELIVERY,
restTemp.distance,
restTemp.RESTAURANT_WEBSITE,
restTemp.RESTAURANT_OPENINGTIME,
restTemp.RESTAURANT_CLOSINGTIME,
restTemp.BASE_DELIVERY_TIME,
restTemp.IMAGEURL,
group_concat(restTemp.temp ORDER BY restTemp.temp ASC SEPARATOR ',') as MENU_ITEMS from
-- restTemp.temp as MENU_ITEMS from
-- ,GROUP_CONCAT(restTemp.temp SEPARATOR '|') as MENU_ITEMS from
(SELECT a.RESTAURANT_ID,
a.RESTAURANT_NAME,
a.RESTAURANT_ISACTIVE,
a.CUISINE_ID,
Cu.CUISINE_NAME,
a.RATING,
a.PRICING_CATEGORY,
a.DELIVERY_FEE,
a.MINIMUM_ORDER_VAL_DELIVERY,
a.RESTAURANT_WEBSITE,
a.RESTAURANT_OPENINGTIME,
a.RESTAURANT_CLOSINGTIME,
a.BASE_DELIVERY_TIME,
a.IMAGEURL,
3959 * 2 * ASIN(SQRT( POWER(SIN((mylat-a.LATITUDE) * pi()/180 / 2), 2) +COS(mylat * pi()/180) * COS(a.LATITUDE * pi()/180) *POWER(SIN((mylon-a.LONGITUDE) * pi()/180 / 2), 2) )) as distance,
concat(mi.MENU_ITEM_ID,':', mi.MENU_ITEM_NAME ) as temp
 FROM restaurant a
 left join menu_item mi on (a.RESTAURANT_ID = mi.RESTAURANT_ID)
 left join cuisine Cu on (Cu.CUISINE_ID = a.CUISINE_ID)
 WHERE
a.LONGITUDE between lon1 and lon2 and a.LATITUDE between lat1 and lat2 and a.RESTAURANT_ISACTIVE ='Y' and Now() between a.RESTAURANT_OPENINGTIME and a.RESTAURANT_CLOSINGTIME
  having distance < dist ORDER BY Distance)restTemp group by restTemp.RESTAURANT_ID;

    -- Check whether the insert was successful
  IF ERROR_CODE != '00000' THEN

  SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    -- Say what happened
    SELECT estatus;
  END IF;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant_flag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_restaurant_flag`( IN restaurantid bigint(20))
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
RESTAURANT_ISACTIVE
FROM restaurant where RESTAURANT_ID =restaurantid;

-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant_menu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_restaurant_menu`( IN restaurantId bigint)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select
rest.RESTAURANT_ID,
rest.RESTAURANT_NAME,
cu.CUISINE_NAME,
mc.MENU_CATEGORY_NAME,
likes.NUMBER_OF_LIKES,
menu.* from
(select
mi.RESTAURANT_ID,
mi.MENU_ITEM_ID,
mi.MENU_ITEM_NAME,
mi.MENU_ITEM_SIZE,
mi.ITEM_DESCRIPTION,
mi.PRICE,
mi.SPECIAL_NOTES,
mi.SPICELEVEL_DEFAULT,
mi.IS_FLAGSHIP_ITEM,
mi.IMAGEURL,
mi.IS_ITEM_AVAILABLE,
mi.CUISINE_ID,
mi.MENU_CATEGORY_ID from gogeniedb01.menu_item mi where mi.RESTAURANT_ID = restaurantId) menu
join restaurant rest on (rest.RESTAURANT_ID = menu.RESTAURANT_ID)
join cuisine cu on (cu.CUISINE_ID = rest.CUISINE_ID)
join menu_category mc on (mc.MENU_CATEGORY_ID = menu.MENU_CATEGORY_ID)
join (
select mil.MENU_ITEM_ID,
sum(mil.IS_LIKED) as NUMBER_OF_LIKES from
gogeniedb01.menu_item_like mil where mil.RESTAURANT_ID = restaurantId
group by menu_item_id) likes on (menu.MENU_ITEM_ID = likes.MENU_ITEM_ID);
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_resturant_reviews` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_resturant_reviews`(
   IN restaurant_id bigint
  )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
cr.CUSTOMER_REVIEW_ID,
cr.CUST_ID,
cr.RESTAURANT_ID ,
cr.ORDER_ID ,
cr.REVIEW_TITLE,
cr.REVIEW_DESC,
cr.RATING
FROM gogeniedb01.customer_reviews cr
Where cr.RESTAURANT_ID = restaurant_id order by cr.RATING;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_resturant_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_resturant_status`( IN restaurantid bigint)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select
Res.RESTAURANT_ID,
Res.RESTAURANT_ISACTIVE
FROM restaurant Res
where Res.RESTAURANT_ID=restaurantid;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_securityquestion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_securityquestion`()
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select distinct
QUESTION_ID,
SECURITY_QUESTION
FROM security_question where ISACTIVE =1 ;

-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_zipcode_latlong` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `get_zipcode_latlong`( IN zipcode varchar(10))
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  DECLARE estatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the fetch
Select
zip.LATITUDE,
zip.LONGITUDE
FROM zipcode zip
where zip.ZIPCODE=zipcode;
-- Check whether the fetch was successful
  IF ERROR_CODE != '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
   #  SET estatus = CONCAT('Success') ;
  #ELSE
    SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
    SELECT estatus;
  END IF;
  -- Say what happened
  #SELECT estatus;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_address_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_address_details`(
IN cust_id int(10) ,
IN country_id int(5) ,
IN state_id int(10) ,
IN city_id int(10) ,
IN address1 varchar(30) ,
IN address2 varchar(60) ,
IN createdby varchar(20) ,
IN createddate date ,
IN zipcode varchar(10) ,
IN isdefault_address varchar(10) ,
OUT estatus varchar(100),
OUT sstatus varchar(100)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

        -- DECLARE estatus TEXT DEFAULT null;
        -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

    INSERT INTO address_details
         (
CUST_ID,
COUNTRY_ID,
STATE_ID,
CITY_ID,
ADDRESS1,
ADDRESS2,
CREATEDBY,
CREATEDDATE,
ZIPCODE,
ISDEFAULT_ADDRESS
         )
    VALUES
(
cust_id,
country_id,
state_id,
city_id,
address1,
address2,
createdby,
createddate,
zipcode,
isdefault_address
);
 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      #SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_city` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_city`(
        IN country_id int(5),
        IN state_id int(10),
    IN city_name varchar(20),
    IN createdby  varchar(20),
        IN createddate  date,
    OUT estatus varchar(50),
    OUT sstatus varchar(50)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert
     INSERT INTO city
         (

        COUNTRY_ID ,
        STATE_ID ,
    CITY_NAME,
        CREATEDBY,
        CREATEDDATE
    )
    VALUES
         (
         country_id ,
         state_id ,
     city_name ,
     createdby  ,
         createddate
 );
 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_country` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_country`(
IN country_name  varchar(20),
IN createdby bigint(20),
IN createddate date,
IN updateddate date,
IN updatedby bigint(20),
IN deleteddate date,
IN deletedby bigint(20),
IN deleteflag bit(1),
   OUT estatus varchar(50),
    OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert
 INSERT INTO country
 (
 COUNTRY_NAME ,
CREATEDBY,
CREATEDDATE,
UPDATEDDATE,
UPDATEDBY,
DELETEDDATE,
DELETEDBY,
DELETEFLAG
)
VALUES
(
country_name ,
createdby,
createddate,
updateddate,
updatedby,
deleteddate,
deletedby,
deleteflag);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_cuisine` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_cuisine`(
IN cuisine_name  varchar(30) ,
IN createdby varchar(20) ,
IN createddate date ,
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
 -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

    INSERT INTO cuisine
    (
    CUISINE_NAME ,
CREATEDBY,
CREATEDDATE
)
VALUES
(
cuisine_name ,
createdby,
createddate
);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
        SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_customer_detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_customer_detail`(
        IN firstname varchar(32),
        IN lastname  varchar(32),
        IN dateofbirth date ,
        IN email  varchar(60),
        IN password  varchar(80)  ,
        IN workphone  varchar(15)  ,
        IN mobilephone  varchar(15)  ,
    IN phone_isvalid  varchar(10),
    IN cust_isactive  varchar(10),
        IN createddate  date,
        IN createdby  varchar(20),
        IN security_question1   varchar(100),
    IN security_answer1  varchar(25),
    IN security_question2   varchar(100),
    IN security_answer2  varchar(25),
     OUT estatus varchar(100),
     OUT sstatus varchar(100)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert
INSERT INTO customer
         (
        FIRSTNAME ,
                        LASTNAME,
                        DATEOFBIRTH  ,
                        EMAIL ,
                        PASSWORD ,
                        WORKPHONE,
                        MOBILEPHONE,
                        PHONE_ISVALID ,
                        CUST_ISACTIVE,
                        CREATEDDATE  ,
                        CREATEDBY ,
                        SECURITY_QUESTION1,
            SECURITY_ANSWER1,
            SECURITY_QUESTION2,
            SECURITY_ANSWER2

         )
    VALUES
         (
firstname ,
lastname  ,
dateofbirth ,
email  ,
password   ,
workphone   ,
mobilephone    ,
phone_isvalid  ,
cust_isactive  ,
createddate  ,
createdby  ,
  security_question1,
  security_answer1,
  security_question2,
  security_answer2
 );
 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
         SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_customer_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_customer_order`(
IN restaurant_id bigint(20),
IN order_status_id bigint(20),
IN cust_id bigint(20),
IN payment_type varchar(50),
IN payment_status varchar(50),
IN special_ins varchar(100),
IN total_amount float,
IN discount float,
IN delivery_request_date date,
IN delivery_request_time time,
IN vat_amount float,
IN service_charge float,
IN delivery_fee float,
IN card_txn_fee float,
IN createdby varchar(20),
IN createddate date,
IN contact_phone varchar(15),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN
 -- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

    INSERT INTO customer_order
         (
RESTAURANT_ID,
ORDER_STATUS_ID ,
CUST_ID ,
PAYMENT_TYPE,
PAYMENT_STATUS,
SPECIAL_INS,
TOTAL_AMOUNT,
DISCOUNT,
DELIVERY_REQUEST_DATE,
DELIVERY_REQUEST_TIME,
VAT_AMOUNT,
SERVICE_CHARGE,
DELIVERY_FEE,
CARD_TXN_FEE,
CREATEDBY,
CREATEDDATE,
CONTACT_PHONE

         )
    VALUES
(
restaurant_id,
order_status_id,
cust_id,
payment_type,
payment_status,
special_ins,
total_amount,
discount,
delivery_request_date,
delivery_request_time,
vat_amount,
service_charge,
delivery_fee,
card_txn_fee,
createdby,
createddate,
contact_phone
);
 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
        SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_cust_payment_info` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_cust_payment_info`(
IN cust_id int(10),
IN payementtype varchar(32),
IN cardnumber varchar(70),
IN card_last_four  varchar(4),
IN cardla varchar(70),
IN expirydate varchar(70),
IN cvv_number varchar(70),
IN name_on_card varchar(100),
IN createdby varchar(20),
IN createddate date,
IN address1 varchar(30),
IN address2 varchar(60),
IN city_id int(10),
IN state_id int(10),
IN country_id int(5),
IN zipcode varchar(10),
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

        -- DECLARE estatus TEXT DEFAULT null;
        -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


    INSERT INTO customer_payment_info
         (
CUST_ID,
PAYEMENTTYPE,
CARDNUMBER,
EXPIRYDATE,
CVV_NUMBER,
NAME_ON_CARD,
CREATEDBY,
CREATEDDATE,
ADDRESS1,
ADDRESS2,
CITY_ID,
STATE_ID,
COUNTRY_ID,
ZIPCODE,
CARD_LAST_FOUR
         )
    VALUES
(
cust_id,
payementtype,
cardnumber,
expirydate,
cvv_number,
name_on_card,
createdby,
createddate,
address1,
address2,
city_id,
state_id,
country_id,
zipcode,
card_last_four
);
 -- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_menu_category` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_menu_category`(
IN menu_category_name varchar(150),
IN cuisine_id bigint(20),
IN createdby varchar(20),
IN createddate date,
OUT estatus varchar(50),
OUT sstatus varchar(50)
 )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


INSERT INTO menu_category
(

MENU_CATEGORY_NAME,
CUISINE_ID,
CREATEDBY ,
CREATEDDATE

)
VALUE
(
menu_category_name,
cuisine_id,
createdby,
createddate
);

-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
        SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_menu_item` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_menu_item`(
IN menu_item_name varchar(50),
IN item_description varchar(250),
IN price DECIMAL(10,2) ,
IN special_notes varchar(100),
IN spicelevel_default int(2),
IN is_flagship_item varchar(5),
IN imageurl varchar(300),
IN is_item_available varchar(10),
IN cuisine_id bigint(20),
IN menu_category_id bigint(20),
IN restaurant_id bigint(20),
IN createdby varchar(20),
IN createddate date,
IN menu_item_size int(2),
IN menu_subcategory_id bigint(20),
OUT estatus varchar(50),
OUT sstatus varchar(50)
 )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


INSERT INTO menu_item
(
MENU_ITEM_NAME,
ITEM_DESCRIPTION,
PRICE,
SPECIAL_NOTES,
SPICELEVEL_DEFAULT,
IS_FLAGSHIP_ITEM,
IMAGEURL,
IS_ITEM_AVAILABLE,
CUISINE_ID,
MENU_CATEGORY_ID,
RESTAURANT_ID,
CREATEDBY,
CREATEDDATE,
MENU_ITEM_SIZE,
MENU_SUBCATEGORY_ID
)
VALUE
(

menu_item_name,
item_description,
price,
special_notes,
spicelevel_default,
is_flagship_item,
imageurl,
is_item_available,
cuisine_id,
menu_category_id,
restaurant_id,
createdby,
createddate,
menu_item_size,
menu_subcategory_id

);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_menu_subcategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_menu_subcategory`(
IN menu_subcategory_name varchar(150),
IN menu_category_id bigint(20),
IN createdby varchar(20),
IN createddate date,
OUT estatus varchar(50),
OUT sstatus varchar(50)
 )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


INSERT INTO menu_category
(

MENU_SUBCATEGORY_NAME,
 MENU_SUBCATEGORY_ID,
CREATEDBY ,
CREATEDDATE

)
VALUE
(
menu_subcategory_name,
menu_category_id,
createdby,
createddate
);

-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
        SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_order_item_detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_order_item_detail`(
IN order_id bigint(20),
IN menu_item_id bigint(20),
IN item_name varchar(50),
IN quantity int(10),
IN price decimal(10,2),
IN special_ins varchar(200),
IN spice_level int(2),
IN menu_item_size int(2),
IN createdby varchar(20),
IN createddate date,
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
 -- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert



INSERT INTO order_item_detail
(
ORDER_ID,
MENU_ITEM_ID,
ITEM_NAME,
QUANTITY,
PRICE,
SPECIAL_INS,
SPICE_LEVEL,
MENU_ITEM_SIZE,
CREATEDBY,
CREATEDDATE

)
VALUE
(
order_id,
menu_item_id,
item_name,
quantity,
price,
special_ins,
spice_level,
menu_item_size,createdby,
createddate

);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_restaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_restaurant`(
        IN restaurantname varchar(50),
        IN businessphone  varchar(15),
        IN emailid  varchar(60),
        IN address1 varchar(50),
        IN address2  varchar(50),
    IN restaurant_isactive varchar(20),
    IN  country_id   int(5),
    IN  state_id   int(10),
    IN  city_id   int(10),
    IN  latitude   decimal(12,9),
    IN  longitude   decimal(12,9),
    IN  cusine_id   bigint(20),
        IN rating int(2),
    IN pricing_category int(2),
    IN zipcode varchar(10),
    IN landmark varchar(60),
    IN delivery_fee float,
    IN restaurant_website varchar(50),
        IN createddate date ,
    IN createdby  varchar(20),
        IN restaurant_openingtime  time,
    IN restaurant_closingtime  time,
    IN minimum_order_val_delivery float,
    IN base_delivery_time time,
    OUT estatus varchar(50),
    OUT sstatus varchar(50)
         )
BEGIN


-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


    INSERT INTO restaurant
         (
          RESTAURANT_NAME ,
BUSINESS_PHONE ,
EMAILID,
ADDRESS1 ,
ADDRESS2 ,
RESTAURANT_ISACTIVE,
COUNTRY_ID,
STATE_ID ,
CITY_ID,
LATITUDE ,
LONGITUDE ,
CUISINE_ID ,
RATING ,
PRICING_CATEGORY ,
ZIPCODE ,
LANDMARK ,
DELIVERY_FEE ,
RESTAURANT_WEBSITE,
CREATEDDATE ,
CREATEDBY ,
RESTAURANT_OPENINGTIME ,
RESTAURANT_CLOSINGTIME,
MINIMUM_ORDER_VAL_DELIVERY,
BASE_DELIVERY_TIME
         )
    VALUES
         (  restaurantname ,
        businessphone  ,
        emailid  ,
        address1 ,
        address2  ,
    restaurant_isactive,
      country_id ,
      state_id ,
      city_id  ,
      latitude   ,
      longitude   ,
      cusine_id  ,
     rating,
     pricing_category,
     zipcode,
     landmark,
     delivery_fee,
     restaurant_website,
         createddate ,
     createdby ,
         restaurant_openingtime  ,
     restaurant_closingtime ,
     minimum_order_val_delivery,
     base_delivery_time
     );
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_restaurant_acct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_restaurant_acct`(
IN restaurant_id bigint(20) ,
IN bank_acct_type char(20) ,
IN bank_name char(50) ,
IN bank_routing_number  varchar(70) ,
IN bank_acct_number  varchar(70) ,
IN bank_acct_holder_nm  varchar(70) ,
IN settlmnt_date date ,
IN billing_st_date date ,
IN billing_end_date date ,
IN createddate date ,
IN createdby varchar(20) ,
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

    INSERT INTO restaurant_acct
         (
RESTAURANT_ID,
BANK_ACCT_TYPE,
BANK_NAME,
BANK_ROUTING_NUMBER,
BANK_ACCT_NUMBER,
BANK_ACCT_HOLDER_NM,
SETTLMNT_DATE,
BILLING_ST_DATE,
BILLING_END_DATE,
CREATEDDATE,
CREATEDBY

)
    VALUES
(
restaurant_id,
bank_acct_type,
bank_name,
bank_routing_number,
bank_acct_number,
bank_acct_holder_nm,
settlmnt_date,
billing_st_date,
billing_end_date,
createddate,
createdby
);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_restaurant_employee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_restaurant_employee`(
IN restaurant_id bigint(20) ,
IN employee_name varchar(30) ,
IN employee_mobilenumber varchar(30) ,
IN employee_designation varchar(30) ,
IN username varchar(70) ,
IN password varchar(70) ,
IN emailid varchar(50) ,
IN is_accountmanager varchar(10) ,
IN createddate date ,
IN createdby varchar(20) ,
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert


    INSERT INTO restaurant_employee
         (
RESTAURANT_ID,
EMPLOYEE_NAME,
EMPLOYEE_MOBILENUMBER,
EMPLOYEE_DESIGNATION,
USERNAME,
PASSWORD,
EMAILID,
IS_ACCOUNTMANAGER,
CREATEDDATE,
CREATEDBY
)
    VALUES
(
restaurant_id,
employee_name,
employee_mobilenumber,
employee_designation,
username,
password,
emailid,
is_accountmanager,
createddate,
createdby

);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_securityquestion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_securityquestion`(
IN security_question  varchar(100),
IN createdby varchar(20) ,
IN createddate date,
IN updateddate date,
IN updatedby varchar(20) ,
IN deleteddate date,
IN deletedby varchar(20) ,
IN deleteflag varchar(10),
IN IsActive  varchar(10),
   OUT estatus varchar(50),
    OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;
  -- Perform the insert
 INSERT INTO security_question
 (
 SECURITY_QUESTION,
CREATEDBY,
CREATEDDATE,
UPDATEDDATE,
UPDATEDBY,
DELETEDDATE,
DELETEDBY,
DELETEFLAG
)
VALUES
(
 security_question ,
createdby,
createddate,
updateddate,
updatedby,
deleteddate,
deletedby,
deleteflag

);
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_state` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_state`(
IN country_id int(5),
        IN state_name varchar(20),
    IN createdby  varchar(20),
        IN createddate  date,
    OUT estatus varchar(50),
    OUT sstatus varchar(50)
    )
BEGIN
 -- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

    INSERT INTO state
         (
        COUNTRY_ID ,
        STATE_NAME ,
        CREATEDBY,
        CREATEDDATE
                    )
    VALUES
         (
        country_id ,
        state_name ,
        createdby  ,
        createddate
 );
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_zipcode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `post_zipcode`(
        IN zipcode varchar(10),
        IN latitude decimal(12,9),
    IN longitude decimal(12,9),
    OUT estatus varchar(50),
    OUT sstatus varchar(50)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
  -- DECLARE estatus TEXT DEFAULT null;
  -- DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

  insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the insert

     INSERT INTO zipcode
         (

        ZIPCODE ,
        LATITUDE,
    LONGITUDE
    )
    VALUES
         (
         zipcode ,
         latitude ,
     longitude

 );
-- Check whether the insert was successful
  IF ERROR_CODE = '00000' THEN

    SET sstatus = (select last_insert_id());
      SELECT sstatus;
  ELSE
     SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_customer_address` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_customer_address`(

IN  add_details_id   bigint(20),
IN  cu_id   int(10) ,
IN  cou_id   int(5) ,
IN  st_id   int(10) ,
IN  ci_id   int(10) ,
IN  add1  varchar(30) ,
IN  add2  varchar(60) ,
IN  up_date  date ,
IN  up_by  varchar(20) ,
IN  zip  varchar(10) ,
IN  isdef_address  varchar(20) ,

OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

#DECLARE estatus TEXT DEFAULT null;
#DECLARE sstatus TEXT DEFAULT null;

  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update

    UPDATE address_details
    SET
COUNTRY_ID =cou_id ,
STATE_ID =st_id ,
CITY_ID =ci_id ,
ADDRESS1=add1,
ADDRESS2=add2,
UPDATEDDATE=up_date,
UPDATEDBY=up_by,
ZIPCODE=zip,
ISDEFAULT_ADDRESS=isdef_address
WHERE  CUST_ID = cu_id AND ADDRESS_DETAILS_ID =add_details_id;

-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = add_details_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
        # SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_customer_default_address` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_customer_default_address`(

IN  add_details_id bigint(20) ,
IN  cu_id   int(10) ,
IN  up_date  date ,
IN  up_by  varchar(20) ,
IN  isdef_address varchar(10),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);
#DECLARE estatus TEXT DEFAULT null;
#DECLARE sstatus TEXT DEFAULT null;
  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update

    UPDATE address_details
    SET

UPDATEDDATE=up_date,
UPDATEDBY=up_by,
ISDEFAULT_ADDRESS=isdef_address

WHERE  CUST_ID = cu_id AND ADDRESS_DETAILS_ID =add_details_id;
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = add_details_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
       #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_customer_default_payment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_customer_default_payment`(

IN  cust_payment_info_id   bigint(20) ,
IN  cu_id   int(10) ,
IN  paytype  varchar(32) ,
IN  cardnum  varchar(70) ,
IN  card_last_4_digits varchar(4),
IN  expdate  varchar(70) ,
IN  cvv_num  varchar(70) ,
IN  name_on_c  varchar(100) ,
IN  up_date  date ,
IN  up_by  varchar(20) ,
IN  add1  varchar(30) ,
IN  add2  varchar(60) ,
IN  ci_id  int(10) ,
IN  st_id  int(10) ,
IN  cou_id  int(5) ,
IN  zip  varchar(10) ,
IN  isdef  varchar(10),
OUT estatus varchar(50),
OUT sstatus varchar(50)


     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

#DECLARE estatus TEXT DEFAULT null;
#DECLARE sstatus TEXT DEFAULT null;

  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update

    UPDATE customer_payment_info
    SET
PAYEMENTTYPE=paytype,
CARDNUMBER=cardnum,
CARD_LAST_FOUR=card_last_4_digits,
EXPIRYDATE=expdate,
CVV_NUMBER=cvv_num,
NAME_ON_CARD=name_on_c,
UPDATEDDATE=up_date,
UPDATEDBY=up_by,
ADDRESS1=add1,
ADDRESS2=add2,
CITY_ID=ci_id,
STATE_ID=st_id,
COUNTRY_ID=cou_id,
ZIPCODE=zip,
ISDEFAULT=isdef

WHERE  CUST_ID = cu_id AND CUSTOMER_PAYMENT_INFO_ID =cust_payment_info_id;
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = cust_payment_info_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_customer_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_customer_details`(
IN cu_id  int(10) ,
IN first_name varchar(32) ,
IN last_name varchar(32) ,
IN dob date ,
IN e_mail varchar(60) ,
IN pswd varchar(80) ,
IN wrkphone varchar(15) ,
IN mobphone  varchar(15) ,
IN ph_isvalid varchar(10) ,
IN cu_isactive varchar(10) ,
IN up_date date ,
IN up_by varchar(10) ,
IN security_quest1 varchar(100) ,
IN security_ans1 varchar(25) ,
IN security_quest2 varchar(100) ,
IN security_ans2 varchar(25),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);


  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update
    UPDATE customer
    SET
FIRSTNAME=first_name,
LASTNAME=last_name,
DATEOFBIRTH=dob,
EMAIL=e_mail,
PASSWORD=pswd,
WORKPHONE=wrkphone,
MOBILEPHONE =mobphone ,
PHONE_ISVALID=ph_isvalid,
CUST_ISACTIVE=cu_isactive,
UPDATEDDATE=up_date,
UPDATEDBY=up_by,
SECURITY_QUESTION1=security_quest1,
SECURITY_ANSWER1=security_ans1,
SECURITY_QUESTION2=security_quest2,
SECURITY_ANSWER2=security_ans2
    WHERE  CUST_ID = cu_id  and CUST_ID<> 0;
  -- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = cu_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_customer_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_customer_password`(
IN cu_id  int(10) ,
IN e_mail varchar(60),
IN psswrd varchar(80),
IN mob_phone varchar(15),
IN up_date date,
IN up_by varchar(10),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);


  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update
    UPDATE customer
    SET
PASSWORD=psswrd,
UPDATEDDATE=up_date,
UPDATEDBY=up_by
WHERE ( CUST_ID = cu_id  or EMAIL =e_mail  or MOBILEPHONE =mob_phone);
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = cu_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_menu_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_menu_details`(

IN  menu_it_id  bigint(20) ,
IN  menu_it_name varchar(50) ,
IN  item_des varchar(250) ,
IN  pri decimal(10,2) ,
IN  sp_notes varchar(100) ,
IN  splevel_default int(2) ,
IN  is_flagship_it varchar(5) ,
IN  imgurl varchar(300) ,
IN  is_item_avail varchar(10) ,
IN  cui_id  bigint(20) ,
IN  menu_categ_id  bigint(20) ,
IN  res_id  bigint(20) ,
IN  up_date date ,
IN  up_by varchar(20) ,
IN  menu_it_size int(2),
OUT estatus varchar(50),
OUT sstatus varchar(50)


     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);


  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update
    UPDATE menu_item
    SET
MENU_ITEM_NAME=menu_it_name,
ITEM_DESCRIPTION=item_des,
PRICE=pri,
SPECIAL_NOTES=sp_notes,
SPICELEVEL_DEFAULT=splevel_default,
IS_FLAGSHIP_ITEM=is_flagship_it,
IMAGEURL=imgurl,
IS_ITEM_AVAILABLE=is_item_avail,
CUISINE_ID =cui_id ,
MENU_CATEGORY_ID =menu_categ_id ,
UPDATEDDATE=up_date,
UPDATEDBY=up_by,
MENU_ITEM_SIZE=menu_it_size
WHERE  RESTAURANT_ID = res_id AND MENU_ITEM_ID =menu_it_id;
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = menu_it_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_menu_like` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_menu_like`(
IN  menu_it_id     bigint(20) ,
IN  res_id     bigint(20) ,
IN  cu_id    int(10) ,
IN  is_like    varchar(10) ,
IN  cre_by    varchar(20) ,
IN  cre_date    date ,
IN up_date date,
IN up_by varchar(20),
OUT estatus varchar(50),
OUT sstatus varchar(50)

     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update
    if (select count(*) from menu_item_like  where  MENU_ITEM_ID = menu_it_id
    and RESTAURANT_ID = res_id and CUST_ID  =cu_id    ) >0 then
    begin

    UPDATE menu_item_like SET DELETEFLAG = CASE
    WHEN DELETEFLAG = 'N' THEN 'Y'
    WHEN DELETEFLAG = 'Y' THEN 'N'
    ELSE 0
    END,UPDATEDDATE =up_date
WHERE  MENU_ITEM_ID = menu_it_id  and RESTAURANT_ID = res_id and CUST_ID  =cu_id;


     end;
     else

    begin
    Insert into menu_item_like (MENU_ITEM_ID ,RESTAURANT_ID , CUST_ID,IS_LIKED,CREATEDBY,CREATEDDATE,UPDATEDDATE,UPDATEDBY) values
(menu_it_id ,res_id ,cu_id,is_like,cre_by,cre_date,up_date,up_by);
    end;
      end if;

-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = menu_it_id ;
     SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_restaurant_user_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_restaurant_user_password`(
IN res_employee_id   bigint(20) ,
IN up_date date ,
IN up_by varchar(20),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update

    UPDATE restaurant_employee
    SET
PASSWORD=password,
UPDATEDDATE=up_date,
UPDATEDBY=up_by
WHERE  RESTAURANT_EMPLOYEE_ID = res_employee_id;
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = res_employee_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         #SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_security_question` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_security_question`(

IN question_id int(10),
IN security_question varchar(100),
IN updateddate date,
IN updatedby varchar(20) ,
IN deleteflag varchar(10),
OUT estatus varchar(50),
OUT sstatus varchar(50)
     )
BEGIN

-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);

#DECLARE estatus TEXT DEFAULT null;
#DECLARE sstatus TEXT DEFAULT null;

  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update

    UPDATE security_question
    SET

  SECURITY_QUESTION= security_question,
  UPDATEDDATE =updateddate,
  UPDATEDBY =updatedby,
  DELETEFLAG  =deleteflag

WHERE  QUESTION_ID = question_id ;

-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = question_id ;
     #SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
        # SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `put_zipcode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`deepak`@`localhost` PROCEDURE `put_zipcode`(
IN zipid int(10),
IN zip varchar(10),
IN LAT decimal(12,9),
IN LOG decimal(12,9),
OUT estatus varchar(50),
OUT sstatus varchar(50)
)
BEGIN
-- Declare variables to hold diagnostics area information
  DECLARE ERROR_CODE CHAR(5) DEFAULT '00000';
  DECLARE ERROR_MESSAGE varchar(100);
  DECLARE ERROR_SQLSTATE varchar(100);


  -- Declare exception handler for failed insert
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
      GET DIAGNOSTICS CONDITION 1
        ERROR_CODE = RETURNED_SQLSTATE, ERROR_MESSAGE = MESSAGE_TEXT, ERROR_SQLSTATE = MYSQL_ERRNO;

    insert into error_log (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,ERROR_TIMESTAMP,ERROR_USERID)
    values (ERROR_CODE,ERROR_MESSAGE,ERROR_SQLSTATE,now(),current_user);

    END;

  -- Perform the update
   UPDATE zipcode SET ZIPCODE=zip,LATITUDE=LAT,LONGITUDE=LOG WHERE ZIPCODE_ID = zipid;
-- Check whether the fetch was successful
  IF ERROR_CODE = '00000' THEN
    #GET DIAGNOSTICS rows = ROW_COUNT;
    SET sstatus = zipid ;
     SELECT sstatus;
  ELSE
        SET estatus = CONCAT(ERROR_CODE,':',ERROR_MESSAGE);
         SELECT estatus;
  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-24 22:57:35

