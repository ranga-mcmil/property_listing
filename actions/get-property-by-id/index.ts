"use server"

export async function getPropertyById(id: number) {
    const url = `https://fsboafrica.com/api/properties/details/${id}`
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch property')
    }
     
    return await response.json()
}