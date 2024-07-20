export type PropertyFilterType = 'latest' | 'to-rent' | 'for-sale';

export type Image = {
    filePath: string;
  };
  
export type Property = {
    id: number;
    title: string;
    description: string;
    status: string;
    type: string;
    currency: string;
    price: string;
    publishedAs: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    propertySize: string;
    yearBuilt: number;
    images: Image[];
};
  
export type PropertyApiResponse = {
    status: string;
    data: Property[];
};