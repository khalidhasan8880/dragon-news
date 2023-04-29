import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';

import { Col, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Row>
                <Col>
                    <LeftNav></LeftNav>
                </Col>
                <Col xs={6}>
                    <h1 className='text-center bg-danger'>Middler</h1>
                    <Outlet></Outlet>
                </Col>
                <Col>
                    <RightNav ></RightNav>
                </Col>
            </Row>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;