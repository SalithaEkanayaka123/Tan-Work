import React from 'react'

function compoenent5(props) {
    return (
        <div class="pl-40 pr-10 py-10 grid grid-cols-3 gap-4">
            <div class="col-span-2 ...">
                <div class="grid grid-cols-2 gap-4">
                    <div class="...">
                        <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
                            style={{ marginLeft: 'auto', marginRight: 0 }}
                            class="text-black bg-white w-52 hover:bg-blue-800 border-2 border-green-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                            Drop Type <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid ...">
                        <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"

                            class="text-black bg-white w-52 hover:bg-blue-800 border-2 border-green-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                            Location <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" ...">
                <div class="grid grid-cols-2 gap-4">
                    <div class=" ...">
                        <button
                            class="bg-red-300 border-2 hover:bg-blue-700 rounded-[20px] text-black font-bold h-10 w-40 rounded focus:outline-none focus:shadow-outline m-auto" type="button"
                            onClick={
                                () => {
                                    props.setCondition(false)
                                }
                            }>
                            Grid View
                        </button>
                    </div>
                    <div class=" ...">
                        <button
                            onClick={
                                () => {
                                    props.setCondition(true)
                                }
                            }
                            class="bg-green-100 border-2 hover:bg-blue-700 rounded-[20px] text-black font-bold h-10 w-40 rounded focus:outline-none focus:shadow-outline m-auto" type="button">
                            List View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compoenent5