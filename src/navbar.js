import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  margin: 20px 50px;
  z-index: 15;
  li{
    font-weight: bold;
    padding-right: 6rem;
  }
  @media (max-width: 768px) {
    margin: 0;
    background-color: #1513d5;
    flex-direction: column;
    width: 25%;
    height: 100vh;
    position: fixed;
    transition: all 0.3s linear;
    transform: ${(props) => 
      props.open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    padding-top: 4rem;
    li{
        padding-top: 4rem;
        color: #fff;
    }
  }
`
const navbar = ({ open }) => {
    return (
        
            <Ul open={open}>
                <li>Home</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Blog</li>
            </Ul>
      
    );
};

export default navbar;