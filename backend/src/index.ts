import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Techno App API is running' });
});

// Events routes
app.get('/api/events', (req: Request, res: Response) => {
  // TODO: Implement events search
  res.json({ 
    message: 'Events search endpoint',
    query: req.query 
  });
});

app.get('/api/events/:id', (req: Request, res: Response) => {
  // TODO: Implement single event details
  res.json({ 
    message: 'Event details endpoint',
    eventId: req.params.id 
  });
});

// Artists routes
app.get('/api/artists', (req: Request, res: Response) => {
  // TODO: Implement artists search
  res.json({ 
    message: 'Artists search endpoint',
    query: req.query 
  });
});

app.get('/api/artists/:id', (req: Request, res: Response) => {
  // TODO: Implement single artist details
  res.json({ 
    message: 'Artist details endpoint',
    artistId: req.params.id 
  });
});

app.get('/api/artists/:id/events', (req: Request, res: Response) => {
  // TODO: Implement artist events (where they play)
  res.json({ 
    message: 'Artist events endpoint',
    artistId: req.params.id 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
