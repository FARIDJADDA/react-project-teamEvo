import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import AboutPage from "../pages/AboutPage";
import FullNavBar from "../structure/navbar/NavBar";
import NotFound from "../pages/NotFound";
/**
 * @param  {} { partners} represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function RouteList() {
  return (
    <>
      <Router>
        <FullNavBar />
        <Switch>
          <Route exact path={"/"}>
            <Redirect to='/home' />
          </Route>
          <Route exact path={"/home"} children={HomePage} />
          <Route path={"/teams"} children={TeamsPage} />
          <Route path={"/achievements"} children={AchievementsPage} />
          <Route path={"/shop"} children={ShopPage} />
          <Route path={"/tweetDeck"} children={TweetDeckPage} />
          <Route path={"/webTv"} children={WebTvPage} />
          <Route path={"/partners"} children={PartnersPage} />
          <Route exact path={"/about"} children={AboutPage} />
          <Route path={"/about/staff"} children={AboutStaffPage} />
          <Route
            path={"/about/valuesAndVisions"}
            component={AboutValuesAndVisions}
          />
          <Route path={"/about/cdpr"} component={AboutCdpr} />
          <Route path={"/about/legalNotice"} component={AboutLegalNotice} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default RouteList;
