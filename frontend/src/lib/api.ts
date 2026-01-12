const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function searchEvents(query: string) {
  const response = await fetch(`${API_URL}/api/events?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search events');
  }
  return response.json();
}

export async function getEvent(id: string) {
  const response = await fetch(`${API_URL}/api/events/${id}`);
  if (!response.ok) {
    throw new Error('Failed to get event');
  }
  return response.json();
}

export async function searchArtists(query: string) {
  const response = await fetch(`${API_URL}/api/artists?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search artists');
  }
  return response.json();
}

export async function getArtist(id: string) {
  const response = await fetch(`${API_URL}/api/artists/${id}`);
  if (!response.ok) {
    throw new Error('Failed to get artist');
  }
  return response.json();
}

export async function getArtistEvents(artistId: string) {
  const response = await fetch(`${API_URL}/api/artists/${artistId}/events`);
  if (!response.ok) {
    throw new Error('Failed to get artist events');
  }
  return response.json();
}
