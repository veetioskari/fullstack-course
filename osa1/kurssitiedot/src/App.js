const Header = (props) => {
  return(
    <h1>{props.content['name']}</h1>
  )
}

const Content = (props) => {
  const parts = props.content['parts']

  return (
    <div>
      {parts.map((array, index) => (
        <p key={index}>{array['name']} {array['exercises']}</p>
      ))}
    </div>
  )
}


const Footer = (props) => {
  const parts = props.content['parts']
  let totalExercises = 0
  parts.forEach(value => (
    totalExercises += value.exercises
  ))
  return(
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header content={course}/>
      <Content content={course}/>
      <Footer content={course}/>
    </div>
  )
}

export default App