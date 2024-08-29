import './App.css'
import { useState } from 'react';

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = ["anjali"];

  return Person();
  // (
  //   <div>
  //     <h1>Animals: </h1>
  //     <List animals={animals} />
  //   </div>
  // );
}
export default App

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  function handleChange1(e) {
    setFirst(e.target.value);
  }

  function handleChange2(e) {
    setSecond(e.target.value);
  }

  return (
    <>
      <Input label="First name" onChange={handleChange1}/>
      <Input label="Second name" onChange={handleChange2}/>
      <h1>{first+"" +second}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}


function Input({ label, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        onChange={onChange}
      />
    </label>
  );
}