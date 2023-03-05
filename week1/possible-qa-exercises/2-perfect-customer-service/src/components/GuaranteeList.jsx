import guaranteesData from '../data/guarantee';
import Guarantee from './Guarantee';

function GuaranteeList() {
    return (
        <div className='guarantees'>
            {guaranteesData.map(item => 
                <Guarantee key={item.id} img={item.img} title={item.title} description={item.description} /> )}        
        </div>
    )
}

export default GuaranteeList;