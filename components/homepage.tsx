import { Property, PropertyApiResponse } from "@/lib/types";
import { Navbar } from "./navbar"
import { PropertySlider } from "./property-slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "./ui/button";
import Link from "next/link";

type HomepageProps = {
  propertiesToRent: Property[];
  propertiesForSale: Property[];
}


export function Homepage({
  propertiesToRent, propertiesForSale
}: HomepageProps) {
  return (
      <>
        <section className="bg-gray-200 py-12 md:py-16">
        <div className="flex  justify-center align-middle">
          <div className="container mx-auto px-4 md:px-6 justify-center">
            <div className="inline-flex  bg-white p-1 flex-col items-center justify-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
              <Link href='/listings?propertyType=for-sale'>
                <Button size="extrasm" className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">For Sale</Button>
              </Link>
              <Link href='/listings?propertyType=to-rent'>
                <Button size="extrasm" className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full md:w-auto">To Rent</Button>

              </Link>
            </div>
            <div className="mt-6 flex flex-col items-center  space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
              
              <Select >
                <SelectTrigger id="property-type" className="border border-gray-300 px-4 py-2 rounded w-full md:w-48">
                  <SelectValue placeholder="Property Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Suburb, City, Province, Country"
                className="border border-gray-300 px-4 py-2 rounded w-full md:w-96"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">SEARCH</button>
            </div>
          </div>
          </div>
        </section>

        <section className="container mx-auto py-12 px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Properties For Sale</h2>
          <PropertySlider properties={propertiesForSale} />
        </section>
        <section className="bg-white container mx-auto py-12 px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Properties For Rent</h2>
          <PropertySlider properties={propertiesToRent} />
        </section>
        
        <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-6 text-center">
              <img src="/1-01.svg" alt="Buy a Property" className="mx-auto mb-4" />
              {/* <Image src="/placeholder.svg" alt="Buy a Property" className="mx-auto mb-4" /> */}
              
              <h3 className="text-lg font-semibold">Buy a Property</h3>
              <p className="text-gray-600">
                Find your place with an immersive photo experience and the most listings, including things you wont find
                anywhere else.
              </p>
              <button className="mt-4 w-full bg-white text-red-500 px-4 py-2 rounded border border-red-500">
                Browse Properties For Sale
              </button>
            </div>
            <div className="bg-white rounded shadow p-6 text-center">
              <img src='/2-02.svg' alt='Sell a Property' className='mx-auto mb-4' />
              <h3 className="text-lg font-semibold">Sell a Property</h3>
              <p className="text-gray-600">
                Find your place with an immersive photo experience and the most listings, including things you wont find
                anywhere else.
              </p>
              <button className="mt-4 w-full text-red-500 px-4 py-2 bg-white  rounded border border-red-500">
                See your options
              </button>
            </div>
            <div className="bg-white rounded shadow p-6 text-center">
              <img src='/3-03.svg' alt='Rent a Property' className='mx-auto mb-4' />
              <h3 className="text-lg font-semibold">Rent a Property</h3>
              <p className="text-gray-600">
                Find your place with an immersive photo experience and the most listings, including things you wont find
                anywhere else.
              </p>
              <button className="mt-4 w-full bg-white text-red-500 px-4 py-2 rounded border border-red-500">
                Find Rentals
              </button>
            </div>
          </div>
        </section>
        
      </>
  
  )
}
