import React, { useState } from 'react'
import Compoenent5 from './compoenent5'
import GridView from './GridView'
import ListView from './ListView'

function Body() {

    const [condition, setCondition] = useState(true);
    return (
        <div>
            <Compoenent5 condition={condition} setCondition={setCondition} />
            {condition === true ? <ListView /> : <GridView />}
            {/* <ListView /> */}
            {/* <GridView /> */}
        </div>

    )
}

export default Body