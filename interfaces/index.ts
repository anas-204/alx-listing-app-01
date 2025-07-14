// Core interfaces for Airbnb clone
export interface Listing {
  id: string;
  title: string;
  description: string;
  imageSrc: string[];
  price: number;
  location: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  dates: string[];
  totalPrice: number;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
