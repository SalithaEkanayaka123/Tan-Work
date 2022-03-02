import React from 'react'

function SubscribeComponent() {
    return (
        <div class="p-10 h-30 grid grid-cols-2 gap-8 justify-center align-middle">
            <div>Subscribe to our newsletter</div>
            <div>
                <div class="grid grid-cols-2 gap-4 justify-center align-middle">
                    <div className=''>
                        <div class="mb-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"

                                id="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-40 rounded focus:outline-none focus:shadow-outline" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubscribeComponent