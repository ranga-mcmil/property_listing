"use server"

import { PropertyFilterType } from "@/lib/types";

export async function getProperties(filter: PropertyFilterType) {
    let url = 'https://fsboafrica.com/api/properties'

    if (filter === 'latest') {
        url += '/latest'
    } else {
        url += `/${filter}?search=${filter}`
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch properties')
      }
     
    return await response.json()


    
}