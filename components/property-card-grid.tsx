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
            <img src={property.images[0].filePath}alt="Property" className="w-full h-48 object-cover rounded" />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{property.type}</h3>
                <p className="text-gray-600">{property.title}</p>
                <p className="text-gray-600">{property.address}</p>
                <p className="text-gray-600">Beds: {property.bedrooms} Baths: {property.bathrooms} {property.propertySize}</p>
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
                    <Link
                        href={`/listings/${property.id}`}
                        className="bg-red-500 text-white px-4 py-2 rounded bg-white rounded border border-red-500"
                    >
                        Details
                    </Link>
                </div>

            </div>
        </div>
    );
}
