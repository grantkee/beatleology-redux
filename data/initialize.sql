DROP TABLE IF EXISTS questions, answers;

create table questions (
	id INT NOT NULL AUTO_INCREMENT,
	question_id INT,
	question VARCHAR(50),
  PRIMARY KEY (id)
);

create table answers (
	id INT NOT NULL AUTO_INCREMENT,
	question_id INT NOT NULL,
	answer_type VARCHAR(6),
	content VARCHAR(114),
  PRIMARY KEY (id),
  FOREIGN KEY (question_id)
  REFERENCES questions (id)
);

insert into questions (question) values ('When it comes to work: success is....');
insert into questions (question) values ('How do you view your coworkers and boss?');
insert into questions (question) values ('If you were to quit a job: how do you say goodbye?');
insert into questions (question) values ('In a spouse: I look for someone who....');
insert into questions (question) values ('Your thoughts on cheating?');

insert into answers (question_id, answer_type, content) values (1, 'Paul', 'Important if I love what I''m doing. If not; I could care less');
insert into answers (question_id, answer_type, content) values (1, 'George', 'Everything; regardless of what I''m doing. I play to win');
insert into answers (question_id, answer_type, content) values (1, 'Ringo', 'Somewhat important. I know when I''ve succeeded; but I also know when I''ve failed');
insert into answers (question_id, answer_type, content) values (1, 'John', 'Not important. I just want a check; man');
insert into answers (question_id, answer_type, content) values (2, 'Paul', 'They are all just people I work with. I like some more than others; but eh. What are you gonna do?');
insert into answers (question_id, answer_type, content) values (2, 'George', 'I''m not crazy about bossy bosses or too many coworkers');
insert into answers (question_id, answer_type, content) values (2, 'Ringo', 'Bosses I must please; coworkers must please me');
insert into answers (question_id, answer_type, content) values (2, 'John', 'Bosses are only trying to bring me down; and coworkers either understand me or are complete and total idiots');
insert into answers (question_id, answer_type, content) values (3, 'Paul', 'Just leave; but dream about burning the place to the ground');
insert into answers (question_id, answer_type, content) values (3, 'George', 'Make sure all harsh feelings are patched up and make sure everyone knows I''ve enjoyed them');
insert into answers (question_id, answer_type, content) values (3, 'Ringo', 'Tell everyone EXACTLY how I feel about them; including my boss; trash the place; and get escorted off the premisis');
insert into answers (question_id, answer_type, content) values (3, 'John', 'Send around a thank you e-mail; even if I could care less what would happen to those blokes');
insert into answers (question_id, answer_type, content) values (4, 'Paul', 'Adores me like a God');
insert into answers (question_id, answer_type, content) values (4, 'George', 'Is truly my equal');
insert into answers (question_id, answer_type, content) values (4, 'Ringo', 'Is loving; intelligent and easygoing');
insert into answers (question_id, answer_type, content) values (4, 'John', 'Wants nothing but fun; love; and sex');
insert into answers (question_id, answer_type, content) values (5, 'Paul', 'I try to keep things simple and drama-free; so I''m not crazy about it');
insert into answers (question_id, answer_type, content) values (5, 'George', 'No way. Think about how I will be portrayed if I''m caught!');
insert into answers (question_id, answer_type, content) values (5, 'Ringo', 'Only if I''m really not in love');
insert into answers (question_id, answer_type, content) values (5, 'John', 'If it feels good; do it');