const express = require('express'); // Imports express into application
const sqlite3 = require('sqlite3'); // Imports sqlite3 into app
const cors = require('cors'); //  imports the cors middleware into the app to enable CORS (Cross-Origin Resource Sharing)

const app = express(); // Creates instance of express in the app abject
const port = process.env.PORT || 3001; //Defines the port number on which your server will listen for incoming HTTP requests. If PORT(hosting url) is not present, it will default to localhost port. 

app.use(cors()); //The app is told to use the cors middleware that was imported earlier
app.use(express.json()); //The app is told to use the express middleware that was imported earlier

 
const db = new sqlite3.Database('banksystem.db'); // Created a db object which has a sqlite3 database instance as its value

//API endpoints(HTTP post endpoints) are set up below. 


app.post('/api/users', (req, res) => { // Name of endpoint + request and response objects
  const { email, password } = req.body; // Extract the email and password from the request body

  if (!email || !password) { // If loop to check and return an error if the email and password are not taken/present
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  //Database is checked for the corresponding email and password values
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) { // Error handling block for if any error occurs while query is executed
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!row) { // Error message returned for if no row is returned from the query
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(row); // Response is returned with corresponding data
  });
});

app.post('/api/deposit', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  if (!email || !password) { // If loop to check and return an error if the email and password are not taken/present
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }
  // Update the user's balance in the database (use SQL UPDATE statement) adds value to balance
  db.run('UPDATE users SET balance = balance + ? WHERE email = ?', [balance, email], (err) => {
    if (err) { // Error handling block
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) {
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      // Updated user balance is returned and sent to account page
      res.json({ balance: row.balance });
    });
  });
});


app.post('/api/withdraw', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  if (!email || !password) { // If loop to check and return an error if the email and password are not taken/present
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }
  // Update the user's balance in the database (use SQL UPDATE statement) subtracts balance
  db.run('UPDATE users SET balance = balance - ? WHERE email = ?', [balance, email], (err) => {
    if (err) { // Error handling block
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) { // Error handling block
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.json({ balance: row.balance });
    });
  });
});

app.post('/api/transfer', (req, res) => {
  const { email, balance } = req.body; // Extract email and balance from the request body

  if (!email || !password) { // If loop to check and return an error if the email and password are not taken/present
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }
  // Update the user's balance in the database (use SQL UPDATE statement) tramsfers value from balance
  db.run('UPDATE users SET balance = balance - ? WHERE email = ?', [balance, email], (err) => {
    if (err) { // Error handling block
      console.error('Error updating balance:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Fetch the updated balance from the database and send it in the response
    db.get('SELECT balance FROM users WHERE email = ?', email, (err, row) => {
      if (err) {// Error handling block
        console.error('Error fetching updated balance:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
// Response is returned with corresponding data
      res.json({ balance: row.balance });
    });
  });
});

//API endpoint below will be used to store data to be used for bank statement page


// Express.js method that starts the server and listens on a specified port for incoming HTTP requests
app.listen(port, () => { //Takes port as the argument 
  console.log(`Server is running on port ${port}`); // Returns corresponding port number
});
