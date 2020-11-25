import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const EstilosItem = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 20px;
        width: 50%;
        border-radius: 10px;
        background-color: white;
        color: black; 
        padding: 30px;
        align-items: flex-start;
      
      .EstilosItem-correo{
        background-color: gray;
        border-radius: 10px;
        width:45%;
        text-transform: uppercase;
        padding: 5px 10px;
      }

      .EstilosItem-nombre{
        margin: 10px 10px;
        font-weight: bold;
      }

      .EstilosItem-cuerpo{
        color: rgb(193, 193, 193);
      }
    `

const Button = styled.button`
        display: inline-block;
        border-radius: 4px;
        background-color: #8E3DDF;
        border: none;
        color: #381061;
        text-align: center;
        font-size: 18px;
        padding: 20px;
        width: 200px;
        cursor: pointer;
        margin: 5px;
    `

const Item = (props) => {
    function handleClick(e) {
        e.preventDefault();
        alert("Ha hecho click")
    }

    return (
        <EstilosItem>
            <div className="EstilosItem-correo">{props.correo}</div>
            <div className="EstilosItem-nombre">{props.nombre}</div>
            <div className="EstilosItem-cuerpo">{props.cuerpo}</div>
            <Button onClick={handleClick}>Haga click aquí</Button>
        </EstilosItem>
    );
}

Item.propTypes = {
    correo: PropTypes.string,
    nombre: PropTypes.string,
    cuerpo: PropTypes.string
};

Item.defaulProps = {
    correo: "correo@correo.com",
    nombre: "un nombre cualquiera",
    cuerpo: "un texto"
};

export default Item;