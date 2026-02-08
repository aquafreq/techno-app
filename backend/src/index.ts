import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consultationRoutes from "./routes/consultation";
dotenv.config();

const app = express();
const PORT: string | number = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/consultation", consultationRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Kitchen App API is running' });
});


// Kitchen-related routes (to be implemented)
app.get('/api/kitchens', (req: Request, res: Response) => {
  // TODO: Implement kitchens search
  res.json({
    message: 'Kitchens search endpoint',
    query: req.query
  });
});

app.get('/api/kitchens/:id', (req: Request, res: Response) => {
  // TODO: Implement single kitchen details
  res.json({
    message: 'Kitchen details endpoint',
    kitchenId: req.params.id
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
