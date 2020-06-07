import React from 'react';
import Header from '../containers/Header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Home() {

  return (
    <>
      <Header />
        <Container component='main' maxWidth='md'>
          <Typography align='center' variant='h3' display='block' paragraph>
            Which Beatle are you?
          </Typography>

          <Typography align='center' variant='h6' display='block' paragraph>
            - Beatleology is a book written by Adam Jaquette and Roger Jaquette -
          </Typography>

          <Typography align='center' display='block' color='textSecondary' paragraph>
            "The tenets of Beatleology are simple: We all have an Inner Beatle guiding our destiny and governing our behavior. Forget Leo or Taurus. This book teaches us that it’s more accurate to say, “I’m a John” or “I’m a Ringo.” A simple personality test determines who your Inner Beatle is and how you will interact with the other Johns, Pauls, Georges, and Ringos of the world—at home, at work, and on the street. Written in the spirit of our favorite “cheeky lads from Liverpool,” This guide is pop psychology with a twist—and a dash of Sgt. Pepper."
          </Typography>

          <Typography align='center' variant='h6' display='block' paragraph>
            - My Objective -
          </Typography>

          <Typography align='center' display='block' paragraph>
            The primary focus of this project was back-end development. I wanted to work with JSON Web Tokens and troubleshoot authentication and authorization. Ultimately, I found a solution for HTTP applications, but there are still vulnerabilities within this project. This project continues to be a challenging learning experience as I pursue solutions for stronger security within web-based applications.

            If you decide to signup and test the login, please use unique passwords and emails. Again, this project is a way for me to learn and experiement with application security. While certainly not my intention, it's best to assume that the information you provide is exposed to third-parties. For this reason, I am not verifying email addresses. All passwords are stored in the database as hashed versions using JWT.

            The idea behind using Beatleology is to help others identify their inner Beatle with a simple quiz. I do not own any of the material in the quiz. I simply organized it as a side project to practice my own coding skills. Please enjoy! If you find this app amusing, please support the authors by purchasing a copy of their book. They provide much more insight and information that's waiting for you to discover.
          </Typography>

          <Typography align='center' display='block' paragraph>
            <b>Front-end:</b><br /> React, Redux, Material-UI
          </Typography>

          <Typography align='center' display='block' paragraph>
            <b>Back-end:</b><br /> Express.js, JWT
          </Typography>

          <Typography align='center' display='block' >
            <Link href='https://github.com/grantkee/beatleology-redux' underline='hover' color='inherit' style={{cursor: 'pointer'}}>Source Code</Link>
          </Typography>
        </Container>
    </>
  );
};