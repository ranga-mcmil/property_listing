
export default async function ListingDetail({ 
  params 
}: { params: { id: string } }) {

  return <div>My Listing: {params.id}</div>
}