import React from 'react'
import Person from './Person'
const List = ( { people } ) => {
    let peopleList = people.map( person => <Person key={person.id} {...person} /> )
    return (
        <section>
            {peopleList}
        </section>
    )
}

export default List
