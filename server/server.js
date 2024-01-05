const express = require('express');
const cors = require('cors');
const stocksRouter = require('./routes/api');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/stocks', stocksRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

require('./utils/initializeData');
require('./utils/priceUpdater');
