import styled from "styled-components"

const StartGame = ({ toggle }) => {
  return <Container>
    <div>
      <img src="/images/dices.png" alt="dice" />
    </div>

    <div className="content">
      <h1 className="dice-text">Dice Game</h1>
      <Button onClick={toggle}>Play Now</Button>
    </div>
  </Container>
}

StartGame.propTypes = {
  toggle: Function
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

@media (max-width: 768px){
    height: 40vh;
}

.content {
    justify-content: space-between;

    h1{
        font-size: 96px;
        white-space: nowrap;
        @media (max-width: 768px){
font-size: 40px;
margin-top: 40px;
        }
      }
}
@media (max-width: 768px) {
  flex-direction: column;
  /* min-height: 400px; */

  
  img{
    /* margin: auto 20px; */
    margin-left: 20px;
    margin-top: 50px;
    height: 240px;
  }
  h1{
    width: 60px;
    /* height: 60px; */
    /* font: 100; */
    font-size: 20px;
  }
  }
`
const Button = styled.button`
     color: white;
    padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  align-items: end;
  transition: 0.3s background ease;


  &:hover{
    background-color: #5e5d5d;
    transition: 0.3s background ease;
  }

  @media (max-width: 768px){
    justify-content: center;
    padding: 8px 8px;
    min-width: 200px;
   margin-top:5px;
  }
`