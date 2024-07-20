import { PropertyCard } from "./property-card";

export function PropertySlider() {

  return (
    
    <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory -mx-4 md:-mx-6 pb-4">
        {[1, 3, 4, 5, 6].map((i) => (
            <PropertyCard />
        ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        </div>
    </div>
);
}
