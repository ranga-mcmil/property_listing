import { Instagram, Phone, AtSign } from "lucide-react";
import { Button } from "./ui/button";

export function PropertyCard() {

  return (
    
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 md:px-6">
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
                    <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                    <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                    <AtSign className="w-4 h-4" />
                </Button>
                </div>
                <Button className="bg-red-500 text-white px-4 py-2 rounded" variant="outline">Details</Button>
            </div>
            </div>
        </div>
    </div>
);
}
