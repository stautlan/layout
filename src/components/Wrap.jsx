import React from 'react'
import CardsView from './CardsView'
import ListView from './ListView'

const Wrap = ({index, products}) => {
    console.log("Wrap index: "+index)
    switch(index) {
        case 0:
            return <CardsView items={products} />
        case 1:
            return <ListView items={products} />
        default:
    }
}

export default Wrap