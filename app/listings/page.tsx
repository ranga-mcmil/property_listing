import { getProperties } from "@/actions/get-properties";
import { ListView } from "@/components/list-view";
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

    const data = propertyType ? await getProperties(propertyType) : await getProperties('latest')


    return (
        <ListView />
    );
}
