export interface Event {
  id: string;
  name: string;
  date: string;
  venue: Venue;
  artists: Artist[];
  description?: string;
  imageUrl?: string;
}

export interface Artist {
  id: string;
  name: string;
  bio?: string;
  imageUrl?: string;
  genres?: string[];
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface SearchQuery {
  query?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  limit?: number;
  offset?: number;
}
