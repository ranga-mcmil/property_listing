import { Instagram, Phone, AtSign } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Property } from "@/lib/types";

type PropertyCardProps = {
    property: Property
}

export function PropertyCardGrid({
    property
}: PropertyCardProps) {

  return (
    
    <div className="bg-white rounded shadow p-4">
        <img src="/placeholder.svg" alt="Property" className="w-full h-48 object-cover rounded" />
        <div className="mt-4">
        <h3 className="text-lg font-semibold">Property Type</h3>
        <p className="text-gray-600">Luxury Family Home</p>
        <p className="text-gray-600">83 Hindhead Avenue, Chisipite, Harare</p>
        <p className="text-gray-600">Beds: 2 Baths: 1 2000 SQM</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Details</button>
        </div>
    </div>
);
}
