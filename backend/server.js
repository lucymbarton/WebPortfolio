import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check / API root
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

// Example endpoint - add your own as you build out the portfolio
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Your Name',
    title: 'Full Stack Web Engineer',
    skills: ['React', 'JavaScript', 'Node.js', 'Ruby on Rails'],
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
