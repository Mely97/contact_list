import React from "react";
import Item from "./Item";

class Lista extends React.Component {
    constructor() {
      super();
      this.state = {
        comments:[
            {
                postId: 1,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
        ]
      };
    }
  
    componentDidMount() { //Cuando el componente se carga por primera vez
      fetch('https://jsonplaceholder.typicode.com/comments') 
        .then((response) => response.json())
        .then((data) => this.setState({ comments: data })); //This.set metodo que me permite cambiar el State
    }
  
    render() { //Cargar la página
      console.log("State", this.state.comments); //Verifica lo que me esta trayendo mi state
      return (
        <React.Fragment> {/*Este elemento es u contenedor y se utiliza cuando no se va a usar como contenedor padre para aplicar estilos flexbox*/}
          {this.state.comments.map((comentario)=>{
            const {email, name, body } = comentario; {/* Desestructuración*/}
            {/* const email = comentario.email  El hacer estas tres lineas equivale a lo que tengo en la linea anterior*/}
            {/* const name = comentario.name*/ }
            {/* const body = comentario.body*/ }
            return(
                <Item 
                    correo={email}
                    nombre={name}
                    cuerpo={body}>
                </Item>
            )
          })}
          
        </React.Fragment>
      );
    }
  }
  
    
  export default Lista;