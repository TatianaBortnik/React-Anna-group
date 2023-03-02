import './Guarantee.css'

const Guarantee = (props) => {
    return (
        <div className='guarantee-item' key={props.id}>
            <div className='guarantee-image'>
                <img  src={props.img} alt={`${props.title} image`}/>
            </div>
            <h2 className='guarantee-title'>{props.title}</h2>
            <div className='guarantee-description'>{props.description}</div>
        </div>
    )
}

const Guarantees = (props) => {
    return (
        <div className='guarantees'>
            {props.map(item => Guarantee(item))}
        </div>
    )
}

export default Guarantees