const express = require('express');
const apicache = require('apicache');
const axios = require('axios');

const app = express();
const cache = apicache.middleware;

// Apply caching to the GFG profile route with a duration of 5 minutes
app.get('/gfg/:username', cache('5 minutes'), async (req, res) => {
  const { username } = req.params;
  const apiUrl = `https://geeks-for-geeks-api.vercel.app/${username}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(8080, () => console.log('Server running on port 8080'));