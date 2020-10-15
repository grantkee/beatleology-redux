create table userCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(100)
  PRIMARY KEY (id)
  UNIQUE KEY (username)
);