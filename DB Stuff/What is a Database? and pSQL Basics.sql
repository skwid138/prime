CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) UNIQUE,
	active BOOLEAN DEFAULT true,
	created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT

INSERT INTO users (username, active) VALUES ('hunter', true);
INSERT INTO users (username, active) VALUES ('Guy', true);
INSERT INTO users (username, active) VALUES ('Ethan', false);
INSERT INTO users (username, active) VALUES ('ralph', true);
INSERT INTO users (username, active) VALUES ('randy', true);

-- SELECT Examples
SELECT * FROM users;
SELECT username, active FROM users;

SELECT * FROM users WHERE active=true;
SELECT * FROM users WHERE username='hunter';
SELECT * FROM users WHERE id=4;
SELECT * FROM users WHERE created < '2016';

SELECT * FROM users WHERE username LIKE 'ra%';

SELECT * FROM users WHERE active=false AND username='Ethan';

SELECT * FROM users WHERE active=true OR username='Ethan';

-- IN
SELECT * FROM users WHERE username IN ('Ethan', 'hunter');

-- Alias changes column names in result set
SELECT username AS 'USERname' FROM user;

-- Order By
SELECT * FROM users ORDER BY username;
SELECT * FROM users ORDER BY username ASC;
SELECT * FROM users ORDER BY username DESC;

-- LIMIT
SELECT * FROM users LIMIT 4;

-- UPDATE
SELECT * FROM users username='hunter';
UPDATE users SET username='hunter138' where username='hunter';

SELECT * FROM users WHERE active=true;
UPDATE users SET active=false WHERE active=true;

-- DELETE
SELECT * FROM users WHERE id=5;
DELETE FROM users WHERE id=5;

-- Aggregate Functions
SELECT COUNT(username) FROM users;
SELECT * FROM users;
SELECT MAX(id) FROM users;
SELECT MIN(id) FROM users;
