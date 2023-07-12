import React, { useState } from 'react'
import CardsView from './CardsView'
import ListView from './ListView'
import IconSwitch from './IconSwitch'
import { products } from '../data/data'

const Wrap = () => {
    const [data, setData] = useState(products);
    const [index, setIndex] = useState('view_module')

    const handlerSwitch = () => {
        console.log(index);
        index === 'view_list' ? setIndex('view_module') : setIndex('view_list');
    }

    return (
        <>
            <IconSwitch icon={index} onSwitch={handlerSwitch} />
            {index === 'view_list' ? (
                <ListView items={data} />
            ) : (
                <CardsView items={data} />
            )}
        </>
    )
}

export default Wrap