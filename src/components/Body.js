import React from 'react'
import Compoenent3 from './Compoenent3'
import Component2 from './Component2'
import Component4 from './Component4'
import Line from './Line'
import SubscribeComponent from './SubscribeComponent'

function Body() {
    return (
        <div>
            <SubscribeComponent />
            <Line />
            <Component2 />
            <Compoenent3 />
            <Compoenent3 />
            <Component4 />
        </div>
    )
}

export default Body