import { getProperties } from "@/actions/get-properties";
import { Homepage } from "@/components/homepage";

export default async function Home() {
  const data = await getProperties('latest')

  return (
    <Homepage />
  );
}


import React from 'react';


    
