import { getProperties } from "@/actions/get-properties";
import { Homepage } from "@/components/homepage";

export default async function Home() {
  const latestProperties = await getProperties('latest')
  const propertiesToRent = latestProperties.data.latestPropertiesToRent
  const propertiesForSale = latestProperties.data.latestPropertiesForSale

  return (
    <Homepage propertiesToRent={propertiesToRent} propertiesForSale={propertiesForSale} />
  );
}




    
