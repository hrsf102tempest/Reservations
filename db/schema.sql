

DROP DATABASE sideBar;

CREATE DATABASE sideBar;

USE sideBar;

CREATE TABLE businessNames(
	id int NOT NULL UNIQUE,
	business_name varchar(255),
	PRIMARY KEY (ID) 
);

-- Add all business names

CREATE TABLE genericData(
	id int NOT NULL AUTO_INCREMENT,
	business_id int NOT NULL,
	people_per_reservation int,
	days_out int,
	price_range int,
	health_score int,
	has_soy_free_options BOOLEAN,
	liked_by_vegans BOOLEAN,
	takes_reservations BOOLEAN,
	delivery BOOLEAN,
	takeout BOOLEAN,
	accepts_credit_cards BOOLEAN,
	accepts_apple_Pay BOOLEAN,
	accepts_google_pay BOOLEAN,
	bike_parking BOOLEAN,
	wheelchair_access BOOLEAN,
	good_for_kids BOOLEAN,
	good_for_groups BOOLEAN,
	outdoor_seating BOOLEAN,
	wi_fi BOOLEAN,
	has_TV BOOLEAN,
	waiter_service BOOLEAN,
	caters BOOLEAN,
	gender_neutral_restroom BOOLEAN,
	Good For varchar(50),
	Parking varchar(50),
	Attire varchar(50), 
	Noise Level varchar(50), 
	Alcohol varchar(50),
	PRIMARY KEY (ID),
	FOREIGN KEY (business_id) references businessNames (ID)
);

CREATE TABLE openHours(
	id int NOT NULL AUTO_INCREMENT,
	business_id int NOT NULL,
	day varchar(10) NOT NULL,
	open_time TIMESTAMP,
	close_time TIMESTAMP,
	PRIMARY KEY (ID),
	FOREIGN KEY (business_id) references businessNames (ID)
);

-- add list of open hours for each business

CREATE TABLE reservations(
	id int NOT NULL AUTO_INCREMENT,
	business_id int NOT NULL,
	time_slot TIMESTAMP,
	current_reservations int,
	PRIMARY KEY (ID),
	FOREIGN KEY (business_id) references businessNames (ID)
);

-- IF business accepts reservations;
-- add list of number of reservations for timeslots (30min interval, 1 hour before close)




/*  
 * Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 */