import React from 'react';
import Header from '../pages/Shared/Header';
import { Col, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav';
import { useLoaderData } from 'react-router-dom';

const NewsContent = () => {
    const news = useLoaderData()
    const { _id, title, image_url, details, author, total_view, rating } = news
    return (
        <div>
            <Header></Header>
            <Row>
                <Col xs={9}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <RightNav ></RightNav>
                </Col>
            </Row>
        </div>
    );
};

export default NewsContent;