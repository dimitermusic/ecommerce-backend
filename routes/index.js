const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Add a '/' then one of the following to view data from MySQL Database in JSON format:<br>'categories', 'products', 'tags'</h1>")
});

module.exports = router;