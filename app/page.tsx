import { getProperties } from "@/actions/get-properties";
import { Homepage } from "@/components/homepage";

export default async function Home() {
  const propertiesToRent = await getProperties('to-rent')
  const propertiesForSale = await getProperties('for-sale')

  return (
    <Homepage propertiesToRent={propertiesToRent} propertiesForSale={propertiesForSale} />
  );
}


import React from 'react';


    
