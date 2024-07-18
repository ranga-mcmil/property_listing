"use server"

import { EnquiryDataType } from "./types";

export async function createEnquiry(enquiryData: EnquiryDataType) {
    enquiryData.ownedBy = "your_email@example.com";
  
    const response = await fetch('https://fsboafrica.com/api/enquiries/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiryData),
    });
  
    if (!response.ok) {
        throw new Error('Failed to create enquiry')
    }
     
    return await response.json()
}