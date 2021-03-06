// this is the entry point for the app env variables are set automatically
// node modules
const bodyParser = require('body-parser');
const express = require('express');

//  don't console.log, instead use the debug module
const debug = require('debug')('app');
// const blog = require("./routes/blog");

// security middleware
// const security = require("./app/middlewares/security");

// initialize the express app
const app = express();

debug('starting server ...');

// apply security middleware
// security(app);

// parse the body of the incoming body req
app.use(bodyParser.json());

// plug the routers here for the individual components
// app.use("/api/blog", blog);


// Start listening for connections
app.listen(process.env.APP_PORT ? process.env.APP_PORT : 3000, (err) => {
  if (err) debug("can't start the app");
  debug(`starting ${process.env.APP_NAME} on port ${process.env.APP_PORT}`);
});
