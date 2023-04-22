import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Row>
                <Col>
                    <LeftNav></LeftNav>
                </Col>
                <Col xs={6}>middler</Col>
                <Col>
                    <RightNav ></RightNav>
                </Col>
            </Row>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;