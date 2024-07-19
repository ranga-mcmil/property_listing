/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dtlvxfBJ356
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Navbar } from "./navbar"

export function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="bg-gray-200 py-12 md:py-16">
        <div className="bg-white mx-auto w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">For Sale</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full md:w-auto">To Rent</button>
        </div>
      </section>
      
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Properties For Sale</h2>
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 -mx-4 md:-mx-6 pb-4">
            {[1, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 md:px-6">
                <div className="bg-white rounded shadow p-4">
                  <img src="/placeholder.svg" alt="Property" className="w-full h-48 object-cover rounded" />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Property Type</h3>
                    <p className="text-gray-600">Luxury Family Home</p>
                    <p className="text-gray-600">83 Hindhead Avenue, Chisipite, Harare</p>
                    <p className="text-gray-600">Beds: 2 Baths: 1 2000 SQM</p>
                    <div className="mt-4 border-t pt-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline">
                          <HeartIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="outline">
                          <ShareIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="outline">
                          <StarIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button className="bg-red-500 text-white px-4 py-2 rounded">Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </section>
      <section className="bg-white container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Properties For Rent</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <img src="/placeholder.svg" alt="Property" className="w-full h-48 object-cover rounded" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Property Type</h3>
                <p className="text-gray-600">Luxury Family Home</p>
                <p className="text-gray-600">83 Hindhead Avenue, Chisipite, Harare</p>
                <p className="text-gray-600">Beds: 2 Baths: 1 2000 SQM</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="/placeholder.svg" alt="Buy a Property" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Buy a Property</h3>
            <p className="text-gray-600">
              Find your place with an immersive photo experience and the most listings, including things you won't find
              anywhere else.
            </p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Browse Properties For Sale</button>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="/placeholder.svg" alt="Sell a Property" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Sell a Property</h3>
            <p className="text-gray-600">
              Find your place with an immersive photo experience and the most listings, including things you won't find
              anywhere else.
            </p>
            <button className="mt-4 w-full bg-white text-red-500 px-4 py-2 rounded border border-red-500">
              See your options
            </button>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="/placeholder.svg" alt="Rent a Property" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Rent a Property</h3>
            <p className="text-gray-600">
              Find your place with an immersive photo experience and the most listings, including things you won't find
              anywhere else.
            </p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Find Rentals</button>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 py-6">
        <div className="container mx-auto flex items-center justify-between text-white">
          <p>© 2024 Sold.co.zw. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
