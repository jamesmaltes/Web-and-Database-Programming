const express = require('express');
const app = express();

//need to create this for each route file that is created
const userRoutes = require('./server/routes/user');
const reservationRoutes = require('./server/routes/reservation');
const chamberRoutes = require('./server/routes/chamber');

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
app.use("/chambers, chamberRoutes");

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'bmi.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));