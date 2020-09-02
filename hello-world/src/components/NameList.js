import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Dorathy', 'Laycon', 'Erica', 'Dorathy']
    const persons = [
        {
            name: "Dorathy",
            age: 0,
            id: 0,
            skill: "HTML",
          },
          {
            name: "Laycon",
            age: 21,
            id: 1,
            skill: "CSS",
          },
          {
            name: "Erica",
            age: 32,
            id: 2,
            skill: "JS",
          },
        ]
      
    // const names = ['Innocent', 'Js Lord', 'Thrive']
    // const personList = persons.map(person => (
    //     <Person key={person.id} person ={person} />
    // )) 
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
    <div>{nameList}</div>
    )
}

export default NameList
