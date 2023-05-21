import { useState } from 'react'

const Button = ({handleClick, text}) =>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Feedback = ({addGood, addNeutral, addBad}) => {
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text='good'/>
      <Button handleClick={addNeutral} text='neutral'/>
      <Button handleClick={addBad} text='bad'/>
    </div>
  )
}

const StatisticLine = ({value, text, additionalText}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {additionalText}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine value={good} text='good'/>
          <StatisticLine value={neutral} text='neutral'/>
          <StatisticLine value={bad} text='bad'/>
          <StatisticLine value={all} text='all'/>
          <StatisticLine value={average} text='average' additionalText='%'/>
          <StatisticLine value={positive} text='positive'/>
          </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const addGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedAll = (bad + neutral + updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood-bad)/updatedAll)
    setPositive(updatedGood/updatedAll)
  }
  const addNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral + 1)
    const updatedAll = (bad + updatedNeutral + good)
    setAll(updatedAll)
    setAverage((good-bad)/updatedAll)
    setPositive(good/updatedAll)
  }
  const addBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = (updatedBad + neutral + good)
    setAll(updatedAll)
    setAverage((good-updatedBad)/updatedAll)
    setPositive(good/updatedAll)
  }

  return (
    <div>
      <Feedback addGood={addGood} addNeutral={addNeutral} addBad={addBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App