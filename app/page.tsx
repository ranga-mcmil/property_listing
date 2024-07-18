import { getProperties } from "@/actions/get-properties";

export default async function HomePage() {
  const data = await getProperties('latest')

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">For Sale</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">To Rent</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">New Developments</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Showdays</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Agencies</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          </nav>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">Login</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Signup</a>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="mr-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">For Sale</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg ml-2">To Rent</button>
            </div>
            <input type="text" placeholder="Suburb, City, Province, Country" className="flex-grow bg-gray-100 p-4 rounded-lg border border-gray-300 mr-4" />
            <button className="bg-red-500 text-white px-6 py-4 rounded-lg">Search</button>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold py-6">Properties For Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property Card */}
          <div className="bg-white rounded-lg shadow-md">
            <img src="image1.jpg" alt="Property" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Luxury Family Home</h3>
              <p className="text-gray-600">83 Hindhead Avenue, Chisipite, Harare</p>
              <p className="text-gray-600">Beds: 2 Baths: 2 2000 SQM</p>
              <a href="#" className="text-red-500 mt-4 inline-block">Details</a>
            </div>
          </div>
          {/* Repeat Property Card for other listings */}
        </div>
      </div>

      {/* Properties For Rent Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold py-6">Properties For Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property Card */}
          <div className="bg-white rounded-lg shadow-md">
            <img src="image1.jpg" alt="Property" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Luxury Family Home</h3>
              <p className="text-gray-600">83 Hindhead Avenue, Chisipite, Harare</p>
              <p className="text-gray-600">Beds: 2 Baths: 2 2000 SQM</p>
              <a href="#" className="text-red-500 mt-4 inline-block">Details</a>
            </div>
          </div>
          {/* Repeat Property Card for other listings */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold">Buy a Property</h3>
              <p className="text-gray-600">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
              <a href="#" className="text-red-500 mt-4 inline-block">Browse Properties For Sale</a>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sell a Property</h3>
              <p className="text-gray-600">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
              <a href="#" className="text-red-500 mt-4 inline-block">See your options</a>
            </div>
            <div>
              <h3 className="text-xl font-bold">Rent a Property</h3>
              <p className="text-gray-600">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
              <a href="#" className="text-red-500 mt-4 inline-block">Find Rentals</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


import React from 'react';


    
