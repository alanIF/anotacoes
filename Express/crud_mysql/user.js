// Get all records
app.get('/records', (req, res) => {
    const sql = 'SELECT * FROM user';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  // Get a record by id
  app.get('/records/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM user WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  // Create a record
  app.post('/records', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const sql = 'INSERT INTO user (name, email) VALUES (?, ?)';
    connection.query(sql, [name, email], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  // Update a record by id
  app.put('/records/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const sql = 'UPDATE user SET name = ?, email = ? WHERE id = ?';
    connection.query(sql, [name, email, id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  // Delete a record by id
  app.delete('/records/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM user WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });