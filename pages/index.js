import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import LeaderBoard from './components/LeaderBoard';

import cheerio from 'cheerio'
import axios from 'axios'

export default function Index(props) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <LeaderBoard players={props.players} lastScraped={props.lastScraped} />
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("https://www.iplt20.com/stats/2021/player-points");
  const $ = cheerio.load(data);

  let players = []

  const playerRows = $(".top-players .js-row").toArray()
  
  playerRows.forEach(playerR => {
    let name = $(playerR).find('.top-players__player-name').text().trim();
    name = name.replace(/(\s+)/g, ' ')
    const points = $(playerR).find('.top-players__pts').text().trim();
    players.push({
      name,
      points
    })
  })
  
  console.log(players)
  const lastScraped = new Date().toISOString();
  return {
    props: { players, lastScraped }
  };
}