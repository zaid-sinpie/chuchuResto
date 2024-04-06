import { useEffect, useState } from 'react'
import dish1 from '../assets/dish1.jpg'
import dish2 from '../assets/dish2.jpg'

export default function Dish({id}){
    const [currImage, setImage] = useState(dish1);
    useEffect(()=>{
        if (id === 'dish1'){
            setImage(dish1)
        } 
        if (id === 'dish2'){
            setImage(dish2)
        }
    },[])
    
    return(
        <figure id={id} className="dish">
            <img src={currImage} alt="" className='dish-img'/>
        </figure>
    )
}