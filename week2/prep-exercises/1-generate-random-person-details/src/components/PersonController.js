import { useState, useEffect } from 'react';
import ButtonNewPerson from './ButtonNewPerson';
import Person from "./Person";

export default function PersonController() {
    const [person, setPerson] = useState()
    const [btnClick, setBtnClick] = useState()

    useEffect(() => {
        (async () => { getPerson() })();
    }, [btnClick])

    function getPerson() {
        // const response = await fetch('https://www.randomuser.me/api?results=1');
        // const data = await response.json();
        // setPerson(data);
        fetch('https://www.randomuser.me/api?results=1')
            .then((response) => response.json())
            .then((response) => {
                let person = {}
                if (response) {
                    let data = response.results[0];
                    person = {
                        first_name: data.name.first,
                        last_name: data.name.last,
                        email: data.email,
                        phone: data.phone
                    }
                }
                setPerson(person)
            })
    }

    return (
        <>
            <ButtonNewPerson onClick={setBtnClick} />
            <Person person={person} />
        </>
    )

}