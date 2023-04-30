import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view , rating} = news
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex align-items-center gap-4'>
                <Image style={{ width: "44px" }} src={author?.img} roundedCircle />
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p className='mb-0'>{author?.published_date}</p>
                </div>
                <div>
                    <FaRegBookmark className='mx-3'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title><h4>{title}</h4></Card.Title>
                <Card.Img src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer  className='d-flex '>
                <div className='flex-grow-1'>
                    <Rating
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                </div>
                <div className='d-flex align-items-center '>
                    <FaEye></FaEye> <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;