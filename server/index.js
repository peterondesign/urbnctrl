const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorhandler');
const db = require('./models');
const blogs = require('./blogs/blog');
const googleAuth = require('./authRoute/googleAuth');
const credentialsAuth = require('./authRoute/credentialsAuth');

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://urbnctrl-frontend.onrender.com',
    'https://urbnctrl.onrender.com',
  ],
  optionalSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/blog', blogs);
app.use('/api', credentialsAuth);
app.use('/auth', googleAuth);
app.use(errorHandler);

db.sequelize.sync({ alter: true }).then(() => {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
});
