import type { Event, Artist } from '@/types';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function searchEvents(query: string): Promise<Event[]> {
  const response: Response = await fetch(`${API_URL}/api/events?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search events');
  }
  return response.json() as Promise<Event[]>;
}

export async function getEvent(id: string): Promise<Event> {
  const response: Response = await fetch(`${API_URL}/api/events/${id}`);
  if (!response.ok) {
    throw new Error('Failed to get event');
  }
  return response.json() as Promise<Event>;
}

export async function searchArtists(query: string): Promise<Artist[]> {
  const response: Response = await fetch(`${API_URL}/api/artists?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search artists');
  }
  return response.json() as Promise<Artist[]>;
}

export async function getArtist(id: string): Promise<Artist> {
  const response: Response = await fetch(`${API_URL}/api/artists/${id}`);
  if (!response.ok) {
    throw new Error('Failed to get artist');
  }
  return response.json() as Promise<Artist>;
}

export async function getArtistEvents(artistId: string): Promise<Event[]> {
  const response: Response = await fetch(`${API_URL}/api/artists/${artistId}/events`);
  if (!response.ok) {
    throw new Error('Failed to get artist events');
  }
  return response.json() as Promise<Event[]>;
}
