import { Instagram, Phone, AtSign } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Property } from "@/lib/types";
import { Button } from "@/components/ui/button"
import Link from "next/link";


type PropertyCardProps = {
    property: Property
}

export function PropertyCardListView({
    property
}: PropertyCardProps) {

  return (

    <Card className="flex p-4 space-x-4 bg-white rounded-md shadow">
        <div className="relative w-1/3">
            <img src={property.images[0].filePath} alt="Property" className="object-cover w-full h-full rounded-md" />
            <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50">$ {property.price}</div>
        </div>
        <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-2">
            <Badge variant="default">Featured</Badge>
            <Badge variant="secondary">Rent</Badge>
            </div>
            <h2 className="text-lg font-semibold">{property.type}</h2>
            <p className="text-sm text-gray-600">{property.title}</p>
            <p className="text-sm text-gray-600">{property.address}</p>
            <p className="text-sm text-gray-600">Beds: {property.bedrooms} Baths: {property.bathrooms} {property.propertySize}</p>
            <p className="text-sm text-gray-600">
            {property.description}
            </p>
            <div className="flex space-x-2">
            <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
                <Phone className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
                <AtSign className="w-4 h-4" />
            </Button>
           
            
            <Link href={`/listings/${property.id}`} >
                <Button variant="outline" size="sm" className="ml-auto">
                    Details
                </Button>
            </Link>

            </div>
        </div>
        </Card>
    
    
);
}
