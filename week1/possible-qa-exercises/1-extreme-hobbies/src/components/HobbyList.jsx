
const Hobby = (props) => {
    return (
        <li key={props.hobby}>{props.hobby}</li> 
    )
}


const HobbyList = () => {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]
    return (
        <ul>
            {hobbies.map(hobby => Hobby({hobby}))}
        </ul>
    )
}

export default HobbyList;