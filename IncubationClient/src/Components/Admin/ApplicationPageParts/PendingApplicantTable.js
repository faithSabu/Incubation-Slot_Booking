import React from 'react'

function Table1() {
    return (
        <div className='mt-24 ml-20'>

            

            <div className='mt-20'>
                <h1 className='text-4xl m-5 font-serif '>PENDING APPLICANT LIST</h1>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="lg:w-[1000px] text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    S.No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Company Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Company Details
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    View
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="py-4 px-6">
                                    Sliver
                                </td>
                                <td class="py-4 px-6">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Table1