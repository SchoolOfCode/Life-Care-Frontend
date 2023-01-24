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
  	time_stamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  	seen BOOLEAN
);

-- carers insert 
insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/lCRUy5D.jpg', 'Seana', 'Skittle', '345 756 0782', 'sskittle0@issuu.com'); 

insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/IyOqe4z.jpg', 'Nikolos', 'Coady', '474 919 7121', 'ncoady1@netlog.com');

insert into carers (avatar, first_name, last_name, number, email) values ('https://i.imgur.com/iLkdMka.jpg', 'Anastassia', 'Beavington', '224 149 8341', 'abeavington2@oaic.gov.au');


-- patients insert

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/XBIvJRO.jpg', 'Rollin', 'Laflin', '961-295-2852', '1902-10-25', '5076 Gale Lane', 'This client is in the early stages of dementia and requires assistance with medication management and meal preparation. They have a small dog for companionship.', 'Takes medication for high blood pressure and arthritis. Has issues with hearing and vision, also has a history of stroke.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/1OQe6Fs.jpg', 'Pate', 'McKeown', '534-327-6899', '1966-08-22', '7401 4th Lane', 'This client has recently had a hip replacement and needs help with mobility and physical therapy exercises. They do not have any pets.', 'Has anxiety and depression, does not take any medication but receiving therapy.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/IhYZlOq.jpg', 'Jolyn', 'Woodyeare', '372-572-5747', '1978-02-14', '72 Ridgeview Avenue', 'This client has a chronic heart condition and needs assistance with monitoring their vital signs and managing their diet. They have a cat for companionship.', 'Takes medication for high blood pressure and cholesterol, also has a history of heart disease and had a bypass surgery, and has a pacemaker implanted.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/tg1XCWT.jpg', 'Harmon', 'Tulloch', '601-879-0650', '1916-12-11', '1 Pond Point', 'This client is blind and needs assistance with daily tasks such as grocery shopping and navigating their home. They do not have any pets.', 'Takes medication for diabetes, high blood pressure and cholesterol, also has a history of kidney disease and had a kidney transplant.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/mMj1yo4.jpg', 'Natalya', 'D''Cruze', '370-778-6050', '1933-03-16', '37440 Vidon Pass', 'This client has limited mobility due to a stroke and requires assistance with dressing, bathing, and using the restroom. They have a small dog for companionship.', 'Takes medication for high blood pressure, arthritis and osteoporosis. Has issues with hearing and vision, also has a history of stroke.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/0IQnCWP.jpg', 'Omero', 'McMonies', '446-893-9085', '1977-09-17', '68858 3rd Street', 'This client is dealing with the early stages of Parkinson''s Disease and needs assistance with mobility and maintaining their independence. They do not have any pets.', 'Takes medication for high blood pressure and has issues with arthritis.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/7Jhrp75.jpg', 'Miriam', 'Cheves', '383-275-8843', '1954-03-27', '1821 North Terrace', 'This client is recovering from a fall and needs assistance with physical therapy and managing their medications. They have a cat for companionship.', 'Takes medication for high blood pressure, has issues with vision, also a history of glaucoma and had a cataract surgery.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/C1x7r7L.jpg', 'Portie', 'Greatbatch', '878-312-7790', '1926-10-18', '0 Hanson Pass', 'This client has advanced arthritis and needs assistance with managing their pain and helping them with daily tasks. They do not have any pets.', 'Has anxiety and depression, has a history of PTSD and receiving therapy for it, also takes medication for sleep disorder.');

insert into patients (avatar, first_name, last_name, number, dob, address, overview, medical_history) values ('https://i.imgur.com/8E1wVXg.jpg', 'Marjorie', 'Engledow', '540-632-5930', '1944-03-27', '6943 Coleman Point', 'This client has a chronic lung disease and needs assistance with managing their oxygen levels and monitoring their breathing. They do not have any pets.', 'Takes medication for high blood pressure, has issues with arthritis, also has a history of gout.');

-- notes table

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (1, 1, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2022-02-07 14:43:14', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (1, 1, 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', '2022-07-28 22:19:13', false);


insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (2, 2, 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.', '2022-12-22 09:25:51', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (2, 1, 'Integer ac leo.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2022-08-05 17:40:44', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (3, 1, 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', '2022-12-02 21:06:52', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (3, 3, 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.', 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', '2022-07-17 08:07:41', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (4, 3, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2022-02-20 23:15:51', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (4, 3, 'In hac habitasse platea dictumst.', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.', '2023-01-03 13:23:38', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (5, 2, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', '2022-06-18 14:50:37', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (5, 2, 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.', 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 'Duis consequat dui nec nisi volutpat eleifend.', '2022-12-09 20:04:57', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (6, 1, 'In sagittis dui vel nisl.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '2022-08-22 19:35:41', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (6, 2, 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.', '2022-11-30 10:20:08', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (7, 2, 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.', 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', '2022-02-19 14:44:06', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (7, 3, 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '2022-03-19 11:18:58', false);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (8, 3, 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', '2022-10-26 23:58:03', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (8, 3, 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2023-01-08 00:25:16', true);


insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (9, 1, 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', '2022-04-21 23:47:00', true);

insert into notes (patient_id, carer_id, overview, incidents, additional, time_stamp, seen) values (9, 3, 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.', 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '2022-10-24 08:00:43', true);

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