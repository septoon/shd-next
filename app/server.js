const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Ручка для обновления данных
app.put('/api/updateData', (req, res) => {
  const updatedData = req.body;

  fs.writeFile('path/to/your/data.json', JSON.stringify(updatedData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated successfully');
      res.status(200).send('Data updated successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
