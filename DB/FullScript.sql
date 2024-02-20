DROP DATABASE IF EXISTS `ppe`;
CREATE DATABASE `ppe`;

CREATE TABLE `ppe`.`language` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `value` VARCHAR(255) NOT NULL
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`role` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `value` VARCHAR(255) NOT NULL
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`customer` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255),
  `surname` VARCHAR(255),
  `phone_number` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255) DEFAULT 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82',
  `language_fk` INT DEFAULT 1,
  `role_fk` INT DEFAULT 1,
  `my_auto_inc` INT,
  CONSTRAINT `customer_language_fk` FOREIGN KEY (`language_fk`) REFERENCES `ppe`.`language` (`id`) ON DELETE CASCADE,
  CONSTRAINT `customer_role_fk` FOREIGN KEY (`role_fk`) REFERENCES `ppe`.`role` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`provider` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255),
  `street` VARCHAR(255),
  `number` VARCHAR(255),
  `city` VARCHAR(255),
  `country` VARCHAR(255),
  `zip_code` INT,
  `password` VARCHAR(255) DEFAULT '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8',
  `language_fk` INT DEFAULT 2,
  `role_fk` INT DEFAULT 2,
  `my_auto_inc` INT,
  CONSTRAINT `provider_language_fk` FOREIGN KEY (`language_fk`) REFERENCES `ppe`.`language` (`id`) ON DELETE CASCADE,
  CONSTRAINT `provider_role_fk` FOREIGN KEY (`role_fk`) REFERENCES `ppe`.`role` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`energy_type` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `value` VARCHAR(255)
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`building` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `is_main` BOOL,
  `building_name` VARCHAR(255),
  `room` VARCHAR(255),
  `street` VARCHAR(255),
  `number` VARCHAR(255),
  `city` VARCHAR(255),
  `zip_code` INT,
  `customer_fk` VARCHAR(255) NOT NULL,
  `my_auto_inc` INT,
  CONSTRAINT `building_customer_fk` FOREIGN KEY (`customer_fk`) REFERENCES `ppe`.`customer` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`contract_type`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `value` VARCHAR(255)
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`contract` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `start_date` DATE,
  `end_date` DATE,
  `provider_fk` VARCHAR(255) NOT NULL,
  `contract_type_fk` INT NOT NULL,
  `building_fk` VARCHAR(255) NOT NULL,
  `my_auto_inc` INT,
   CONSTRAINT `contract_provider_fk` FOREIGN KEY (`provider_fk`) REFERENCES `ppe`.`provider` (`id`) ON DELETE CASCADE,
   CONSTRAINT `contract_contract_type_fk` FOREIGN KEY (`contract_type_fk`) REFERENCES `ppe`.`contract_type` (`id`) ON DELETE CASCADE,
   CONSTRAINT `contract_building_fk` FOREIGN KEY (`building_fk`) REFERENCES `ppe`.`building` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`contract_energy_type`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `day_price` FLOAT,
    `night_price`FLOAT,
    `contract_fk` VARCHAR(255) NOT NULL,
	`energy_type_fk` INT NOT NULL,
	CONSTRAINT `contract_energy_type_energy_type_fk` FOREIGN KEY (`energy_type_fk`) REFERENCES `ppe`.`energy_type` (`id`) ON DELETE CASCADE,
	CONSTRAINT `contract_energy_type_contract_fk` FOREIGN KEY (`contract_fk`) REFERENCES `ppe`.`contract` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`provider_energy_type`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `provider_fk` VARCHAR(255),
    `energy_type_fk` INT,
    CONSTRAINT `provider_energy_type_provider_fk` FOREIGN KEY (`provider_fk`) REFERENCES `ppe`.`provider` (`id`) ON DELETE CASCADE,
    CONSTRAINT `provider_energy_type_energy_type_fk` FOREIGN KEY (`energy_type_fk`) REFERENCES `ppe`.`energy_type` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`meter` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `is_numeric` BOOL,
  `value` FLOAT DEFAULT 0,
  `building_fk` VARCHAR(255) NOT NULL,
  `energy_type_fk` INT NOT NULL,
  `is_open` BOOLEAN NOT NULL,
  `my_auto_inc` INT,
   CONSTRAINT `meter_building_fk` FOREIGN KEY (`building_fk`) REFERENCES `ppe`.`building` (`id`) ON DELETE CASCADE,
   CONSTRAINT `meter_energy_type_fk` FOREIGN KEY (`energy_type_fk`) REFERENCES `ppe`.`energy_type` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`meter_history` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `date` DATE,
  `value` FLOAT,
  `meter_fk` VARCHAR(255) NOT NULL,
   CONSTRAINT `meter_history_meter_fk` FOREIGN KEY (`meter_fk`) REFERENCES `ppe`.`meter` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`wallet` (
  `id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `building_fk` VARCHAR(255) NOT NULL,
  `my_auto_inc` INT,
   CONSTRAINT `wallet_building_fk` FOREIGN KEY (`building_fk`) REFERENCES `ppe`.`building` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`privilege`(
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`value` VARCHAR(255) NOT NULL
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`wallet_customer`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`privilege_fk` INT NOT NULL,
	`wallet_fk` VARCHAR(255) NOT NULL,
    `customer_fk` VARCHAR(255) NOT NULL,
    CONSTRAINT `wallet_customer_wallet_fk` FOREIGN KEY(`wallet_fk`) REFERENCES `ppe`.`wallet` (`id`) ON DELETE CASCADE,
    CONSTRAINT `wallet_customer_customer_fk` FOREIGN KEY (`customer_fk`) REFERENCES `ppe`.`customer` (`id`) ON DELETE CASCADE,
    CONSTRAINT `wallet_customer_privilege_fk` FOREIGN KEY (`privilege_fk`) REFERENCES `ppe`.`privilege` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`wallet_meter`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`wallet_fk` VARCHAR(255) NOT NULL,
    `meter_fk` VARCHAR(255) NOT NULL,
    CONSTRAINT `wallet_meter_wallet_fk` FOREIGN KEY(`wallet_fk`) REFERENCES `ppe`.`wallet` (`id`) ON DELETE CASCADE,
    CONSTRAINT `wallet_meter_meter_fk` FOREIGN KEY (`meter_fk`) REFERENCES `ppe`.`meter` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

CREATE TABLE `ppe`.`notification` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `customer_fk` VARCHAR(255) NOT NULL,
  `provider_fk` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `is_accept` BOOL NOT NULL DEFAULT FALSE,
  `is_read` BOOL NOT NULL DEFAULT FALSE,
  `is_new` BOOL NOT NULL DEFAULT FALSE,
  CONSTRAINT `notification_customer_fk` FOREIGN KEY (`customer_fk`) REFERENCES `ppe`.`customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `notification_provider_fk` FOREIGN KEY (`provider_fk`) REFERENCES `ppe`.`provider` (`id`) ON DELETE CASCADE
)DEFAULT CHARSET = utf8mb4;

#----------------------VIEWS--------------------#

CREATE VIEW `ppe`.`v_building` AS
	SELECT `id`, `is_main`, `building_name`, `room`, `street`, `number`, `city`, `zip_code`, `customer_fk`
    FROM `ppe`.`building`;

CREATE VIEW `ppe`.`v_contract` AS
	SELECT `id`, `start_date`, `end_date`, `provider_fk`, `contract_type_fk`, `building_fk`
    FROM `ppe`.`contract`;
    
CREATE VIEW `ppe`.`v_contract_energy_type` AS
	SELECT `id`, `day_price`, `night_price`, `contract_fk`, `energy_type_fk`
    FROM `ppe`.`contract_energy_type`;
    
CREATE VIEW `ppe`.`v_contract_type` AS
	SELECT `id`, `value` 
    FROM `ppe`.`contract_type`;
    
CREATE VIEW `ppe`.`v_customer` AS
	SELECT `id`, `name`, `surname`, `phone_number`, `email`, `language_fk`
    FROM `ppe`.`customer`;

CREATE VIEW `ppe`.`v_energy_type` AS
	SELECT `id`, `value` 
    FROM `ppe`.`energy_type`;
    
CREATE VIEW `ppe`.`v_meter` AS
	SELECT `id`, `is_numeric`, `value`, `building_fk`, `energy_type_fk`,  `is_open`
    FROM `ppe`.`meter`;
    
CREATE VIEW `ppe`.`v_meter_history` AS
	SELECT `id`, `date`, `value`, `meter_fk`
    FROM `ppe`.`meter_history`;
    
CREATE VIEW `ppe`.`v_provider` AS
	SELECT `id`, `name`, `street`, `number`, `city`, `country`, `zip_code`, `language_fk`
    FROM `ppe`.`provider`;

CREATE VIEW `ppe`.`v_provider_energy_type` AS
	SELECT `id`, `provider_fk`, `energy_type_fk`
    FROM `ppe`.`provider_energy_type`;
    
CREATE VIEW `ppe`.`v_wallet` AS
	SELECT `id`, `building_fk`
    FROM `ppe`.`wallet`;

CREATE VIEW `ppe`.`v_wallet_customer` AS
	SELECT `id`, `privilege_fk`, `wallet_fk`, `customer_fk`
    FROM `ppe`.`wallet_customer`;
    
CREATE VIEW `ppe`.`v_wallet_meter` AS
	SELECT `id`, `wallet_fk`, `meter_fk`
    FROM `ppe`.`wallet_meter`;
    
CREATE VIEW `ppe`.`v_user` AS
	SELECT `id`,`name` AS 'username', `password`, `role_fk`, `language_fk` FROM `ppe`.`provider`
    UNION
    SELECT `id`, `email` AS 'username', `password`,`role_fk`, `language_fk` FROM `ppe`.`customer`;
    
CREATE VIEW `ppe`.`v_notification` AS
	SELECT `id`, `date`, `customer_fk`, `provider_fk`, `message`, `is_accept`, `is_read`, `is_new` 
    FROM `ppe`.`notification`
    ORDER BY `date` DESC;
    
CREATE VIEW `ppe`.`v_language` AS
	SELECT `id`, `value` 
    FROM `ppe`.`language`;
    
CREATE VIEW `ppe`.`v_role` AS
	SELECT `id`, `value` 
    FROM `ppe`.`role`;
    
CREATE VIEW `ppe`.`v_privilege` AS
	SELECT `id`, `value` 
    FROM `ppe`.`privilege`;

#-----------------------------FUNCTION----------------------------

DELIMITER //
CREATE FUNCTION `ppe`.`GEN_EAN`(NB_CAR INT, PREFIX VARCHAR(2), LAST_AUTO_VALUE INT)

RETURNS VARCHAR(18)
LANGUAGE SQL
NOT DETERMINISTIC
NO SQL
SQL SECURITY DEFINER
BEGIN
	DECLARE response VARCHAR(18);
	DECLARE rnumber BIGINT;
    DECLARE number int;
    DECLARE temp VARCHAR(18);
    
    SET response = '';
    
    SET response = CONCAT(response, `PREFIX`);
	
    SET response = CONCAT(response, (SELECT LPAD(LAST_AUTO_VALUE, NB_CAR, 0)));
    
	RETURN(response);
    
END; //

#---------------------TRIGGER-----------------------------

CREATE TRIGGER `ppe`.`customer_trigger` BEFORE INSERT ON `ppe`.`customer`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`customer`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(13, 'U', NEW.my_auto_inc));
   END IF;
END//

CREATE TRIGGER `ppe`.`provider_trigger` BEFORE INSERT ON `ppe`.`provider`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`provider`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(13, 'P', NEW.my_auto_inc));
   END IF;
END//

CREATE TRIGGER `ppe`.`building_trigger` BEFORE INSERT ON `ppe`.`building`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`building`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(13, 'H', NEW.my_auto_inc));
   END IF;
END//

CREATE TRIGGER `ppe`.`contract_trigger` BEFORE INSERT ON `ppe`.`contract`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`contract`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(8, 'C', NEW.my_auto_inc));
   END IF;
END//

CREATE TRIGGER `ppe`.`meter_trigger` BEFORE INSERT ON `ppe`.`meter`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`meter`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(18, '', NEW.my_auto_inc));
   END IF;
END//

CREATE TRIGGER `ppe`.`wallet_trigger` BEFORE INSERT ON `ppe`.`wallet`
FOR EACH ROW
BEGIN
   DECLARE last_auto_inc_value INT UNSIGNED;
   SELECT MAX(`my_auto_inc`) INTO last_auto_inc_value FROM `ppe`.`wallet`;
   IF last_auto_inc_value IS NULL THEN
      SET NEW.my_auto_inc = 1;
   ELSE
      SET NEW.my_auto_inc = last_auto_inc_value + 1;

   SET NEW.`id` = (SELECT `ppe`.`GEN_EAN`(13, 'W', NEW.my_auto_inc));
   END IF;
END//


#----------------------STORED PROCEDURE--------------------

#----------------------BUILDING----------------------------    

CREATE PROCEDURE `ppe`.`sp_createBuilding`(IN param_is_main bool, IN param_building_name VARCHAR(255), IN param_room VARCHAR(255), IN param_street VARCHAR(255), IN param_number_building VARCHAR(255), IN param_city VARCHAR(255), IN param_zip_code INT, IN param_customer_fk VARCHAR(255))
	BEGIN
        INSERT INTO `ppe`.`building`( `is_main`, `building_name`, `room`, `street`, `number`, `city`, `zip_code`, `customer_fk`) VALUES (param_is_main, param_building_name, param_room, param_street, param_number_building, param_city, param_zip_code, param_customer_fk);
		SELECT `id` FROM `ppe`.`v_building` ORDER BY `id` DESC LIMIT 1;
    END //

CREATE PROCEDURE `ppe`.`sp_getAllBuilding`(IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_building` LIMIT param_offset, param_limit;
    END //

CREATE PROCEDURE `ppe`.`sp_countAllBuilding`()
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_building`;
	END //

CREATE PROCEDURE `ppe`.`sp_getBuildingById`(IN param_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_building` WHERE `id` = param_id;
    END //
    
CREATE PROCEDURE `ppe`.`sp_getBuildingByAdress`(IN param_street VARCHAR(255), IN param_number_building VARCHAR(255), IN param_city VARCHAR(255), IN param_zip_code INT)
	BEGIN
		SELECT * FROM `ppe`.`v_building` WHERE `street` = param_street AND `number` = param_number_building and `city` = param_city and `zip_code` = param_zip_code;
    END //
    
CREATE PROCEDURE `ppe`.`sp_getBuildingByCustomerId`(IN param_customer_id VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_building` WHERE `customer_fk` = param_customer_id LIMIT param_offset, param_limit;
	END //

CREATE PROCEDURE `ppe`.`sp_countBuildingByCustomerId`(IN param_customer_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_building` WHERE `customer_fk` = param_customer_id;
	END //

CREATE PROCEDURE `ppe`.`sp_updateBuilding`(IN param_id VARCHAR(255), IN param_is_main bool, IN param_building_name VARCHAR(255), IN param_room VARCHAR(255), IN param_street VARCHAR(255), IN param_number_building VARCHAR(255), IN param_city VARCHAR(255), IN param_zip_code INT)
	BEGIN
		UPDATE `ppe`.`building` SET `is_main` = param_is_main, `building_name` = param_building_name, `room` = param_room, `street` = param_street, `number` = param_number_building, `city` = param_city, `zip_code` = param_zip_code WHERE `id` = param_id;
    END //

CREATE PROCEDURE `ppe`.`sp_deleteBuildingById`(IN param_id VARCHAR(255))
	BEGIN
		DELETE FROM `ppe`.`building` WHERE `id` = param_id;
    END //
    
CREATE PROCEDURE `ppe`.`sp_deleteBuildingByAdress`(IN param_street VARCHAR(255), IN param_number_building VARCHAR(255), IN param_city VARCHAR(255), IN param_zip_code INT)
	BEGIN
		DELETE FROM `ppe`.`building` WHERE `street` = param_street AND `number` = param_number_building and `city` = param_city and `zip_code` = param_zip_code;
    END //

#----------------------CUSTOMER----------------------------    

CREATE PROCEDURE `ppe`.`sp_createCustomer`(IN param_name VARCHAR(255), IN param_surname VARCHAR(255), IN param_phone_number VARCHAR(255), IN param_email VARCHAR(255), IN param_language INT, IN param_password VARCHAR(255))
	BEGIN
		INSERT INTO `ppe`.`customer`(`name`, `surname`, `phone_number`, `email`, `language_fk`, `password`) VALUES (param_name, param_surname, param_phone_number, param_email, param_language, param_password);
        SELECT `id` FROM `ppe`.`v_customer` ORDER BY `id` DESC LIMIT 1;
	END //

CREATE PROCEDURE `ppe`.`sp_getAllCustomers`()
	BEGIN
		SELECT * FROM  `ppe`.`v_customer`; 
    END //

CREATE PROCEDURE `ppe`.`sp_getCustomerByNameAndSurname`(IN param_name VARCHAR(255), IN param_surname VARCHAR(255))
	BEGIN
		SELECT * FROM  `ppe`.`v_customer` WHERE `name` = param_name AND `surname` = param_surname; 
    END //
    
CREATE PROCEDURE `ppe`.`sp_getCustomerByEmail`(IN param_email VARCHAR(255))
	BEGIN
		SELECT * FROM  `ppe`.`v_customer` WHERE `email` = param_email; 
    END //
    
CREATE PROCEDURE `ppe`.`sp_getCustomerByPhoneNumber`(IN param_phone_number VARCHAR(255))
	BEGIN
		SELECT * FROM  `ppe`.`v_customer` WHERE `phone_number` = param_phone_number; 
    END //
    
CREATE PROCEDURE `ppe`.`sp_getCustomerById`(IN param_id VARCHAR(255))
	BEGIN
		SELECT * FROM  `ppe`.`v_customer` WHERE `id` = param_id; 
    END //
    
CREATE PROCEDURE `ppe`.`sp_getCustomersByProviderId`(IN param_provider_id VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_customer` WHERE `id` IN (
			SELECT `customer_fk` FROM `ppe`.`v_building` WHERE `id` IN (
				SELECT `building_fk` FROM `ppe`.`v_contract` WHERE `provider_fk` = param_provider_id)) LIMIT param_offset, param_limit;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countCustomersByProviderId`(IN param_provider_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_customer` WHERE `id` IN (
			SELECT `customer_fk` FROM `ppe`.`v_building` WHERE `id` IN (
				SELECT `building_fk` FROM `ppe`.`v_contract` WHERE `provider_fk` = param_provider_id));
	END //
    
CREATE PROCEDURE `ppe`.`sp_getCustomerByBuildingId`(IN param_building_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_customer` WHERE `id` = (SELECT `customer_fk` FROM `ppe`.`v_building` WHERE `id` = param_building_id);
	END //

CREATE PROCEDURE `ppe`.`sp_updateCustomer`(IN param_id VARCHAR(255), IN param_name VARCHAR(255), IN param_surname VARCHAR(255), IN param_phone_number VARCHAR(255), IN param_email VARCHAR(255), IN param_language INT)
	BEGIN
		UPDATE `ppe`.`customer` SET `name` = param_name, `surname` = param_surname, `phone_number` = param_phone_number, `email` = param_email, `language_fk` = param_language WHERE `id` = param_id;
    END //
    
CREATE PROCEDURE `ppe`.`sp_resetCustomerPassword`(IN param_email VARCHAR(255) , IN param_password VARCHAR(255))
	BEGIN
		UPDATE `ppe`.`customer` SET `password` = param_password WHERE `email` = param_email;
	END //

CREATE PROCEDURE `ppe`.`sp_deleteCustomerById`(IN param_id VARCHAR(255))
	BEGIN
		DELETE FROM `ppe`.`customer` WHERE `id` = param_id;
	END //

#----------------------USER----------------------------

CREATE PROCEDURE `ppe`.`sp_loadUserByUsername`(IN param_username VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_user` WHERE `username`= param_username;
    END //

#----------------------PROVIDER----------------------------  
CREATE PROCEDURE `ppe`.`sp_getAllProviders`()
	BEGIN
		SELECT * FROM `ppe`.`v_provider`;
	END //

CREATE PROCEDURE `ppe`.`sp_getProviderById`(IN param_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_provider` WHERE `id` = param_id;
	END //

CREATE PROCEDURE `ppe`.`sp_getProviderByName`(IN param_name VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_provider` WHERE `name` = param_name;
	END //    
    
CREATE PROCEDURE `ppe`.`sp_updateProvider`(IN param_id VARCHAR(255), IN param_name VARCHAR(255), IN param_street VARCHAR(255), IN param_number VARCHAR(255), IN param_city VARCHAR(255), IN param_country VARCHAR(255), IN param_zip_code INT, IN param_language INT)
	BEGIN
		UPDATE `ppe`.`provider` SET `name`= param_name, `street` = param_street, `number` =  param_number, `city` = param_city, `country` = param_country, `zip_code` = param_zip_code, `language_fk` = param_language WHERE `id` = param_id;
	END //    

#----------------------METER----------------------------  

CREATE PROCEDURE `ppe`.`sp_createMeter`(IN param_is_numeric BOOL, IN param_value FLOAT, IN param_building_id VARCHAR(255), IN param_energy_id INT, IN param_is_open BOOLEAN)
	BEGIN
		INSERT INTO `ppe`.`meter` (`is_numeric`, `value`, `building_fk` , `energy_type_fk`, `is_open`) VALUES(param_is_numeric, param_value, param_building_id, param_energy_id, param_is_open);
        SELECT `id` FROM `ppe`.`v_meter` ORDER BY `id` DESC LIMIT 1;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getAllMeters`()
	BEGIN	
		SELECT * FROM `ppe`.`v_meter`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getMetersByBuildingId`(IN param_building_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_meter` WHERE `building_fk` = param_building_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getMetersByWalletId`(IN param_wallet_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_meter` WHERE `id` IN (SELECT `meter_fk` FROM `ppe`.`v_wallet_meter` WHERE `wallet_fk` = param_wallet_id);
	END //
    
CREATE PROCEDURE `ppe`.`sp_updateMeter`(IN param_id VARCHAR(255), IN param_is_numeric BOOL, IN param_value FLOAT, IN param_is_open BOOLEAN)
	BEGIN
		UPDATE `ppe`.`meter` SET  `is_numeric` = param_is_numeric, `value` = param_value, `is_open` = param_is_open WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_deleteMeterById`(IN param_id VARCHAR(255))
	BEGIN
		DELETE FROM `ppe`. `meter` WHERE `id` = param_id;
	END //
    
#----------------------METER HISTORY----------------------------  

CREATE PROCEDURE `ppe`.`sp_createMeterHistory`(IN param_date DATE, IN param_value FLOAT, IN param_meter_id VARCHAR(255))
	BEGIN
		INSERT INTO `ppe`.`meter_history` (`date`, `value`,`meter_fk`) VALUES (param_date, param_value, param_meter_id);
		SELECT `id` FROM `ppe`.`v_meter` ORDER BY `id` DESC LIMIT 1;
	END //

CREATE PROCEDURE `ppe`.`sp_getMeterHistoryByMeterIdUsingDate`(IN param_meter_id VARCHAR(255), IN param_start_date DATE, IN param_end_date DATE)
	BEGIN
		SELECT * FROM `ppe`.`v_meter_history` WHERE `meter_fk` = param_meter_id AND `date` >= param_start_date AND `date` <= param_end_date;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getMeterHistoryByMeterId`(IN param_meter_id VARCHAR(255), IN param_offset INT, IN param_limit INT, IN param_column_sort VARCHAR(255), IN param_sort VARCHAR(4))
	BEGIN
		SET @query = CONCAT(
			'SELECT * FROM `ppe`.`v_meter_history` WHERE `meter_fk` = ? ORDER BY ',
			param_column_sort, ' ', param_sort,
			' LIMIT ?, ?;'
		);
		SET @param_meter_id = param_meter_id;
		SET @param_offset = param_offset;
		SET @param_limit = param_limit;
		PREPARE stmt FROM @query;
		EXECUTE stmt USING @param_meter_id, @param_offset, @param_limit;
		DEALLOCATE PREPARE stmt;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countMeterHistoryByMeterId`(IN param_meter_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_meter_history` WHERE `meter_fk` = param_meter_id;
	END //

CREATE PROCEDURE `ppe`.`sp_updateMeterHistory`(IN param_id INT, IN param_date DATE, IN param_value FLOAT)
	BEGIN
		UPDATE `ppe`.`meter_history` SET `date` = param_date, `value` = param_value WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_deleteMeterHistoryById`(IN param_id INT)
	BEGIN
		DELETE FROM `ppe`.`meter_history` WHERE `id` = param_id;
	END //

#----------------------ENERGY TYPE----------------------------  
 
CREATE PROCEDURE `ppe`.`sp_getAllEnergyTypes`()
	BEGIN
		SELECT * FROM `ppe`.`v_energy_type`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getEnergyTypeById`(IN param_id INT)
	BEGIN
		SELECT * FROM `ppe`.`v_energy_type` WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getEnergyTypeByProviderId`(IN param_provider_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_energy_type` WHERE `id` IN (SELECT `energy_type_fk` FROM `ppe`.`v_provider_energy_type` WHERE `provider_fk` = param_provider_id);
	END //
    
#----------------------CONTRACT TYPE----------------------------  

CREATE PROCEDURE `ppe`.`sp_getAllContractTypes`()
	BEGIN
		SELECT * FROM `ppe`.`v_contract_type`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractTypeById`(IN param_id int)
	BEGIN
		SELECT * FROM `ppe`.`v_contract_type` WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractTypeByContractId`(IN param_contract_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_contract_type` WHERE `contract_fk` = param_contract_id;
	END //

#----------------------WALLET CUSTOMER----------------------------  

CREATE PROCEDURE `ppe`.`sp_createWalletCustomer`(IN param_wallet_id VARCHAR(255), IN param_customer_id VARCHAR(255), IN param_privilege_id INT)
	BEGIN
		INSERT INTO `ppe`.`wallet_customer` (`privilege_fk`, `wallet_fk` , `customer_fk`) VALUES (param_privilege_id,param_wallet_id, param_customer_id);
        SELECT `id` FROM `ppe`.`v_wallet_customer` ORDER BY `id` DESC LIMIT 1;
	END//
    
CREATE PROCEDURE `ppe`.`sp_getWalletCustomerByWalletId`(IN param_wallet_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_wallet_customer` WHERE `wallet_fk` = param_wallet_id;
	END //
    
#----------------------WALLET---------------------------- 

CREATE PROCEDURE `ppe`.`sp_createWallet`(IN param_building_id VARCHAR(255))
	BEGIN
		INSERT INTO `ppe`.`wallet` (`building_fk`) VALUES (param_building_id);
        SELECT `id` FROM `ppe`.`v_wallet` ORDER BY `id` DESC LIMIT 1;
	END//
    
CREATE PROCEDURE `ppe`.`sp_getAllWallets`()
	BEGIN
		SELECT * FROM `ppe`.`v_wallet`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getWalletById`(IN param_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_wallet` WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getWalletByCustomerId`(IN param_customer_id VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_wallet` WHERE `id` IN (SELECT `wallet_fk` FROM `ppe`.`v_wallet_customer` WHERE `customer_fk` = param_customer_id) LIMIT param_offset, param_limit;
	END //

CREATE PROCEDURE `ppe`.`sp_countWalletByCustomerId`(IN param_customer_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_wallet` WHERE `id` IN (SELECT `wallet_fk` FROM `ppe`.`v_wallet_customer` WHERE `customer_fk` = param_customer_id);
	END //

#----------------------CONTRACT----------------------------  
    
CREATE PROCEDURE `ppe`.`sp_createContract`(IN param_start_date DATE, IN param_end_date DATE, IN param_provider_id VARCHAR(255), IN param_contract_type_id INT, IN param_building_id VARCHAR(255))
	BEGIN
		INSERT INTO `ppe`.`contract`(`start_date`, `end_date`, `provider_fk`, `contract_type_fk`, `building_fk`) VALUES (param_start_date, param_end_date, param_provider_id, param_contract_type_id, param_building_id);
		SELECT `id` FROM `ppe`.`v_contract` ORDER BY `id` DESC LIMIT 1;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getAllContracts`()
	BEGIN	
		SELECT * FROM `ppe`.`v_contract`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractById`(IN param_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_contract` WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractByProvider`(IN param_provider_id VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_contract` WHERE `provider_fk` = param_provider_id LIMIT param_offset, param_limit;
	END //

CREATE PROCEDURE `ppe`.`sp_countContractByProvider`(IN param_provider_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_contract` WHERE `provider_fk` = param_provider_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractByCustomer`(IN param_customer_id VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_contract` WHERE `building_fk` IN (SELECT `id` FROM `ppe`.`v_building` WHERE `customer_fk` =  param_customer_id) LIMIT param_offset, param_limit;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countContractByCustomer`(IN param_customer_id VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_contract` WHERE `building_fk` IN (SELECT `id` FROM `ppe`.`v_building` WHERE `customer_fk` =  param_customer_id);
	END //
    
CREATE PROCEDURE `ppe`.`sp_updateContract`(IN param_id VARCHAR(255), IN param_start_date DATE, IN param_end_date DATE, IN param_provider_id VARCHAR(255), IN param_contract_type_id INT, IN param_building_id VARCHAR(255))
	BEGIN
		UPDATE `ppe`.`contract` SET  `start_date` = param_start_date, `end_date` = param_end_date, `provider_fk` = param_provider_id, `contract_type_fk` = param_contract_type_id, `building_fk` = param_building_id WHERE `id` = param_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_deleteContractById`(IN param_id VARCHAR(255))
	BEGIN
		DELETE FROM `ppe`.`contract` WHERE `id` = param_id;
	END //

#----------------------CONTRACT ENERGY----------------------------  

CREATE PROCEDURE `ppe`.`sp_createContractEnergyType`(IN param_day_price FLOAT, IN param_night_price FLOAT, IN param_contract_id VARCHAR(255), IN param_energy_type_id INT)
	BEGIN
		INSERT INTO `ppe`.`contract_energy_type` (`day_price`, `night_price`, `contract_fk`, `energy_type_fk`) VALUES (param_day_price, param_night_price, param_contract_id, param_energy_type_id);
		SELECT `id` FROM `ppe`.`v_contract_energy_type` ORDER BY `id` DESC LIMIT 1;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getAllContractEnergyTypes`()
	BEGIN
		SELECT * FROM `ppe`.`v_contract_energy_type`;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getContractEnergyTypeById`(IN param_id INT)
	BEGIN
		SELECT * FROM `ppe`.`v_contract_energy_type` WHERE `id` = param_id;
    END //

CREATE PROCEDURE `ppe`.`sp_getContractEnergyTypeByContractId`(IN param_contract_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_contract_energy_type` WHERE `contract_fk` = param_contract_id;
	END //
    
CREATE PROCEDURE `ppe`.`sp_updateContractEnergyType`(IN param_id INT, IN param_day_price FLOAT, IN param_night_price FLOAT)
	BEGIN
		UPDATE `ppe`.`contract_energy_type` SET `day_price` = param_day_price, `night_price` = param_night_price WHERE `id` = param_id;
	END //

CREATE PROCEDURE `ppe`.`sp_deleteContractEnergyTypeById`(IN param_id INT)
	BEGIN
		DELETE FROM `ppe`.`contract_energy_type` WHERE `id` = param_id;
	END //
    
#---------------------------WALLET METER------------------------

CREATE PROCEDURE `ppe`.`sp_createWalletMeter`(IN param_wallet_id VARCHAR(255), IN param_meter_id VARCHAR(255))
	BEGIN
		INSERT INTO `ppe`.`wallet_meter` (`wallet_fk`, `meter_fk`) VALUES (param_wallet_id, param_meter_id);
        SELECT `id` FROM `ppe`.`v_wallet_meter` ORDER BY `id` DESC LIMIT 1;
	END//
    
CREATE PROCEDURE `ppe`.`sp_getWalletMeterByWalletId`(IN param_wallet_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_wallet_meter` WHERE `wallet_fk` = param_wallet_id;
	END//

#---------------------------NOTIFICATION------------------------
CREATE PROCEDURE `ppe`.`sp_createNotification`(IN param_customer_fk VARCHAR(255), IN param_provider_fk VARCHAR(255), IN param_message TEXT, IN param_is_accept BOOLEAN, IN param_is_read BOOLEAN, IN param_is_new BOOLEAN)
	BEGIN
		INSERT INTO `ppe`.`notification` (`customer_fk`, `provider_fk`, `message`, `is_accept`, `is_read`, `is_new`) VALUES(param_customer_fk, param_provider_fk, param_message, param_is_accept, param_is_read, param_is_new);
        SELECT `id` FROM `ppe`.`v_notification` ORDER BY `id` DESC LIMIT 1;
    END //
    
CREATE PROCEDURE `ppe`.`sp_getNotificationsByCustomerId`(IN param_customer_fk VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_notification` WHERE `customer_fk` = param_customer_fk LIMIT param_offset, param_limit;
    END //
    
CREATE PROCEDURE `ppe`.`sp_getSpecificNotificationsByCustomerId`(IN param_customer_fk VARCHAR(255), IN param_is_accept BOOLEAN, IN param_is_read BOOLEAN, IN param_is_new BOOLEAN, IN param_offset INT, IN param_limit INT)
	BEGIN	
		SELECT * FROM `ppe`.`v_notification` WHERE `customer_fk` = param_customer_fk AND `is_accept` = param_is_accept AND `is_read` = param_is_read AND `is_new`= param_is_new LIMIT param_offset, param_limit;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countSpecificNotificationsByCustomerId`(IN param_customer_fk VARCHAR(255), IN param_is_accept BOOLEAN, IN param_is_read BOOLEAN, IN param_is_new BOOLEAN)
	BEGIN	
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `customer_fk` = param_customer_fk AND `is_accept` = param_is_accept AND `is_read` = param_is_read AND `is_new`= param_is_new ;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countNotificationsByCustomerId`(IN param_customer_fk VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `customer_fk` = param_customer_fk;
	END //

CREATE PROCEDURE `ppe`.`sp_getNumberOfNewNotificationsByCustomerId`(IN param_customer_fk VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `customer_fk` = param_customer_fk AND `is_new`= TRUE;
    END //
    
CREATE PROCEDURE `ppe`.`sp_getNotificationsByProviderId`(IN param_provider_fk VARCHAR(255), IN param_offset INT, IN param_limit INT)
	BEGIN
		SELECT * FROM `ppe`.`v_notification` WHERE `provider_fk` = param_provider_fk LIMIT param_offset, param_limit;
    END //

CREATE PROCEDURE `ppe`.`sp_getSpecificNotificationsByProviderId`(IN param_provider_fk VARCHAR(255), IN param_is_accept BOOLEAN, IN param_is_read BOOLEAN, IN param_is_new BOOLEAN, IN param_offset INT, IN param_limit INT)
	BEGIN	
		SELECT * FROM `ppe`.`v_notification` WHERE `provider_fk` = param_provider_fk AND `is_accept` = param_is_accept AND `is_read` = param_is_read AND `is_new`= param_is_new LIMIT param_offset, param_limit;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countSpecificNotificationsByProviderId`(IN param_provider_fk VARCHAR(255), IN param_is_accept BOOLEAN, IN param_is_read BOOLEAN, IN param_is_new BOOLEAN)
	BEGIN	
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `provider_fk` = param_provider_fk AND `is_accept` = param_is_accept AND `is_read` = param_is_read AND `is_new`= param_is_new;
	END //
    
CREATE PROCEDURE `ppe`.`sp_countNotificationsByProviderId`(IN param_provider_fk VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `provider_fk` = param_provider_fk;
	END //
    
CREATE PROCEDURE `ppe`.`sp_getNumberOfNewNotificationsByProviderId`(IN param_provider_fk VARCHAR(255))
	BEGIN
		SELECT COUNT(*) FROM `ppe`.`v_notification` WHERE `provider_fk` = param_provider_fk AND `is_read` = FALSE AND `is_new` = FALSE;
    END //
    
CREATE PROCEDURE `ppe`.`sp_updateNotification`(IN param_id INT, IN param_customer_fk VARCHAR(255), IN param_provider_fk VARCHAR(255), IN param_message TEXT, IN param_is_accept BOOL, IN param_is_read BOOL, IN param_is_new BOOL)
	BEGIN
		UPDATE `ppe`.`notification` SET `date`= (SELECT CURRENT_TIMESTAMP) ,`customer_fk` = param_customer_fk, `provider_fk` = param_provider_fk, `message` = param_message, `is_accept` = param_is_accept, `is_read` = param_is_read, `is_new` = param_is_new WHERE `id` = param_id;
    END //
    
CREATE PROCEDURE `ppe`.`sp_deleteNotification`(IN param_id INT)
	BEGIN
		DELETE FROM `ppe`.`notification` WHERE `id` = param_id;
    END //

#---------------------------LANAGUAGE------------------------
CREATE PROCEDURE `ppe`.`sp_getAllLanguages`()
	BEGIN
		SELECT * FROM `ppe`.`v_language`;
    END//

CREATE PROCEDURE `ppe`.`sp_getLanguageById`(IN param_id INT)
	BEGIN
		SELECT * FROM `ppe`.`v_language` WHERE `id` = param_id;
    END//
    
#---------------------------ROLE------------------------
CREATE PROCEDURE `ppe`.`sp_getAllRoles`()
	BEGIN
		SELECT * FROM `ppe`.`v_role`;
    END//

CREATE PROCEDURE `ppe`.`sp_getRoleById`(IN param_id INT)
	BEGIN
		SELECT * FROM `ppe`.`v_role` WHERE `id` = param_id;
    END//
    
#---------------------------PRIVILEGE------------------------
CREATE PROCEDURE `ppe`.`sp_getAllPrivileges`()
	BEGIN
		SELECT * FROM `ppe`.`v_privilege`;
    END//

CREATE PROCEDURE `ppe`.`sp_getPrivilegeById`(IN param_id INT)
	BEGIN
		SELECT * FROM `ppe`.`v_privilege` WHERE `id` = param_id;
    END//

CREATE PROCEDURE `ppe`.`sp_getPrivilegeByCustomerIdAndWalletId`(IN param_customer_id VARCHAR(255), IN param_wallet_id VARCHAR(255))
	BEGIN
		SELECT * FROM `ppe`.`v_privilege` WHERE `id` = (SELECT `privilege_fk` FROM `ppe`.`v_wallet_customer` WHERE `customer_fk` = param_customer_id AND `wallet_fk` = param_wallet_id);
	END//
    
DELIMITER ;    

#--------------CREATE DATA--------------------

INSERT INTO `ppe`.`language`(`id`, `value`)
VALUES
		(1, 'FR'),
    	(2, 'EN');
    
INSERT INTO `ppe`.`role`(`id`, `value`)
VALUES
		(1, 'USER'),
    	(2, 'ADMIN');
    
INSERT INTO `ppe`.`provider` (`id`, `name`, `street`, `number`, `city`, `zip_code`, `country`, `password`)
VALUES
		('P0000000000001', 'Aspiravi Energy','Thor Park', '0', 'Genk', 3600, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000002', 'DATS 24','Rue Baudouin 1er', '78', 'Courcelles', 6180, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000003', 'Ebem','Leopoldstraat', '10', 'Merksplas', 2330, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000004', 'Eneco','Battelsesteenweg', '455', 'Mechelen', 2800, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000005', 'Energie.be','Koning Albert II-laan', '7', 'Brussel', 1210, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000006', 'Engie','Place Samuel de Champlain', '1', 'Paris La défense', 92930, 'France', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000007', 'Luminus','Bd Roi Albert II', '7', 'Saint-Josse-ten-Noode', 1210, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000008', 'Mega','Rue Natalis', '2', 'Liege', 4020, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000009', 'Octa','Schaarbeeklei', '600', 'Vilvoorde', 1800, 'Belgique','472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
		('P0000000000010', 'TotalEnergies','Rue Louis Armand', '2', 'Paris', 75015, 'France', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000011', 'AIEC', 'Rue des Scyoux', '20', 'Hamois', 5361, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000012', 'AIEM', 'Rue de l''Estroit', '39', 'Mettet', 5640, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000013', 'CIESAC', 'Rue de la Source', '10', 'Clavier', 4560, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000014', 'CILE', 'Rue Canal-de-l''Ourthe', '8', 'Liège', 4031, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000015', 'IDEN','Route du Condroz', '319', 'Nandrin', 4550, 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000016', 'IEG', 'Rue de la solidarité', '80', 'Mouscron', 7700 , 'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000017', 'INASEP', 'Rue des Viaux', '1b', 'Naninne', 5100,'Belgique','472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8'),
        ('P0000000000018', 'SWDE', 'Rue de la Concorde', '41', 'Verviers', 4800,'Belgique', '472590ae974d4c1f44b3780df0b152d9119f076c61bfb3e8cb6affd7889ac0a8');
 
INSERT INTO `ppe`.`customer`(`id`, `name`, `surname`, `phone_number`, `email`, `password`)
VALUES
		('U0000000000001','Falafel', 'Thierry', '0460208421','Falafel.Thierry@JeSuisNul.com', 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82'),
		('U0000000000002', 'Inspecteur', 'Monsieur', '0460208422','Monsieur.Inspecteru@gadget.com', 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82'),
		('U0000000000003', 'Gatta', 'Nicolas', '0460208423', 'Gatta.Nicolas@TuMeTrouverasPas.com', 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82'),
		('U0000000000004', 'Vancauwenberghe', 'Emilien', '0460208420', 'Vancauwenberghe.Emelien@JeSuisCaché.com', 'bf3763383aaf43069885db20b386631c6d5d8b8481df2a26769e9de5fe2f9c82');

 
INSERT INTO `ppe`.`energy_type`(`id`, `value`)
VALUES
		(1, 'electricity'),
        (2, 'water'),
        (3, 'gas');
 
INSERT INTO `ppe`.`contract_type` (`id`, `value`)
VALUES
		(1, 'variable'),
        (2, 'fixe');

 
 INSERT INTO `ppe`.`provider_energy_type`(`provider_fk`, `energy_type_fk`)
VALUES
		('P0000000000011', 2),
		('P0000000000012', 2),
		('P0000000000013', 2),
		('P0000000000014', 2),
		('P0000000000015', 2),
		('P0000000000016', 2),
		('P0000000000017', 2),
        ('P0000000000018', 2),
		('P0000000000001', 1),
		('P0000000000002', 1),
		('P0000000000003', 1),
		('P0000000000004', 1),
		('P0000000000005', 1),
		('P0000000000006', 1),
		('P0000000000007', 1),
		('P0000000000008', 1),
		('P0000000000009', 1),
		('P0000000000010', 1),
		('P0000000000001', 3),
		('P0000000000002', 3),
		('P0000000000003', 3),
		('P0000000000004', 3),
		('P0000000000005', 3),
		('P0000000000006', 3),
		('P0000000000007', 3),
		('P0000000000008', 3),
		('P0000000000009', 3),
		('P0000000000010', 3);
 
 
INSERT INTO `ppe`.`building` (`id` , `is_main`, `building_name`, `room`, `street`, `number`, `city`, `zip_code`, `customer_fk`)
VALUES
		('H0000000000001', TRUE, '', '2.19', 'Rue des Roses', '80', 'Mellet', 6210, 'U0000000000003'),
		('H0000000000002', FALSE, '', '2.50', 'Rue des Oiseaux Du Paradis', '69', 'Charleroi', 6000, 'U0000000000003'),
		('H0000000000003', TRUE, '', '2.2', 'Rue de L''inspecteur Gadget', '12', 'Courcelles', 6180, 'U0000000000001'),
        ('H0000000000004', FALSE, '', '2.2', 'Rue de L''inspecteur Gadget', '13', 'Courcelles', 6180, 'U0000000000001'),
		('H0000000000005', FALSE, '', '2.2', 'Rue de L''inspecteur Gadget', '14', 'Courcelles', 6180, 'U0000000000001'),
        ('H0000000000006', FALSE, '', '2.2', 'Rue de L''inspecteur Gadget', '15', 'Courcelles', 6180, 'U0000000000001'),
		('H0000000000007', TRUE, '', '2.7', 'Rue de Hares', '666', 'Jumet', 6040, 'U0000000000002'),
        ('H0000000000008', FALSE, '', '2.7', 'Rue de Hares', '667', 'Jumet', 6040, 'U0000000000002'),
		('H0000000000009', TRUE, '', '2.6', 'Rue du Joker', '4b', 'Roux', 6044, 'U0000000000004'),
        ('H0000000000010', FALSE, '', '2.6', 'Rue du Joker', '5b', 'Roux', 6044, 'U0000000000004');
   
   
INSERT INTO `ppe`.`contract`(`id`, `start_date`, `end_date`, `provider_fk`, `contract_type_fk`, `building_fk`)
VALUES 
		('C00000001', '2022-01-25', '2023-01-25', 'P0000000000001', 2, 'H0000000000001'),
        ('C00000002', '2022-01-25', '2023-01-25', 'P0000000000002', 2, 'H0000000000002'),
        ('C00000003', '2022-01-25', '2023-01-25', 'P0000000000003', 2, 'H0000000000003'),
        ('C00000004', '2022-01-25', '2023-01-25', 'P0000000000004', 2, 'H0000000000004'),
        ('C00000005', '2022-01-25', '2023-01-25', 'P0000000000005', 2, 'H0000000000005'),
        ('C00000006', '2022-01-25', '2023-01-25', 'P0000000000006', 2, 'H0000000000006'),
        ('C00000007', '2022-01-25', '2023-01-25', 'P0000000000007', 2, 'H0000000000007'),
        ('C00000008', '2022-01-25', '2023-01-25', 'P0000000000008', 2, 'H0000000000008'),
        ('C00000009', '2022-01-25', '2023-01-25', 'P0000000000009', 2, 'H0000000000009'),
        ('C00000010', '2022-01-25', '2023-01-25', 'P0000000000010', 2, 'H0000000000010'),
		('C00000011', '2022-01-25', '2023-01-25', 'P0000000000011', 2, 'H0000000000001'),
        ('C00000012', '2022-01-25', '2023-01-25', 'P0000000000012', 2, 'H0000000000002'),
        ('C00000013', '2022-01-25', '2023-01-25', 'P0000000000013', 2, 'H0000000000003'),
        ('C00000014', '2022-01-25', '2023-01-25', 'P0000000000014', 2, 'H0000000000004'),
        ('C00000015', '2022-01-25', '2023-01-25', 'P0000000000015', 2, 'H0000000000005'),
        ('C00000016', '2022-01-25', '2023-01-25', 'P0000000000016', 2, 'H0000000000006'),
        ('C00000017', '2022-01-25', '2023-01-25', 'P0000000000017', 2, 'H0000000000007'),
        ('C00000018', '2022-01-25', '2023-01-25', 'P0000000000018', 2, 'H0000000000008');

INSERT INTO `ppe`.`contract_energy_type`(`id`, `day_price`, `night_price`, `contract_fk` , `energy_type_fk`)
VALUES
		(1, 50, 50, 'C00000001', 1),
		(2, 50, 50, 'C00000001', 3),
		(3, 50, 50, 'C00000002', 1),
		(4, 50, 50, 'C00000002', 3),
		(5, 50, 50, 'C00000003', 1),
		(6, 50, 50, 'C00000003', 3),
		(7, 50, 50, 'C00000004', 1),
		(8, 50, 50, 'C00000004', 3),
		(9, 50, 50, 'C00000005', 1),
		(10, 50, 50, 'C00000005', 3),
		(11, 50, 50, 'C00000006', 1),
		(12, 50, 50, 'C00000006', 3),
		(13, 50, 50, 'C00000007', 1),
		(14, 50, 50, 'C00000007', 3),
		(15, 50, 50, 'C00000008', 1),
		(16, 50, 50, 'C00000008', 3),
		(17, 50, 50, 'C00000009', 1),
		(18, 50, 50, 'C00000009', 3),
		(19, 50, 50, 'C00000010', 1),
		(20, 50, 50, 'C00000010', 3),
        (21, 50, 50, 'C00000011', 2),
        (22, 50, 50, 'C00000012', 2),
        (23, 50, 50, 'C00000013', 2),
        (24, 50, 50, 'C00000014', 2),
        (25, 50, 50, 'C00000015', 2),
        (26, 50, 50, 'C00000016', 2),
        (27, 50, 50, 'C00000017', 2),
        (28, 50, 50, 'C00000018', 2);
        
INSERT INTO `ppe`.`meter` ( `id`, `value`, `is_numeric`, `building_fk` , `energy_type_fk`, `is_open`)
VALUES
		('000000000000000001', 1100, TRUE, 'H0000000000001', 1, TRUE),
		('000000000000000002', 120, TRUE, 'H0000000000001', 2, TRUE),
		('000000000000000003', 13120, TRUE, 'H0000000000001', 3, TRUE),
		('000000000000000004', 1100, TRUE, 'H0000000000002', 1, TRUE),
		('000000000000000005', 120, TRUE, 'H0000000000002', 2, TRUE),
		('000000000000000006', 13120, TRUE, 'H0000000000002', 3, TRUE),
		('000000000000000007', 1100, TRUE, 'H0000000000003', 1, TRUE),
		('000000000000000008', 120, TRUE, 'H0000000000003', 2, TRUE),
		('000000000000000009', 13120, TRUE, 'H0000000000003', 3, TRUE),
		('000000000000000010', 1100, TRUE, 'H0000000000004', 1, TRUE),
		('000000000000000011', 120, TRUE, 'H0000000000004', 2, TRUE),
		('000000000000000012', 13120, TRUE, 'H0000000000004', 3, TRUE),
		('000000000000000013', 1100, TRUE, 'H0000000000005', 1, TRUE),
		('000000000000000014', 120, TRUE, 'H0000000000005', 2, TRUE),
		('000000000000000015', 13120, TRUE, 'H0000000000005', 3, TRUE),
		('000000000000000016', 1100, TRUE, 'H0000000000006', 1, TRUE),
		('000000000000000017', 120, TRUE, 'H0000000000006', 2, TRUE),
		('000000000000000018', 13120, TRUE, 'H0000000000006', 3, TRUE),
		('000000000000000019', 1100, TRUE, 'H0000000000007', 1, TRUE),
		('000000000000000020', 120, TRUE, 'H0000000000007', 2, TRUE),
		('000000000000000021', 13120, TRUE, 'H0000000000007', 3, TRUE),
		('000000000000000022', 1100, TRUE, 'H0000000000008', 1, TRUE),
		('000000000000000023', 120, TRUE, 'H0000000000008', 2, TRUE),
		('000000000000000024', 13120, TRUE, 'H0000000000008', 3, TRUE),
		('000000000000000025', 1100, TRUE, 'H0000000000009', 1, TRUE),
		('000000000000000026', 120, TRUE, 'H0000000000009', 2, TRUE),
		('000000000000000027', 13120, TRUE, 'H0000000000009', 3, TRUE),
		('000000000000000028', 1100, TRUE, 'H0000000000010', 1, TRUE),
		('000000000000000029', 120, TRUE, 'H0000000000010', 2, TRUE),
		('000000000000000030', 13120, TRUE, 'H0000000000010', 3, TRUE);


INSERT INTO `ppe`.`meter_history`(`date`, `value`, `meter_fk`) 
VALUES
		((SELECT CURDATE()), 1050, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000001'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000001'),
		((SELECT CURDATE()), 110, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000002'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000002'),
		((SELECT CURDATE()), 13000, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000003'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000003'),
				((SELECT CURDATE()), 1050, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000004'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000004'),
		((SELECT CURDATE()), 110, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000005'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000005'),
		((SELECT CURDATE()), 13000, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000006'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000006'),
		((SELECT CURDATE()), 1050, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000007'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000007'),
		((SELECT CURDATE()), 110, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000008'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000008'),
		((SELECT CURDATE()), 13000, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000009'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000009'),		
		((SELECT CURDATE()), 1050, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000010'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000010'),
		((SELECT CURDATE()), 110, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000011'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000011'),
		((SELECT CURDATE()), 13000, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000012'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000012'),
		((SELECT CURDATE()), 1050, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000013'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000013'),
		((SELECT CURDATE()), 110, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000014'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000014'),
		((SELECT CURDATE()), 13000, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000015'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000015'),
		((SELECT CURDATE()), 1050, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000016'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000016'),
		((SELECT CURDATE()), 110, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000017'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000017'),
		((SELECT CURDATE()), 13000, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000018'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000018'),
		((SELECT CURDATE()), 1050, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000019'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000019'),
		((SELECT CURDATE()), 110, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000020'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000020'),
		((SELECT CURDATE()), 13000, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000021'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000021'),
		((SELECT CURDATE()), 1050, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000022'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000022'),
		((SELECT CURDATE()), 110, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000023'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000023'),
		((SELECT CURDATE()), 13000, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000024'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000024'),
		((SELECT CURDATE()), 1050, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000025'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000025'),
		((SELECT CURDATE()), 110, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000026'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000026'),
		((SELECT CURDATE()), 13000, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000027'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000027'),
		((SELECT CURDATE()), 1050, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 1030, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 1000, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 990, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 970, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 960, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 960, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 950, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 900, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 890, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 860, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 850, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 790, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 750, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 710, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 689, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 599, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 488, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 400, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 370, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 350, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 300, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 250, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 200, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 150, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 70, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 60, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 50, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 40, '000000000000000028'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 10, '000000000000000028'),
		((SELECT CURDATE()), 110, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 99, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 94, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 93, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 92, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 90, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 85, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 81, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 80, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 78, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 76, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 72, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 70, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 68, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 65, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 64, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 62, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 58, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 50, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 43, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 42, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 41, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 40, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 35, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 30, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 25, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 12, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 5, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 4, '000000000000000029'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 3, '000000000000000029'),
		((SELECT CURDATE()), 13000, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -5 DAY)), 12457, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -10 DAY)), 12064, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -15 DAY)), 11686, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -20 DAY)), 10652, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -25 DAY)), 10179, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -30 DAY)), 9733, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -35 DAY)), 9178, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -40 DAY)), 8754, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -45 DAY)), 8432, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -50 DAY)), 8024, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -55 DAY)), 7689, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -60 DAY)), 7320, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -65 DAY)), 6879, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -70 DAY)), 6487, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -75 DAY)), 6041, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -80 DAY)), 5657, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -85 DAY)), 5238, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -90 DAY)), 4977, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -95 DAY)), 4519, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -100 DAY)), 4229, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -105 DAY)), 3852, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -110 DAY)), 3561, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -115 DAY)), 3282, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -120 DAY)), 3031, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -125 DAY)), 2763, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -130 DAY)), 2413, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -135 DAY)), 2059, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -140 DAY)), 1050, '000000000000000030'),
		((SELECT DATE_ADD((SELECT CURDATE()), INTERVAL -145 DAY)), 500, '000000000000000030');


INSERT INTO `ppe`.`wallet`  (`id`, `building_fk`)
VALUES
		('W0000000000001', 'H0000000000001'),
        ('W0000000000002', 'H0000000000002'),
		('W0000000000003', 'H0000000000003'),
        ('W0000000000004', 'H0000000000004'),
        ('W0000000000005', 'H0000000000005'),
        ('W0000000000006', 'H0000000000006'),
        ('W0000000000007', 'H0000000000007'),
        ('W0000000000008', 'H0000000000008'),
        ('W0000000000009', 'H0000000000009'),
        ('W0000000000010', 'H0000000000010'),
        ('W0000000000011', 'H0000000000010');
        
INSERT INTO `ppe`.`wallet_meter` (`meter_fk`, `wallet_fk`)
VALUES
		('000000000000000001', 'W0000000000001'),
		('000000000000000002', 'W0000000000001'),
		('000000000000000003', 'W0000000000001'),
		('000000000000000004', 'W0000000000002'),
		('000000000000000005', 'W0000000000002'),
        ('000000000000000006', 'W0000000000002'),
		('000000000000000007', 'W0000000000003'),
		('000000000000000008', 'W0000000000003'),
        ('000000000000000009', 'W0000000000003'),
		('000000000000000010', 'W0000000000004'),
		('000000000000000011', 'W0000000000004'),
        ('000000000000000012', 'W0000000000004'),
		('000000000000000013', 'W0000000000005'),
		('000000000000000014', 'W0000000000005'),
        ('000000000000000015', 'W0000000000005'),
		('000000000000000016', 'W0000000000006'),
		('000000000000000017', 'W0000000000006'),
        ('000000000000000018', 'W0000000000006'),
		('000000000000000019', 'W0000000000007'),
		('000000000000000020', 'W0000000000007'),
        ('000000000000000021', 'W0000000000007'),
		('000000000000000022', 'W0000000000008'),
		('000000000000000023', 'W0000000000008'),
        ('000000000000000024', 'W0000000000008'),
		('000000000000000025', 'W0000000000009'),
		('000000000000000026', 'W0000000000009'),
        ('000000000000000027', 'W0000000000009'),
		('000000000000000028', 'W0000000000010'),
		('000000000000000029', 'W0000000000010'),
        ('000000000000000030', 'W0000000000010'),
        ('000000000000000030', 'W0000000000011');

INSERT INTO `ppe`.`privilege`(`id`, `value`)
VALUES
		(1, 'Gestionnaire'),
        (2, 'Lecture'),
        (3, 'Lecture-Ecriture');

INSERT INTO `ppe`.`wallet_customer` (`privilege_fk`, `customer_fk`, `wallet_fk`)
VALUES
		(1, 'U0000000000003', 'W0000000000001'),
        (1, 'U0000000000003', 'W0000000000002'),
        (1, 'U0000000000001', 'W0000000000003'),
        (1, 'U0000000000001', 'W0000000000004'),
        (1, 'U0000000000001', 'W0000000000005'),
        (1, 'U0000000000001', 'W0000000000006'),
        (1, 'U0000000000002', 'W0000000000007'),
        (1, 'U0000000000002', 'W0000000000008'),
        (1, 'U0000000000004', 'W0000000000009'),
        (1, 'U0000000000004', 'W0000000000010'),
        (2, 'U0000000000004', 'W0000000000001'),
        (3, 'U0000000000002', 'W0000000000002'),
        (2, 'U0000000000003', 'W0000000000003'),
        (3, 'U0000000000004', 'W0000000000004'),
        (2, 'U0000000000002', 'W0000000000005'),
        (3, 'U0000000000002', 'W0000000000006'),
        (2, 'U0000000000003', 'W0000000000007'),
        (3, 'U0000000000004', 'W0000000000008'),
        (2, 'U0000000000001', 'W0000000000009'),
        (3, 'U0000000000001', 'W0000000000010'),
        (1, 'U0000000000004', 'W0000000000011');
    
INSERT INTO `ppe`.`notification` (`customer_fk`, `date` ,`provider_fk`, `message`, `is_accept`, `is_read`, `is_new`)
VALUES
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000001', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000002', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000003', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -1 DAY)) ,'P0000000000001', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -2 DAY)) ,'P0000000000002', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -3 DAY)) ,'P0000000000003', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -4 DAY)) ,'P0000000000004', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -5 DAY)) ,'P0000000000005', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -6 DAY)) ,'P0000000000006', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -7 DAY)) ,'P0000000000007', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -8 DAY)) ,'P0000000000008', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -9 DAY)) ,'P0000000000009', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -10 DAY)) ,'P0000000000010', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -11 DAY)) ,'P0000000000011', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -12 DAY)) ,'P0000000000012', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -13 DAY)) ,'P0000000000013', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -14 DAY)) ,'P0000000000014', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -15 DAY)) ,'P0000000000015', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -16 DAY)) ,'P0000000000016', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -17 DAY)) ,'P0000000000017', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Pouvez-vous me dire si le prix de l''énergie va bientôt augmenter', FALSE, FALSE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Les prix de tous les contrats vont baissés', FALSE, FALSE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Est-ce que vous êtes là ?', FALSE, TRUE, FALSE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis avoir une reduction vu que les temps sont difficiles', TRUE, TRUE, TRUE),
		('U0000000000004', (SELECT DATE_ADD((SELECT CURRENT_TIMESTAMP()), INTERVAL -18 DAY)) ,'P0000000000018', 'Puis-je avoir mes contrats mis à 0 euro ?', FALSE, TRUE, TRUE);