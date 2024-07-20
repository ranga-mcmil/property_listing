import { getPropertyById } from "@/actions/get-property-by-id"
import { PropertyDetail } from "@/components/property-detail"

export default async function ListingDetail({ 
  params 
}: { params: { id: string } }) {
  const id = params.id

  const property = await getPropertyById(id)

  return (
    <PropertyDetail property={property.data}/>
  )
}