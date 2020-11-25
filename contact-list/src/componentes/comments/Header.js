import React from 'react';
import { Link }  from "react-router-dom";
import styled from "styled-components";



const EstilosHeader = styled.div`
    position: relative;
    background-color: #8D49D3;

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;  
    list-style: none;
    margin-left: 80%;
     
 }
  li{
    padding: 10px;

  }

  a{
    text-decoration: none;
}

`

function Header(){
    return(
      <EstilosHeader>
        <nav>
          <ul className="links">

            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul>
        </nav>
      </EstilosHeader>
    )
}

export default Header;