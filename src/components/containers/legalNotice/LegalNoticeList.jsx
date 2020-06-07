import { useSelector } from "react-redux";
import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../../components/legalNotice/HeaderComponent";
import ItemList from "../../components/legalNotice/ItemList";
import "../../components/legalNotice/style.css";
import WaitData from "../../components/Spinner/WaitData";

const LegalNoticeList = () => {
  const data = useSelector((state) => state.legal);

  if (!data.length) {
    return <WaitData />;
  }
  return (
    <>
      <Container fluid className='legal'>
        <HeaderComponent title='Legal Notice' />
        <ItemList data={data} />
      </Container>
    </>
  );
};

export default LegalNoticeList;
