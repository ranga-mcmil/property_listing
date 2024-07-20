import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function Filter() {

  return (
    <aside className="w-1/4 p-4 bg-white rounded-md shadow">
      <Select>
        <SelectTrigger id="property-type">
          <SelectValue placeholder="Property Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="condo">Condo</SelectItem>
        </SelectContent>
      </Select>
      <div className="mt-4 space-y-4">
        <Input placeholder="Suburb, City, Province, Country" />
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Min. Price" />
          <Input placeholder="Max. Price" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Min. Beds" />
          <Input placeholder="Max. Beds" />
        </div>
      </div>
    </aside>
    
);
}
