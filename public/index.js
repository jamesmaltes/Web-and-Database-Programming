require ('dotenv').config();
const express = require('express');
const app = express();

//need to create this for each route file that is created
const userRoutes = require('./server/routes/user');
const reservationRoutes = require('./server/routes/reservation');
const labelRoutes = require('./server/routes/label');

app.use(express.json()); //To parse JSON bodies (Applicable for Express 4.16+)

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'login.html')))

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

//need to create for each route file
//what we will call on our front end when using fetch and making http requests
app.use("/users", userRoutes);
app.use("/reservations, reservationRoutes");
app.use("/label, labelRoutes");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
