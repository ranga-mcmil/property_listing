"use server"

import { EnquiryDataSchema, EnquiryDataType } from "./types";

export async function createEnquiry(formData: FormData) {
    // enquiryData.ownedBy = "your_email@example.com";

    const {firstName, lastName, email, dialingCode, phoneNumber, message, listingId, ownedBy} = EnquiryDataSchema.parse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      dialingCode: formData.get('dialingCode'),
      phoneNumber: formData.get('phoneNumber'),
      message: formData.get('message'),
      listingId: formData.get('listingId'),
      ownedBy: formData.get('ownedBy')

    })

    const payload = {
      firstName, 
      lastName, 
      email, 
      dialingCode, 
      phoneNumber, 
      message, 
      listingId, 
      ownedBy
    }

  
    const response = await fetch('https://fsboafrica.com/api/enquiries/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
        throw new Error('Failed to create enquiry')
    }
     
    return await response.json()
}