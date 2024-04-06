import styled from "styled-components"
import { NumberSelector } from "./NumberSelector"
import { TotalScore } from "./TotalScore"
import { RollDice } from "./RollDice"
import { useState } from "react"
// import { GenrateRandomNumber } from ""

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")

  const GenrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return
    }
    setError("")

    const randomNumber = GenrateRandomNumber(1, 7)
    setCurrentDice(() => randomNumber)

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
      />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding: 50px;
        .top_section{
          display: flex;
          justify-content: space-between;
          align-items: center;
}
`