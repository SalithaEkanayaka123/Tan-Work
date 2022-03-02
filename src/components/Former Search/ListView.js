import React from 'react'

function ListView() {
    return (
        <div class="flex flex-col container max-w-3xl mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
            <ul class="flex flex-col divide-y w-full">
                <li class="flex flex-row">
                    <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                        {/* <div class="flex w-20 h-10 justify-center items-center mr-4">
                            <div class="font-medium dark:text-white">John Parker</div>
                        </div> */}
                        <div class="pl-10 flex gap-8 justify-center items-center ">
                            <div class="text-gray-600 font-bold dark:text-gray-200 text-sm mr-20">Name of the Farmer</div>
                            <div class="text-gray-600 font-bold dark:text-gray-200 text-sm mr-20">Location</div>
                            <div class="text-gray-600 font-bold dark:text-gray-200 text-sm mr-5">Crop</div>
                        </div>

                    </div>
                </li>
                <li class="flex flex-row">
                    <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                        {/* <div class="flex w-20 h-10 justify-center items-center mr-4">
                            <div class="font-medium dark:text-white">John Parker</div>
                        </div> */}
                        <div class="pl-10 flex gap-8 justify-center items-center ">
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">John Parker</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">Location of the farmer</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-5">Crop he Used</div>
                        </div>

                    </div>
                </li>
                <li class="flex flex-row">
                    <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                        {/* <div class="flex w-20 h-10 justify-center items-center mr-4">
                            <div class="font-medium dark:text-white">John Parker</div>
                        </div> */}
                        <div class="pl-10 flex gap-8 justify-center items-center ">
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">John Parker</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">Location of the farmer</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-5">Crop he Used</div>
                        </div>

                    </div>
                </li>
                <li class="flex flex-row">
                    <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                        {/* <div class="flex w-20 h-10 justify-center items-center mr-4">
                            <div class="font-medium dark:text-white">John Parker</div>
                        </div> */}
                        <div class="pl-10 flex gap-8 justify-center items-center ">
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">John Parker</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-20">Location of the farmer</div>
                            <div class="text-gray-600 dark:text-gray-200 text-sm mr-5">Crop he Used</div>
                        </div>

                    </div>
                </li>

            </ul>
        </div>
    )
}

export default ListView