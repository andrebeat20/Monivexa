import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'monivexa-super-secret-key-2024';

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Test Supabase Connection
console.log('Connecting to Supabase at:', supabaseUrl);

app.use(cors());
app.use(express.json());

// Login Endpoint (Supabase Client Version)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const cleanUsername = username.toLowerCase().trim();
  console.log(`Login attempt for: "${cleanUsername}"`);

  try {
    // Query data dari tabel 'users' menggunakan Supabase Client
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', cleanUsername)
      .single();

    if (error) {
      console.error('Supabase Error:', error);
      if (error.code === 'PGRST116') { // Supabase code for no rows found
        return res.status(401).json({ 
          error_code: 'USER_NOT_FOUND',
          message: 'Username belum terdaftar, silakan lakukan registrasi.' 
        });
      }
      throw error; // Rethrow other errors to be caught by catch block
    }

    if (!user) {
      return res.status(401).json({ 
        error_code: 'USER_NOT_FOUND',
        message: 'Username belum terdaftar, silakan lakukan registrasi.' 
      });
    }

    // Password check
    if (password !== user.password) {
      return res.status(401).json({ 
        error_code: 'WRONG_PASSWORD',
        message: 'Password salah.' 
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      message: 'Login Berhasil',
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        fullName: user.full_name
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Register Endpoint
app.post('/api/register', async (req, res) => {
  const { username, password, fullName } = req.body;
  const cleanUsername = username.toLowerCase().trim();

  try {
    // Check if user exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('username')
      .eq('username', cleanUsername)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: 'Username sudah digunakan.' });
    }

    // Insert new user
    const { data, error } = await supabase
      .from('users')
      .insert([
        { 
          username: cleanUsername, 
          password, // In real app, hash this!
          full_name: fullName,
          role: 'demo' // Default role for new signups
        }
      ])
      .select();

    if (error) throw error;

    res.json({ message: 'Registrasi Berhasil! Silakan login.' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Gagal melakukan registrasi.' });
  }
});

// Protected Profile Endpoint
app.get('/api/profile', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { data: user, error } = await supabase
      .from('users')
      .select('id, username, role, full_name')
      .eq('id', decoded.id)
      .single();
    
    if (error || !user) return res.status(404).json({ message: 'User not found' });
    
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server Monivexa running on http://localhost:${PORT}`);
});
