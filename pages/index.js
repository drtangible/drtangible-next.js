import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import verticalAlign from '../css/verticalAlign'
import { RandomCircles } from '../components/RandomCircles'
import { IconLink } from '../components/IconLink'

export default () => (
  <div className={style}>
    <Head>
      <link href='http://fonts.googleapis.com/css?family=Domine|Alegreya+Sans|Montserrat' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
      <title>Dan Gilbert, a Chicago web dude.</title>

      <style>{`
        body { 
          background: #E14337;
          height: 100%;
          width: 100%;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          color: white;
        }
      `}</style>      
    </Head>

    <div className="container">
      <div className="content" {...verticalAlign}>
        <h1>Howdy. I'm Dan.</h1>

        <h2>I live in Chicago, build apps and eat tacos.</h2>

        <div className='social'>
          <IconLink icon="twitter" href="http://twitter.com/drtangible" />
          <IconLink icon="linkedin-square" href="http://linkedin.com/in/drtangible" />
          <IconLink icon="github" href="http://github.com/drtangible" />
          <IconLink icon="instagram" href="http://instagram.com/drtangible" />
          <IconLink icon="taco" href="http://www.yelp.com/biz/taqueria-traspasada-chicago-2" />
        </div>
      </div>
    </div>

    <RandomCircles numberToDisplayOnMount={50} frequency={0.8} />
  </div>
);

const style = css({
  '& .container': {
    height: '100vh',
  },

  '& .content': {
    padding: '4em',
    background: 'rgba(255, 255, 255, 0.25)',
  },

  '& h1': {
    fontSize: '4em',
    opacity: '0.9',
    fontWeight: '900',
    letterSpacing: '-2px',
    lineHeight: '1.5',
  },

  '& h2': {
    fontSize: '1.7em',
    lineHeight: '1.5',
    fontWeight: '100',
    letterSpacing: '-1px',
  },

  '& .social': {
    paddingTop: '2em',
  },

  '@media (max-width: 600px)': {
    '& h1': {
      fontSize: '3em',
    },

    '& h2': {
      fontSize: '1.5em',
    },
  },

});