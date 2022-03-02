import React from 'react'

function Compoenent3() {
    return (
        <div class="p-10 grid grid-cols-3 gap-4">
            <div class="bg-red-300 ..."></div>
            <div class=" col-span-2 ...">
                <div class="grid grid-rows-2 gap-4">
                    <div class="bg-green-50 h-20 ..." style={{ width: '40vw' }}> 1</div>
                    <div class="bg-black h-20  ..." style={{ width: '40vw' }}> 2</div>

                </div>
            </div>
        </div>
    )
}

export default Compoenent3