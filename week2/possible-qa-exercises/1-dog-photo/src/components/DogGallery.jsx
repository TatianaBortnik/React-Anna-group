import { useState } from "react"
import Button from "./Button"
import DogPhoto from "./DogPhoto"
import './DogGallery.css'

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([])

    function getDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setDogPhotos([...dogPhotos, data.message])
            })
    }
    
    return (
        <>
            <Button onClick={getDogPhoto} />
            {console.log(dogPhotos)}
            <div className="dog-photos">
                {dogPhotos.map((photo, index) => {
                    return <DogPhoto className="dog-photo" key={index} photo_url={photo} />
                })
                }
            </div>
        </>
    )
}

export default DogGallery;