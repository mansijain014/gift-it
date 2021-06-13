import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// components

// import CardTable from "components/Cards/CardTable.js";
// import FormTransaction from "../../components/Forms/FormTransaction";

export default function Tables() {

    const [creditPoints, setCreditPoints] = useState(0)
    const updateCreditPoints = () => {
      setCreditPoints(creditPoints + 10)
    }


  return (
    <>
<div>
        <div className="md:grid md:grid-cols-3 md:gap-6 pt-20">
          <div className="md:col-span-1">
              <h3 className="text-lg font-medium font-semibold leading-6 text-gray-900"><i class="fas fa-people-carry"></i> Add item for donation</h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium font-semibold text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="contactNo" className="block text-sm font-medium font-semibold text-gray-700">
                        Contact No
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="contactNo"
                          id="contactNo"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="000-000-0000"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium font-semibold text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="abc@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium font-semibold text-gray-700">Select a category</label>
                      </div>
                      <div>
                        <input type="checkbox" value="Clothes" />
                        <label className="text-sm font-medium font-semibold text-gray-700 pl-4">
                          <span>Clothes</span>
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" value="Toys" />
                        <label className="text-sm font-medium font-semibold text-gray-700 pl-4">
                          <span>Toys</span>
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" value="Furniture" />
                        <label className="text-sm font-medium font-semibold text-gray-700 pl-4">
                          <span>Furniture</span>
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" value="Gadgets" />
                        <label className="text-sm font-medium font-semibold text-gray-700 pl-4">
                          <span>Gadgets</span>
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" value="Others" />
                        <label className="text-sm font-medium font-semibold text-gray-700 pl-4"> 
                          <span>Others</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="others" className="block text-sm font-medium font-semibold text-gray-700">
                        Others
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="others"
                          id="others"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder=" "
                        />
                      </div>
                    </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium font-semibold text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Describe your gift item"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium font-semibold text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Plot, street name, city"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium font-semibold text-gray-700">Add item image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span> <b>Upload a file o </b></span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1"><b>r drag and drop</b></p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link to="/admin/donate">
                  <button
                    type="submit"
                    className="btn btn-block inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => {updateCreditPoints(e)}}
                  >
                    Donate
                  </button>
                  </Link>
                  <h3 className= "font-semibold">Credit Points: {creditPoints}</h3>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
