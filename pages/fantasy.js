import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import LeaderBoard from "./components/LeaderBoard";
import NextLink from "next/link";
import axios from "axios";
import cheerio from "cheerio";

export default function Fantasy(props) {
  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <Link>
          <NextLink href="/">
            <a>Back to Main LeaderBoard</a>
          </NextLink>
        </Link>
      </Box>

      <Box my={4}>
        <LeaderBoard players={props.players} lastScraped={props.lastScraped} />
      </Box>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://www.iplt20.com/stats/2021/player-points"
  );
  const $ = cheerio.load(data);

  let players = [];

  const playerRows = $(".top-players .js-row").toArray();

  playerRows && playerRows.forEach((playerR) => {
    const playerEl = $(playerR).find(".top-players__player-name");
    let name = playerEl && playerEl.text().trim();
    name = name && name.replace(/(\s+)/g, " ");
    const points =
      $(playerR) && $(playerR).find(".top-players__pts").text().trim();
    players.push({
      name,
      points,
    });
  });

  console.log(players);
  const lastScraped = new Date().toISOString();
  return {
    props: { players, lastScraped },
  };
}
