DROP TABLE IF EXISTS answers, questions;

create table questions (
	id INT NOT NULL AUTO_INCREMENT,
	question VARCHAR(333),
  section VARCHAR(50),
  PRIMARY KEY (id)
);

create table answers (
	id INT NOT NULL AUTO_INCREMENT,
	question_id INT NOT NULL,
	answer_type VARCHAR(6),
	content VARCHAR(333),
  PRIMARY KEY (id),
  FOREIGN KEY (question_id)
  REFERENCES questions (id)
);

create table userCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(100),
  PRIMARY KEY (id),
  CONSTRAINT unique_username UNIQUE (username)
);

create table users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(120),
  last_name VARCHAR (120),
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

insert into answers (question_id, answer_type, content) values (1, "Paul", "I feel I deserve success and will be successful in any endeavor.");
insert into answers (question_id, answer_type, content) values (1, "George", "I would like to succeed, but I'm not willing to sell my soul for it.");
insert into answers (question_id, answer_type, content) values (1, "Ringo", "As long as the check doesn't bounce, I'm cool. To me, work is just one aspect of life.");
insert into answers (question_id, answer_type, content) values (1, "John", "I feel I must succeed at any cost and am willing to do anything to achieve it.");
insert into answers (question_id, answer_type, content) values (2, "Paul", "Someone to look up to. I like my boss and strive to be in their position.");
insert into answers (question_id, answer_type, content) values (2, "George", "Someone to work with and help me as long as they are not too domineering.");
insert into answers (question_id, answer_type, content) values (2, "Ringo", "Just another bloke. Bosses are a fact of life.");
insert into answers (question_id, answer_type, content) values (2, "John", "A bourgeois capitalist pig who will be the first one against the wall when the revolution comes. They will keep me down unless they respect my autonomy.");
insert into answers (question_id, answer_type, content) values (3, "Paul", "They are important as a support for me and my work (as long as they do what I say).");
insert into answers (question_id, answer_type, content) values (3, "George", "I like my coworkers as long as they don't try to dominate the workplace.");
insert into answers (question_id, answer_type, content) values (3, "Ringo", "They are just another bunch of blokes. I enjoy my coworkers if they are not overly serious or stressful.");
insert into answers (question_id, answer_type, content) values (3, "John", "They can help me polish an idea or project but can also drag down my work.");
insert into answers (question_id, answer_type, content) values (4, "Paul", "A dynamic work environment with lots of opportunity for advancement.");
insert into answers (question_id, answer_type, content) values (4, "George", "Independence and a laid-back atmosphere.");
insert into answers (question_id, answer_type, content) values (4, "Ringo", "Stability in a company, financial gain, and a friendly environment.");
insert into answers (question_id, answer_type, content) values (4, "John", "A job that allows me a certain degree of freedom, autonomy, and the ability to express myself");
insert into answers (question_id, answer_type, content) values (5, "Paul", "Am the center of the conversation in the lunch room.");
insert into answers (question_id, answer_type, content) values (5, "George", "Am using the time to pick up my dry-cleaning or working ahead.");
insert into answers (question_id, answer_type, content) values (5, "Ringo", "Am out at a restaurant having fish and chips with a pint.");
insert into answers (question_id, answer_type, content) values (5, "John", "Am working on my personal projects like art, music, and writing.");
insert into answers (question_id, answer_type, content) values (6, "Paul", "Early, and stay late.");
insert into answers (question_id, answer_type, content) values (6, "George", "Early, but leave early.");
insert into answers (question_id, answer_type, content) values (6, "Ringo", "Whenever I arrive is on time.");
insert into answers (question_id, answer_type, content) values (6, "John", "Late but stay late.");
insert into answers (question_id, answer_type, content) values (7, "Paul", "My coworker's client list, but not physical items.");
insert into answers (question_id, answer_type, content) values (7, "George", "Only big items I know I can get away with.");
insert into answers (question_id, answer_type, content) values (7, "Ringo", "Drinks on the expense report and paper clips.");
insert into answers (question_id, answer_type, content) values (7, "John", "Laptops, lightbulbs, copper wire from the wall, and anything else that isn't bolted down.");
insert into answers (question_id, answer_type, content) values (8, "Paul", "I feel obligated to do my best and to succeed.");
insert into answers (question_id, answer_type, content) values (8, "George", "I want to have the reputation as doing my best, but deep-down, I don't care.");
insert into answers (question_id, answer_type, content) values (8, "Ringo", "I do my work so I deserve to get paid.");
insert into answers (question_id, answer_type, content) values (8, "John", "I need my job for money, but my real obligation is to myself.");
insert into answers (question_id, answer_type, content) values (9, "Paul", "Send around a good-bye email thanking everyone.");
insert into answers (question_id, answer_type, content) values (9, "George", "Quietly walk away, but fantasize about burning the place down.");
insert into answers (question_id, answer_type, content) values (9, "Ringo", "Leave well-liked and on good terms.");
insert into answers (question_id, answer_type, content) values (9, "John", "Burn my bridges and tell everyone to piss off.");
insert into answers (question_id, answer_type, content) values (10, "Paul", "I am in consistent contact and check messages daily.");
insert into answers (question_id, answer_type, content) values (10, "George", "I check in occassionally, but prefer not to");
insert into answers (question_id, answer_type, content) values (10, "Ringo", "I never check my messages. Whatever it is can wait.");
insert into answers (question_id, answer_type, content) values (10, "John", "I try not to check in but can't help thinking about work.");
insert into answers (question_id, answer_type, content) values (11, "Paul", "Someone who supports and adores me.");
insert into answers (question_id, answer_type, content) values (11, "George", "A loving, easy-going partner.");
insert into answers (question_id, answer_type, content) values (11, "Ringo", "Fun, love, and sex.");
insert into answers (question_id, answer_type, content) values (11, "John", "A true partner, someone who challenges me.");
insert into answers (question_id, answer_type, content) values (12, "Paul", "An opportunity for me to be charming and adored.");
insert into answers (question_id, answer_type, content) values (12, "George", "A pain in the neck.");
insert into answers (question_id, answer_type, content) values (12, "Ringo", "A fun way to meet people and possibly get some action.");
insert into answers (question_id, answer_type, content) values (12, "John", "A huge waste of time. We should cut right to a stiflingly codependent relationship.");
insert into answers (question_id, answer_type, content) values (13, "Paul", "The dominant partner and the center of attention. We do what I want.");
insert into answers (question_id, answer_type, content) values (13, "George", "Stable and avoid relationship drama.");
insert into answers (question_id, answer_type, content) values (13, "Ringo", "Committed, but not overly analytical about my feelings.");
insert into answers (question_id, answer_type, content) values (13, "John", "Codependent at the expense of my other relationships.");
insert into answers (question_id, answer_type, content) values (14, "Paul", "Am hurt (especially my ego), and wonder why someone would give me up.");
insert into answers (question_id, answer_type, content) values (14, "George", "Am also hurt and have a period of quiet reflection.");
insert into answers (question_id, answer_type, content) values (14, "Ringo", "Realize it wasn't meant to be and recover quickly.");
insert into answers (question_id, answer_type, content) values (14, "John", "Am emotionally crushed and drunkenly call my ex.");
insert into answers (question_id, answer_type, content) values (15, "Paul", "A top.");
insert into answers (question_id, answer_type, content) values (15, "George", "A top, bottom, or side.");
insert into answers (question_id, answer_type, content) values (15, "Ringo", "Tied to the bed posts.");
insert into answers (question_id, answer_type, content) values (15, "John", "A bottom.");
insert into answers (question_id, answer_type, content) values (16, "Paul", "I read them some of my poetry, and I am very open about my feelings. I quickly think they're the one.");
insert into answers (question_id, answer_type, content) values (16, "George", "I try to be myself, but have trouble showing my true personality.");
insert into answers (question_id, answer_type, content) values (16, "Ringo", "I just want to go out and have a good time.");
insert into answers (question_id, answer_type, content) values (16, "John", "I find myself in Vegas getting married by Elvis. I quickly think they're the one.");
insert into answers (question_id, answer_type, content) values (17, "Paul", "It will be because we can't stand it anymore and must be together. My proposal will be hopelessly romantic and memorable.");
insert into answers (question_id, answer_type, content) values (17, "George", "I thought about the ramifications and realize I truly want it.");
insert into answers (question_id, answer_type, content) values (17, "Ringo", "It's going to be a grand gesture, such as on the Dodger's score board or while we're skydiving.");
insert into answers (question_id, answer_type, content) values (17, "John", "It's either because I knocked her up or because I'm on drugs.");
insert into answers (question_id, answer_type, content) values (18, "Paul", "A way to achieve love and affirmation.");
insert into answers (question_id, answer_type, content) values (18, "George", "A way to express myself in a spiritual union with my partner.");
insert into answers (question_id, answer_type, content) values (18, "Ringo", "A fun way to relax and feel good.");
insert into answers (question_id, answer_type, content) values (18, "John", "An intimate expression of love and a way to get me rocks off.");
insert into answers (question_id, answer_type, content) values (19, "Paul", "I'm not willing to cheat because I don't want to be vieweed as that sort of person.");
insert into answers (question_id, answer_type, content) values (19, "George", "It's easier to be monogomous than cheat on my lover. I like to keep my love life simple.");
insert into answers (question_id, answer_type, content) values (19, "Ringo", "If it feels good, do it.");
insert into answers (question_id, answer_type, content) values (19, "John", "If I believe in the relationship, I will be monogomous. But, if I don't truly care, I'm willing to cheat.");
insert into answers (question_id, answer_type, content) values (20, "Paul", "Myself.");
insert into answers (question_id, answer_type, content) values (20, "George", "Egomaniacle jerks and deep sighing.");
insert into answers (question_id, answer_type, content) values (20, "Ringo", "Ex-girlfriends and new girlfriends");
insert into answers (question_id, answer_type, content) values (20, "John", "War and strong women.");
insert into answers (question_id, answer_type, content) values (21, "Paul", "I just love kids and am a dedicated parent.");
insert into answers (question_id, answer_type, content) values (21, "George", "I will love my kids, if I choose to have them. I am likely to see my children as friends when they grow a little older.");
insert into answers (question_id, answer_type, content) values (21, "Ringo", "Kids are fun and an important aspect of my life. However, they should not interfere too much with my marriage and other pursuits.");
insert into answers (question_id, answer_type, content) values (21, "John", "I can be a terrible or amazing parent. If the circumstances are right, I'm a dedicated parent. If forced into parenthood, I can also be distant.");
insert into answers (question_id, answer_type, content) values (22, "Paul", "I love my family deeply, and they support me.");
insert into answers (question_id, answer_type, content) values (22, "George", "They are friends and people who share my interests and beliefs.");
insert into answers (question_id, answer_type, content) values (22, "Ringo", "They bring me joy.");
insert into answers (question_id, answer_type, content) values (22, "John", "They are the only people I can trust and count on in life.");
insert into answers (question_id, answer_type, content) values (23, "Paul", "I'm head of the family. I often plan activities, vacations, and family rules.");
insert into answers (question_id, answer_type, content) values (23, "George", "I am just one member of the family. We share decisions and responsibilities.");
insert into answers (question_id, answer_type, content) values (23, "Ringo", "I'm just here for the beer. I'm happy to let others worry about the Thanksgiving centerpiece or yell at the kids for not washing their hands.");
insert into answers (question_id, answer_type, content) values (23, "John", "Deep down, I feel I'm the head of the family. But if people want to take initiative, that's fine by me.");
insert into answers (question_id, answer_type, content) values (24, "Paul", "Supportive and loving. I got very lucky.");
insert into answers (question_id, answer_type, content) values (24, "George", "Very giving. They gave me a great deal of freedom.");
insert into answers (question_id, answer_type, content) values (24, "Ringo", "They weren't perfect, but my parents did the best they could. I don't blame themm for much.");
insert into answers (question_id, answer_type, content) values (24, "John", "Worried about me. We didn't always get along.");
insert into answers (question_id, answer_type, content) values (25, "Paul", "Travelling all together, possibly in an RV or boat.");
insert into answers (question_id, answer_type, content) values (25, "George", "Seeing nature or culturally significant places.");
insert into answers (question_id, answer_type, content) values (25, "Ringo", "Lying on a beach in the Caribbean.");
insert into answers (question_id, answer_type, content) values (25, "John", "A romantic getaway with just me and my partner.");
insert into answers (question_id, answer_type, content) values (26, "Paul", "Anyone as talented and brilliant as me owes a debt to society.");
insert into answers (question_id, answer_type, content) values (26, "George", "I'm lucky to be literate, fed, and employed. Life could be a lot worse.");
insert into answers (question_id, answer_type, content) values (26, "Ringo", "Honestly, I don't give it a lot of thought. I am what I am.");
insert into answers (question_id, answer_type, content) values (26, "John", "I don't owe the world anything. Life is inherently unfair.");
insert into answers (question_id, answer_type, content) values (27, "Paul", "Stealing is wrong and hurts others.");
insert into answers (question_id, answer_type, content) values (27, "George", "Stealing isn't 100% wrong. If you have to steal formula for a hungry baby, that doesn't make you a bad person.");
insert into answers (question_id, answer_type, content) values (27, "Ringo", "I wouldn't steal; I'd just ask for it, if I could. Stealing is a last resort.");
insert into answers (question_id, answer_type, content) values (27, "John", "Sure. I knick things all the time. Coroporate retailers aren't hurt by petty theft.");
insert into answers (question_id, answer_type, content) values (28, "Paul", "Yes. First of all, they're a terrorist who deserves torture. Second, torturing them will reveal information that will save lives. Not doing so would mean the death of others.");
insert into answers (question_id, answer_type, content) values (28, "George", "If they're only a suspected terrorist, they might also be an innocent person. How can I be sure they really know something about an imminent attack? I'm not 100% sure.");
insert into answers (question_id, answer_type, content) values (28, "Ringo", "Couldn't someone else, like the FBI, handle this?");
insert into answers (question_id, answer_type, content) values (28, "John", "Yes. It might secretly be enjoyable.");
insert into answers (question_id, answer_type, content) values (29, "Paul", "There is an objective right and wrong. For instance, it is wrong to commit murder or rape.");
insert into answers (question_id, answer_type, content) values (29, "George", "They are subjective. Time, culture, and experience play an important role in determining these ideas.");
insert into answers (question_id, answer_type, content) values (29, "Ringo", "I'm not sure. I believe in right and wrong, but I'm not sure they're absolutes.");
insert into answers (question_id, answer_type, content) values (29, "John", "Who knows? These ethical questions are annoyingly pretentious.");
insert into answers (question_id, answer_type, content) values (30, "Paul", "I try not to lie, but sometimes it's unavoidable. Little white lies are okay.");
insert into answers (question_id, answer_type, content) values (30, "George", "Ommission isn't technically lying. I'll lie to save people's feelings and cover my ass at work.");
insert into answers (question_id, answer_type, content) values (30, "Ringo", "Since I often speak off-the-cuff, I rarely tell white lies.");
insert into answers (question_id, answer_type, content) values (30, "John", "I lie all the time. Lying can save other people's feelings and my butt.");
insert into answers (question_id, answer_type, content) values (31, "Paul", "I believe in God and am confident He exists.");
insert into answers (question_id, answer_type, content) values (31, "George", "If there's a God, He or She is more of a higher-power and a set of moral truths.");
insert into answers (question_id, answer_type, content) values (31, "Ringo", "I'm not sure. Part of me hopes there's a God, but I'm not positive.");
insert into answers (question_id, answer_type, content) values (31, "John", "There's no God. Religion is just opium of the masses.");
insert into answers (question_id, answer_type, content) values (32, "Paul", "I see God as a stoic person who created us in His own image. He is upset when we sin.");
insert into answers (question_id, answer_type, content) values (32, "George", "God is more of a force and an idea. I don't see God as a literal person.");
insert into answers (question_id, answer_type, content) values (32, "Ringo", "God is whatever you want them to be.");
insert into answers (question_id, answer_type, content) values (32, "John", "God is very much human. He is imperfect and has positive traits, like humor.");
insert into answers (question_id, answer_type, content) values (33, "Paul", "I am both spirtual and religious.");
insert into answers (question_id, answer_type, content) values (33, "George", "I am spiritual but not religious.");
insert into answers (question_id, answer_type, content) values (33, "Ringo", "I'm somewhat spiritual and somewhat religious.");
insert into answers (question_id, answer_type, content) values (33, "John", "I'm neither spiritual nor religious.");
insert into answers (question_id, answer_type, content) values (34, "Paul", "A fun time. I have many positive memories of church.");
insert into answers (question_id, answer_type, content) values (34, "George", "A mixed memory. I enjoyed the social aspect of church, but couldn't buy into all its rules and rituals.");
insert into answers (question_id, answer_type, content) values (34, "Ringo", "I made it fun, whether through friends or having my own good time.");
insert into answers (question_id, answer_type, content) values (34, "John", "An annoying waste of time my parents dragged me to.");
insert into answers (question_id, answer_type, content) values (35, "Paul", "No, animals don't have souls like humans.");
insert into answers (question_id, answer_type, content) values (35, "George", "Yes or they are reborn.");
insert into answers (question_id, answer_type, content) values (35, "Ringo", "You mean Little Fluffy might not get into Heaven??");
insert into answers (question_id, answer_type, content) values (35, "John", "If there's a heaven, absolutely.");
insert into answers (question_id, answer_type, content) values (36, "Paul", "I like to spend money and sometimes it gets me into trouble.");
insert into answers (question_id, answer_type, content) values (36, "George", "I'm pretty good with money, but I can also justify unnecessary purchases.");
insert into answers (question_id, answer_type, content) values (36, "Ringo", "I'm good with money, but there are times it just seems to fly out of me pocket.");
insert into answers (question_id, answer_type, content) values (36, "John", "I'm very good with money. I'm rarely broke.");
insert into answers (question_id, answer_type, content) values (37, "Paul", "I'm okay because I tend to have a nice reserve.");
insert into answers (question_id, answer_type, content) values (37, "George", "I don't keep track of my finances too closely, but I know I will come out ahead most months.");
insert into answers (question_id, answer_type, content) values (37, "Ringo", "There's a good chance I'll come out a bit short.");
insert into answers (question_id, answer_type, content) values (37, "John", "I can tell you how much I will have left, almost to the penny.");
insert into answers (question_id, answer_type, content) values (38, "Paul", "I like to relax and feel very comfortable on my vacations. I travel in style, which doesn't come cheap.");
insert into answers (question_id, answer_type, content) values (38, "George", "I tend to spend a bit too much on my holidays, but I'm willing to stay in a cheap motel if it gets me where I want to be.");
insert into answers (question_id, answer_type, content) values (38, "Ringo", "Senior Frog's has my photo up behind the bar.");
insert into answers (question_id, answer_type, content) values (38, "John", "Since I live frugally, I can afford most vacations within reason.");
insert into answers (question_id, answer_type, content) values (39, "Paul", "Enjoy some of the money. I deserve a really nice car and a house.");
insert into answers (question_id, answer_type, content) values (39, "George", "Use the money to make myself financially secure, even if it meant not changing my lifestyle for the better.");
insert into answers (question_id, answer_type, content) values (39, "Ringo", "PAR-TY!");
insert into answers (question_id, answer_type, content) values (39, "John", "Never work my crappy job again. See ya, suckers!");
insert into answers (question_id, answer_type, content) values (40, "Paul", "I love nice things, so I bought a nice car. It might have been out of my budget.");
insert into answers (question_id, answer_type, content) values (40, "George", "I bought an inexpensive, yet environmentally friendly, car.");
insert into answers (question_id, answer_type, content) values (40, "Ringo", "It's just a car. I got the best I could afford.");
insert into answers (question_id, answer_type, content) values (40, "John", "I budgeted for my car, and I'm happy with my purchase.");
insert into answers (question_id, answer_type, content) values (41, "Paul", "Large gatherings and parties. In work, I prefer places with a certain amount of regimentation.");
insert into answers (question_id, answer_type, content) values (41, "George", "I try to avoid party settings and prefer intimate gatherings. At work, I prefer to work alone.");
insert into answers (question_id, answer_type, content) values (41, "Ringo", "Parties are good, but so are small groups. At work, I enjoy being part of a team. Especially, if they appreciate me.");
insert into answers (question_id, answer_type, content) values (41, "John", "A group of friends who think I'm clever. In work, I prefer to go at it alone or with a partner.");
insert into answers (question_id, answer_type, content) values (42, "Paul", "Everyone. Friends, parents, coworkers.");
insert into answers (question_id, answer_type, content) values (42, "George", "Only a couple of trusted people. I don't trust everyone with all  the details of my life. I often compartmentalize people for different things.");
insert into answers (question_id, answer_type, content) values (42, "Ringo", "I turn to my very trusted friends. I don't feel that they will judge me.");
insert into answers (question_id, answer_type, content) values (42, "John", "No one at all. Maybe a trusted mother figure.");
insert into answers (question_id, answer_type, content) values (43, "Paul", "Romance novels, photography books, and young adult novels. I'm not a huge reader.");
insert into answers (question_id, answer_type, content) values (43, "George", "Non-fiction and spirituality. I enjoy reading about people and the human condition.");
insert into answers (question_id, answer_type, content) values (43, "Ringo", "Fiction and non-fiction about topics that interest me.");
insert into answers (question_id, answer_type, content) values (43, "John", "Mysteries, thrillers, sci-fi, and anything that is enjoyable. I don't read books to make myself look cool.");
insert into answers (question_id, answer_type, content) values (44, "Paul", "I'm not overly polical. I'm aware of major candidates in elections, but might have a hard time quoting policy.");
insert into answers (question_id, answer_type, content) values (44, "George", "I have a strong interest in politics, but have a pragmatic attitude towards candidates. There's just no way a half-literate actor could become president. (oh, wait...)");
insert into answers (question_id, answer_type, content) values (44, "Ringo", "Sometimes I vote, sometimes I forget. I'm more interested in local politics.");
insert into answers (question_id, answer_type, content) values (44, "John", "I like progressive candidates that don't necessarily represent the mainstream platform. Politically, I focus more on social causes.");
insert into answers (question_id, answer_type, content) values (45, "Paul", "I would never commit suicide. I just couldn't do it.");
insert into answers (question_id, answer_type, content) values (45, "George", "I would have to do it in a painless way.");
insert into answers (question_id, answer_type, content) values (45, "Ringo", "I'd only do it to save my children or if I was terminally ill.");
insert into answers (question_id, answer_type, content) values (45, "John", "I'd take everyone with me.");
