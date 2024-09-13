


const PeopleTableHead =() =>(
    <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Age</th>
            </tr>
        </thead>
)

const PeopleTableRow =({firstname, lastname,age})=> (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age?? "/"}</td>
        </tr>
    )
        
    



const PeopleTable= ({peopleArray = []}) =>{
    
    const peopleJSX = peopleArray.map(person => <PeopleTableRow {...person} key={person.id}/>)
    


    return (

        <table>
            <PeopleTableHead/>
            <tbody>
               {peopleJSX}
            </tbody>
        </table>

    )
}

export default PeopleTable