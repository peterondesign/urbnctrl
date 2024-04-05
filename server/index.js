const express = require('express');
const app = express();
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorhandler');
const db = require('./models');
const blogs = require('./blogs/blog');
const googleAuth = require('./authRoute/googleAuth');
const credentialsAuth = require('./authRoute/credentialsAuth');

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
