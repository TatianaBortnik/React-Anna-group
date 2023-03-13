export default function Person({person}) {
    if (person) {
        const {first_name, last_name, email, phone} = person
        return (
            <ul>
                <li>{`First name: ${first_name}`}</li>
                <li>{`Last name: ${last_name}`}</li>
                <li>{`Email: ${email}`}</li>
                <li>{`Phone: ${phone}`}</li>
            </ul>
        )
    }
        
    return;

}