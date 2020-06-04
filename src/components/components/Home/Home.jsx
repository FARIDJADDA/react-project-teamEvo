import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector} from "react-redux"
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import HomeContent from "./HomeContent";

const Home = () => {
   const home = useSelector((state) => state.home);
   const [page, setPage] = React.useState(1);
   const homeData = home.filter((version) => version.page === page);

  const handleClickDown = () => {
    if (page !== 2) {
      setPage(2)
    }
  }
  const handleClickUp = () => {
    if (page !== 1) {
      setPage(1)
    }
  }

  return (
    <>
      <Container fluid dark>
        <Row>
          <Col md='6' lg='6'>
          {homeData.map((data) => {
            return <HomeContent homeData={data}/>
          })}
          </Col>
          <Col fluid md='9' lg='9'>
            <div>
              <div className='test0'></div>
            </div>
            <div>
              <div className='test1'></div>
            </div>
            <div>
              <div className='test2'></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='sideBar list-group' id='sidebar'>
        <div onClick={handleClickUp}>
          <FontAwesomeIcon icon={faArrowCircleUp} color='white' />
        </div>
          <FontAwesomeIcon icon={faCircle} color='white' />
          <FontAwesomeIcon icon={faCircle} color='white' />
        <div onClick={handleClickDown}>
          <FontAwesomeIcon icon={faArrowCircleDown} color='white' />
        </div>
      </div>
    </>
  );
};

export default Home;
