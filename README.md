## IPL Fantasy Leaderboard For My Friend Group

Wrote a quick scraper and a simple points leaderboard

Applying fantasy points to the entire IPL tournament instead of one match.

* Before the start of the IPL, we conduct an auction and pick our squads (These are hardcoded in the code for now)
* Whenever you open this website, we scrape the iplt20 points page, and do the calculations
* Leaderboard is displayed with the person with the highest score on top
* There can be some drama in the group chat based on the leaderboard.

### TODO
* Add a feature to conduct auctions on this website
* Remove the hardcoding and make it configurable
* Implement login
* Better UI & UX
* Caching for the points instead of scraping on every page visit
