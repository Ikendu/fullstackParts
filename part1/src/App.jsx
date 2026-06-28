import Counter from './Counter.jsx'
const Header = (props) =>{
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.parts[0]?.name} {props.parts[0].exercises}
        </p>
        <p>
          {props.parts[1].name} {props.parts[1].exercises}
        </p>
         <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
      </div>
    )
  }

  const Total = (props)=>{
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
    )
  }

const App = () => {

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

const course = 'Half Stack application development'
  const parts = [
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

  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Counter />
    </div>
  ) 
      
}

export default App