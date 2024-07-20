import { PropertyApiResponse } from "@/lib/types";
import { PropertyCard } from "./property-card";

type PropertySliderProps = {
  properties: PropertyApiResponse;
};

export function PropertySlider({ properties }: PropertySliderProps) {


    return (
        <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory -mx-4 md:-mx-6 pb-4">
            {properties.data.map((property) => (
                <PropertyCard property={property}/>
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
