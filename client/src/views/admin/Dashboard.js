import React from "react";
import {useState} from 'react'
// import Navbar from "components/Navbars/AuthNavbar.js";

function Dashboard() {

  return (
    <>
<section class="p-6 dark:bg-coolGray-800 dark:text-coolGray-50 mt-24 pt-20">
	<form class="container flex flex-col mx-auto space-y-12 add-form ng-untouched ng-pristine ng-valid">
		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900">
			<div class="space-y-2 col-span-full lg:col-span-1">
				<p class="font-medium font-semibold pb-140">Add Item Info</p>
				{/* <p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p> */}
			</div>
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full sm:col-span-3">
          <p>Item Name</p>
					<input id="firstname" type="text" placeholder="Name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"/>
				</div>
			</div>
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full">
          <p>Item Description</p>
					<textarea id="bio" placeholder="Describe your gift item" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" ></textarea>
				</div>
        <div class="col-span-full">
          <p>Add Item Image</p>
          <input type="file" />
        </div>
			</div>
		</fieldset>
    <input type='submit' value='Add to giftlist' className='btn btn-block'/>
	</form>
</section>
<div class="mt-10">
{/* <CardBarChart /> */}
</div>
    </>
  );
}


export default Dashboard






