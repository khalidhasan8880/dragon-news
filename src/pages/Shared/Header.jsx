import React, { useContext } from 'react';
import { Image} from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import NavigationBar from './NavigationBar';
const Header = () => {
    const {user}=useContext(AuthContext)

    
    return (
        <div className='mb-5'>
            <div className='text-center mb-3'>
                <img src={logo} alt="" />
                <p className='my-3'><small>Journalism Without Fear or Favour</small></p>
                <p className='my-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <button className='btn btn-danger my-3'> Latest</button>
                <Marquee speed={66}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Header;