
import { Filter } from "./filter"
import { PropertyCardListView } from "./property-card-listview"
import { PropertyApiResponse } from "@/lib/types"
import { FilterViewButtons } from "./filter-view"


type ListingsProps = {
  properties: PropertyApiResponse;
}


export function Listings({
  properties
}: ListingsProps ) {

  return (
    <div className="min-h-screen bg-gray-100 container mx-auto flex items-center justify-between">
      
      <main className="flex p-6 space-x-6">
        <Filter />

        <section className="w-3/4 space-y-6">
          <div className="flex items-center justify-between p-4 bg-white rounded-md shadow">
            <span className="text-gray-600">Sort by:</span>
            <span className="text-gray-600">10 Search Results</span>
            <FilterViewButtons />
          </div>
          
          <div className="space-y-4">
            {properties.data.map((property) => (
              
              <PropertyCardListView property={property}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

