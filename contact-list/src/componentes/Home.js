import welcome from '../imagenes/welcome.jpg'
import styled from "styled-components";

const Welcome = styled.div`
      width: 100%;
    
      .Home-img{
          width: 100%;
      }
      `


function Home() {
    return (
      <Welcome >
        <img src={welcome} alt="welcome" className="Home-img"/>
      </Welcome>
    );
  }

export default Home;