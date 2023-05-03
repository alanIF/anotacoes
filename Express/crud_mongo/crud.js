// Create new data
app.post('/mydata', (req, res) => {
    const newData = new MyData({
      title: req.body.title,
      content: req.body.content
    });
    newData.save()
      .then(() => res.json({ message: 'Data saved successfully' }))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
  // Get all data
  app.get('/mydata', (req, res) => {
    MyData.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
  // Get single data by ID
  app.get('/mydata/:id', (req, res) => {
    MyData.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
  // Update data by ID
  app.put('/mydata/:id', (req, res) => {
    MyData.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content
    })
      .then(() => res.json({ message: 'Data updated successfully' }))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
  // Delete data by ID
  app.delete('/mydata/:id', (req, res) => {
    MyData.findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: 'Data deleted successfully' }))
      .catch(err => res.status(400).json({ error: err.message }));
  });