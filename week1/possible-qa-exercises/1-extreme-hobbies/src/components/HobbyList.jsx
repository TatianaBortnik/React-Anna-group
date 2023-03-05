import Hobby from "./Hobby"
const HobbyList = () => {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]
    return (
        <ul>
            { hobbies.map(item => <Hobby key={item} hobby={item} />)}
        </ul>
    )
}

export default HobbyList;