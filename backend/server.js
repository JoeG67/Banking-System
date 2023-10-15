const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors'); // For enabling CORS (Cross-Origin Resource Sharing)

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize the SQLite database
const db = new sqlite3.Database('banksystem.db');

// Define API endpoints

// Example endpoint for retrieving a list of items
// Change the endpoint to accept a POST request
app.post('/api/users', (req, res) => {
  const { email, password } = req.body; // Extract the email and password from the request body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(row);
  });
});

app.post('/api/deposit', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  // Update the user's balance in the database (use SQL UPDATE statement)
  db.run('UPDATE users SET balance = balance + ? WHERE email = ?', [balance, email], (err) => {
    if (err) {
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) {
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.json({ balance: row.balance });
    });
  });
});


app.post('/api/withdraw', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  // Update the user's balance in the database (use SQL UPDATE statement)
  db.run('UPDATE users SET balance = balance - ? WHERE email = ?', [balance, email], (err) => {
    if (err) {
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) {
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.json({ balance: row.balance });
    });
  });
});

app.post('/api/transfer', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  // Update the user's balance in the database (use SQL UPDATE statement)
  db.run('UPDATE users SET balance = balance + ? WHERE email = ?', [balance, email], (err) => {
    if (err) {
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) {
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.json({ balance: row.balance });
    });
  });
});



// Create a table (if it doesn't exist)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});