import React from "react";
import styled from "styled-components";
import Lista from "./Lista";


const EstiloPrincipal = styled.div`
    background-color:black;
    padding: 30px;
    h1{
     color: white;
     font-size: 60px;
    }
   `

const Comments = () => {
  return (
    <EstiloPrincipal>
      <h1>Comments List</h1>
      <Lista></Lista>
    </EstiloPrincipal>

  );
}

export default Comments;