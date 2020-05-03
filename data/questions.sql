create table questions (
	id INT NOT NULL AUTO_INCREMENT,
	question VARCHAR(333),
  section VARCHAR(50),
  PRIMARY KEY (id)
);

-- part 1 : work
insert into questions (question, section) values ("In my career, my feelings regarding success are...", "work");
insert into questions (question, section) values ("I see my boss as...", "work");
insert into questions (question, section) values ("In my relationships with other coworkers, I feel...", "work");
insert into questions (question, section) values ("When picking a career, I look for...", "work");
insert into questions (question, section) values ("During my lunch hour, I...", "work");
insert into questions (question, section) values ("I arrive at work...", "work");
insert into questions (question, section) values ("Things I have stolen from work include...", "work");
insert into questions (question, section) values ("My obligation toward work is...", "work");
insert into questions (question, section) values ("When I quit a job, I...", "work");
insert into questions (question, section) values ("When I go on vacation...", "work");

-- part 2 : relationships
insert into questions (question, section) values ("In a lover or a spouse, I look for...", "relationships");
insert into questions (question, section) values ("Dating is...", "relationships");
insert into questions (question, section) values ("In a long-term relationship, I tend to be...", "relationships");
insert into questions (question, section) values ("After a breakup, I...", "relationships");
insert into questions (question, section) values ("During sex, I am...", "relationships");
insert into questions (question, section) values ("On a first date...", "relationships");
insert into questions (question, section) values ("When I propose marriage...", "relationships");
insert into questions (question, section) values ("I view sex as...", "relationships");
insert into questions (question, section) values ("My thoughts on infidelity are...", "relationships");
insert into questions (question, section) values ("I hate...", "relationships");

-- part 3 : family
insert into questions (question, section) values ("When it comes to raising children...", "family");
insert into questions (question, section) values ("Family is important to me because...", "family");
insert into questions (question, section) values ("What describes your role in your family?", "family");
insert into questions (question, section) values ("When I was growing up, my mother and father were...", "family");
insert into questions (question, section) values ("An ideal family vacation is...", "family");

-- part 4 : morality
insert into questions (question, section) values ("Do I owe a debt to society?", "morality");
insert into questions (question, section) values ("Is stealing every justifiable?", "morality");
insert into questions (question, section) values ("You've arrested a suspected terrorist who may have information on an imminent attack but will only reveal the truth through painful torture. Would you torture them?", "morality");
insert into questions (question, section) values ("Is there such a thing as right and wrong?", "morality");
insert into questions (question, section) values ("Is it ever acceptable to lie?", "morality");

-- part 5 : spirituality
insert into questions (question, section) values ("Do you believe in God?", "spirituality");
insert into questions (question, section) values ("What is God like?", "spirituality");
insert into questions (question, section) values ("Which statement best represents you?", "spirituality");
insert into questions (question, section) values ("As a kid, I saw church as...", "spirituality");
insert into questions (question, section) values ("Do pets go to heaven?", "spirituality");

-- part 6 : money
insert into questions (question, section) values ("How are you with money?", "money");
insert into questions (question, section) values ("At the end of the month...", "money");
insert into questions (question, section) values ("What do you spend on your vacations?", "money");
insert into questions (question, section) values ("If I won the lottery, I would...", "money");
insert into questions (question, section) values ("How much did you spend on your last car?", "money");

-- part 7 : miscellaneous
insert into questions (question, section) values ("What kind of setting makes you the most comfortable?", "misc");
insert into questions (question, section) values ("Who do you turn to in time of need?", "misc");
insert into questions (question, section) values ("What types of books do your prefer to read?", "misc");
insert into questions (question, section) values ("How politically aware are you?", "misc");
insert into questions (question, section) values ("If you were to commit suicide", "misc");