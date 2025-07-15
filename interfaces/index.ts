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

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description?: string;
  reviews?: Review[];
  images?: string[];
}
