import React, { useContext } from 'react';
import { Image} from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {user}=useContext(AuthContext)

    
    return (
        <div>
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
        </div>
    );
};

export default Header;