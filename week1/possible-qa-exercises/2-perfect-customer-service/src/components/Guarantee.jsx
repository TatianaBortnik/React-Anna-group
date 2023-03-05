import './Guarantee.css'

function Guarantee({img, title, description}) {
    return (
        <div className='guarantee-item' >
            <div className='guarantee-image'>
                <img src={img} alt={title} />
            </div>
            <h2 className='guarantee-title'>{title}</h2>
            <div className='guarantee-description'>{description}</div>
        </div>
    )
}

export default Guarantee;
