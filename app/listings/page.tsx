import { getProperties } from "@/actions/get-properties";
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

    console.log(propertyType)
    console.log(view)



    const data = await getProperties(propertyType)

    console.log(data)


    return (
        <>dfd</>
    );
}
