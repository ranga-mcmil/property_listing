import { getProperties } from "@/actions/get-properties";
import { Listings } from "@/components/listings";
import { PropertyFilterType } from "@/lib/types";

export default async function ListingsPage({
    searchParams,
  }: {
    searchParams: {
      propertyType: PropertyFilterType,
      view: string,
    }
  }) {

    const propertyType = searchParams.propertyType;
    const view = searchParams.view;

    const properties = propertyType ? await getProperties(propertyType) : await getProperties('to-rent')


    return (
        <Listings properties={properties} view={view}/>
    );
}
