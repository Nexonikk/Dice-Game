// import { useState } from "react";
import styled from "styled-components";


export const RollDice = ({ currentDice, rollDice }) => {
    const reloadWindow = () => {
        window.location.reload()
    }

    return (
        <DiceContainer>
            <div onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice 1" />
            </div>
            <p>Click on dice to roll</p>
            <button onClick={reloadWindow}>Reset Game</button>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
 display: flex;
 /* justify-content: center ; */
 margin-top: 48px;
 flex-direction: column;
 align-items: center;
 p{
    font-size: 28px;
 }

 button{
    color: white;
    padding: 10px 10px;
  background-color: #000000;
  border-radius: 5px;
  transition: 0.3s background ease;


  &:hover{
    background-color: #ffffff;
    color: #000000;
    transition: 0.3s background ease;
  }

 }`
