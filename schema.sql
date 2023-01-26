CREATE TABLE carers (
	carer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  	avatar VARCHAR(50),
 	first_name TEXT,
  	last_name TEXT,
  	number VARCHAR (13),
  	email VARCHAR
);

CREATE TABLE patients (
	patient_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  	avatar VARCHAR (50),
  	first_name TEXT,
  	last_name TEXT,
  	number VARCHAR (13),
  	dob DATE,
  	address TEXT,
  	overview TEXT,
  	medical_history TEXT
);

CREATE TABLE carer_patients (
    carer_id int NOT NULL,
    patient_id int NOT NULL,
    CONSTRAINT PK_carer_patients PRIMARY KEY
    (
        carer_id,
        patient_id
    ),
    FOREIGN KEY (carer_id) REFERENCES carers (carer_id),
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

CREATE TABLE notes (
	note_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  	patient_id INT REFERENCES patients(patient_id),
  	carer_id INT REFERENCES carers(carer_id),
  	overview TEXT,
  	incidents TEXT,
  	additional TEXT,
  	time_stamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- carers insert 

insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/lCRUy5D.jpg', 'Seana', 'Skittle', '345 756 0782', 'sskittle0@issuu.com'); 

insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/IyOqe4z.jpg', 'Nikolos', 'Coady', '474 919 7121', 'ncoady1@netlog.com');

insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/iLkdMka.jpg', 'Anastassia', 'Beavington', '224 149 8341', 'abeavington2@oaic.gov.au');


-- patients insert

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/XBIvJRO.jpg', 'Rollin', 'Laflin', '961-295-2852', '1952-10-25', '5076 Gale Lane', 'This client is in the early stages of dementia and requires assistance with medication management and meal preparation. They have a small dog for companionship.', 'Takes medication for high blood pressure and arthritis. Has issues with hearing and vision, also has a history of stroke.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/1OQe6Fs.jpg', 'Pate', 'McKeown', '534-327-6899', '1956-08-22', '7401 4th Lane', 'This client has recently had a hip replacement and needs help with mobility and physical therapy exercises. They do not have any pets.', 'Has anxiety and depression, does not take any medication but receiving therapy.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/IhYZlOq.jpg', 'Jolyn', 'Woodyeare', '372-572-5747', '1958-02-14', '72 Ridgeview Avenue', 'This client has a chronic heart condition and needs assistance with monitoring their vital signs and managing their diet. They have a cat for companionship.', 'Takes medication for high blood pressure and cholesterol, also has a history of heart disease and had a bypass surgery, and has a pacemaker implanted.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/tg1XCWT.jpg', 'Harmon', 'Tulloch', '601-879-0650', '1956-12-11', '1 Pond Point', 'This client is blind and needs assistance with daily tasks such as grocery shopping and navigating their home. They do not have any pets.', 'Takes medication for diabetes, high blood pressure and cholesterol, also has a history of kidney disease and had a kidney transplant.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/mMj1yo4.jpg', 'Natalya', 'D''Cruze', '370-778-6050', '1953-03-16', '37440 Vidon Pass', 'This client has limited mobility due to a stroke and requires assistance with dressing, bathing, and using the restroom. They have a small dog for companionship.', 'Takes medication for high blood pressure, arthritis and osteoporosis. Has issues with hearing and vision, also has a history of stroke.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/0IQnCWP.jpg', 'Omero', 'McMonies', '446-893-9085', '1957-09-17', '68858 3rd Street', 'This client is dealing with the early stages of Parkinson''s Disease and needs assistance with mobility and maintaining their independence. They do not have any pets.', 'Takes medication for high blood pressure and has issues with arthritis.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/7Jhrp75.jpg', 'Miriam', 'Cheves', '383-275-8843', '1954-03-27', '1821 North Terrace', 'This client is recovering from a fall and needs assistance with physical therapy and managing their medications. They have a cat for companionship.', 'Takes medication for high blood pressure, has issues with vision, also a history of glaucoma and had a cataract surgery.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/C1x7r7L.jpg', 'Portie', 'Greatbatch', '878-312-7790', '1956-10-18', '0 Hanson Pass', 'This client has advanced arthritis and needs assistance with managing their pain and helping them with daily tasks. They do not have any pets.', 'Has anxiety and depression, has a history of PTSD and receiving therapy for it, also takes medication for sleep disorder.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/8E1wVXg.jpg', 'Marjorie', 'Engledow', '540-632-5930', '1954-03-27', '6943 Coleman Point', 'This client has a chronic lung disease and needs assistance with managing their oxygen levels and monitoring their breathing. They do not have any pets.', 'Takes medication for high blood pressure, has issues with arthritis, also has a history of gout.');

-- notes table

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (1, 1, 'Client was in good spirits and engaged during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-02-07 14:43:14');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (1, 1, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in blood pressure, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-07-28 22:19:13');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (2, 2, 'Client was in good spirits and cooperative during their last visit. They reported no new symptoms or concerns.', 'Client experienced some shortness of breath, carer will monitor for any changes.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-12-22 09:25:51');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (2, 1, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in pain in their joints, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-08-05 17:40:44');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (3, 1, 'Client was in good spirits and cooperative during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-12-02 21:06:52');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (3, 3, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in blood sugar, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-07-17 08:07:41');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (4, 3, 'Client was in good spirits and engaged during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-02-20 23:15:51');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (4, 3, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in blood pressure, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2023-01-03 13:23:38');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (5, 2, 'Client was in good spirits and cooperative during their last visit. They reported no new symptoms or concerns.', 'Client experienced some shortness of breath, carer will monitor for any changes.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-06-18 14:50:37');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (5, 2, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in pain in their joints, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-12-09 20:04:57');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (6, 1, 'Client was in good spirits and cooperative during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-08-22 19:35:41');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (6, 2, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in blood sugar, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-11-30 10:20:08');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (7, 2, 'Client was in good spirits and engaged during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-02-19 14:44:06');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (7, 3, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in blood pressure, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-03-19 11:18:58');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (8, 3, 'Client was in good spirits and cooperative during their last visit. They reported no new symptoms or concerns.', 'Client experienced some shortness of breath, carer will monitor for any changes.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-10-26 23:58:03');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (9, 1, 'Client was in good mood and cooperative during their last visit. They reported a slight increase in pain in their joints, carer will monitor for any changes.', 'Client had a fall during the night, no injuries were reported, but carer will monitor for any signs of discomfort.', 'Client seemed to be more tired than usual, carer will discuss with primary care physician at next appointment.', '2022-04-21 23:47:00');

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp) values (9, 3, 'Client was in good spirits and engaged during their last visit. They reported no new symptoms or concerns.', 'Client had a hard time sleeping the previous night, carer will monitor for any signs of discomfort.', 'Client requested to schedule a follow-up visit with the primary care physician.', '2022-10-24 08:00:43');

-- carer_patients insert

insert into carer_patients (patient_id, carer_id) values (1, 1);
insert into carer_patients (patient_id, carer_id) values (4, 1);
insert into carer_patients (patient_id, carer_id) values (3, 1);
insert into carer_patients (patient_id, carer_id) values (4, 2);
insert into carer_patients (patient_id, carer_id) values (5, 2);
insert into carer_patients (patient_id, carer_id) values (6, 2);
insert into carer_patients (patient_id, carer_id) values (1, 3);
insert into carer_patients (patient_id, carer_id) values (8, 3);
insert into carer_patients (patient_id, carer_id) values (9, 3);