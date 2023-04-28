import React from 'react';
import Header from '../pages/Shared/Header';
import { Button, Card, Col, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa';

const NewsContent = () => {
    const newsData = useLoaderData()
    const { _id, title, image_url, details, category_id } = newsData
    console.log(_id);
    return (
        <div>
            <Header></Header>
            <Row>
                <Col xs={9}>
                    <Card>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <Link to={`/category/${category_id}`}><Button> <FaArrowLeft></FaArrowLeft> Show All News In This Category</Button></Link>
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