import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TeamsPage from "../pages/TeamsPage";
import AchievementsPage from "../pages/AchievementsPage";
import ShopPage from "../pages/ShopPage";
import TweetDeckPage from "../pages/TweetDeckPage";
import WebTvPage from "../pages/WebTvPage";
import PartnersPage from "../pages/PartnersPage";
import AboutStaffPage from "./../pages/AboutStaffPage";
import AboutValuesAndVisions from "./../pages/AboutValuesAndVisions";
import AboutCdpr from "./../pages/AboutCdpr";
import AboutLegalNotice from "./../pages/AboutLegalNotice";
import AboutPage from "../pages/AboutPage"
/**
 * @param  {} { partners} represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function RouteList() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/teams"} component={TeamsPage} />
          <Route path={"/achievements"} component={AchievementsPage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/tweetDeck"} component={TweetDeckPage} />
          <Route path={"/webTv"} component={WebTvPage} />
          <Route path={"/partners"} component={PartnersPage} />
          <Route exact path={"/about"} component={AboutPage} />
          <Route path={"/about/staff"} component={AboutStaffPage} />
          <Route
            path={"/about/valuesAndVisions"}
            component={AboutValuesAndVisions}
          />
          <Route path={"/about/cdpr"} component={AboutCdpr} />
          <Route path={"/about/legalNotice"} component={AboutLegalNotice} />
        </Switch>
      </Router>
    </>
  );
}

export default RouteList;
