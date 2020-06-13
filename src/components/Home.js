import React from 'react';
import Header from '../containers/Header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export default function Home() {
// brief intro to the app
  return (
    <>
      <Header />
        <Container component='main' maxWidth='md'>
          <Grid container direction='column'>
            <Grid item >
              <Typography align='center' variant='h3' display='block' paragraph>
                Which Beatle are you?
              </Typography>
            </Grid>
  
            <Grid item>
              <Typography align='center' variant='h6' display='block' paragraph>
                - Beatleology is a book written by Adam Jaquette and Roger Jaquette -
              </Typography>
            </Grid>
  
            <Grid item>
              <Typography align='justify' display='block' color='textSecondary' paragraph>
                "The tenets of Beatleology are simple: We all have an Inner Beatle guiding our destiny and governing our behavior. Forget Leo or Taurus. This book teaches us that it’s more accurate to say, “I’m a John” or “I’m a Ringo.” A simple personality test determines who your Inner Beatle is and how you will interact with the other Johns, Pauls, Georges, and Ringos of the world—at home, at work, and on the street. Written in the spirit of our favorite “cheeky lads from Liverpool,” This guide is pop psychology with a twist—and a dash of Sgt. Pepper."
              </Typography>
            </Grid>
  
            <Grid item>
              <Typography align='center' variant='h6' display='block' paragraph>
                - My Objective -
              </Typography>
            </Grid>
  
            <Grid item>
              <Typography align='justify' display='block' paragraph>
                The primary focus of this project was back-end development. I wanted to work with JSON Web Tokens and troubleshoot authentication and authorization. Ultimately, I found a solution for HTTP applications, but there are still vulnerabilities within this project. This project continues to be a challenging learning experience as I pursue solutions for stronger security within web-based applications.
              </Typography>
            </Grid>

            <Grid item>
              <Typography align='justify' display='block' paragraph>
                  If you decide to signup and test the login, please use unique passwords and emails. Again, this project is a way for me to learn and experiement with application security. While certainly not my intention, it's best to assume that the information you provide is exposed to third-parties. For this reason, I am not verifying email addresses. All passwords are stored in the database as hashed versions using JWT.
              </Typography>
            </Grid>

            <Grid item>
              <Typography align='justify' display='block' paragraph>
                The idea behind using Beatleology is to help others identify their inner Beatle with a simple quiz. I do not own any of the material in the quiz. I simply organized it as a side project to practice my own coding skills. Please enjoy! If you find this app amusing, please support the authors by purchasing a copy of their book. They provide much more insight and information that's waiting for you to discover.
              </Typography>
            </Grid>
          </Grid>
  
            <Grid container>
              <Grid item xs={6}>
                <Typography display='block' paragraph>
                  <b>Front-end:</b><br /> React, Redux, Material-UI
                </Typography>
              </Grid>
    
              <Grid item xs={6}>
                <Typography align='right' display='block' paragraph>
                  <b>Back-end:</b><br /> Express.js, JWT
                </Typography>
              </Grid>
    
              <Grid item xs={12}>
                <Typography align='center' display='block' paragraph>
                  <Link href='https://github.com/grantkee/beatleology-redux' underline='hover' color='inherit' style={{cursor: 'pointer'}}><i>Source Code</i></Link>
                </Typography>
              </Grid>
            </Grid>
        </Container>
    </>
  );
};