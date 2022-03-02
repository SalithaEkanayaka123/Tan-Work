import React from 'react'
import Navbar from '../Navbar'

function Header() {
    return (
        <div style={{
            height: '22vw',
            backgroundImage: `url("https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg")`
            , backgroundColor: 'green'
        }}
        >
            <Navbar />
            <div className='align-middle h-full grid'>
                <h1 className='m-auto text-3xl' style={{ color: 'white' }}>FARMER SEARCH </h1>
            </div>


        </div>
    )
}

export default Header