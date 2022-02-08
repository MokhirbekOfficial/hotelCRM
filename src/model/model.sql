CREATE TABLE categories (
    categorie_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    categorie_name varchar(255) NOT NULL UNIQUE
);

INSERT INTO categories(categorie_name) VALUES('Simple');

CREATE TABLE admin(
    admin_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    admin_name varchar(255) NOT NULL,
    admin_password varchar(255) NOT NULL
);

INSERT INTO admin(admin_name, admin_password) VALUES ('admin','admin@123');

CREATE TABLE rooms (
    room_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    room_number int NOT NULL,
    room_size varchar(255) NOT NULL,
    room_tel int NOT NULL,
    room_owner_first_name varchar(255) DEFAULT '-',
    room_owner_last_name varchar(255) DEFAULT '-',
    room_checkin varchar(255) DEFAULT '-',
    room_checkout varchar(255) DEFAULT '-',
    room_position varchar(255) NOT NULL,
    room_category uuid NOT NULL,
    FOREIGN KEY (room_category)
        REFERENCES categories(categorie_id)
        ON DELETE CASCADE
);

INSERT INTO rooms(room_number,room_size,room_tel,room_position, room_category) VALUES(1,'1-p',101,'free','d4e391bf-1a2b-4d16-93d5-f5ff345ea517');

INSERT INTO rooms(room_number,room_size,room_tel,room_position, room_category) VALUES(2,'2-p',102,'free','d4e391bf-1a2b-4d16-93d5-f5ff345ea517');

INSERT INTO rooms(room_number,room_size,room_tel,room_position, room_category) VALUES(8,'2-p',108,'free','d4e391bf-1a2b-4d16-93d5-f5ff345ea517');

INSERT INTO rooms(room_number,room_size,room_tel,room_position, room_category,room_owner_first_name,room_owner_last_name,room_checkin,room_checkout) VALUES(10,'3-p',110,'confirmed','d4e391bf-1a2b-4d16-93d5-f5ff345ea517','Akmal','Berdiyov', '01-02-2022','02-03-2022');

UPDATE rooms
SET room_owner_first_name = 'Karim',
    room_owner_last_name = 'Toshmatov',
    room_checkin = 'nmadur',
    room_checkout = 'num'
WHERE room_id = 'd61aa9d0-5b01-4e7a-9b8a-5069eef3d2b6';