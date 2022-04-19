const users = [{
    userId: 12345,
    username: "cathy123"
},
{
    userId: 55555,
    username: "fredburger54"
}
];

let getUsers = () => users;

// does the same thing as vvvv
/* function getUser() {
    return users;
}
*/

//routes ==============================================================

module.exports = { getUsers }

const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.get('/');

router.get('/', (req, res) => {
    try {
        const users = User.getUsers();
        res.send(users);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})

.post('/login', (req, res) => {
    try {
        const user = User.login(req.body.username, req.body.password);
        res.send({...user, password: undefined});
        } catch (e) {
        res.status(401).send({message: e.message});
    }
})

module.exports = router;


//index.js =============================================================

const express = require('express');
const app = express();

const userRoutes = require("./server/routes/user");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// back to user.js ======================================================

let getUsers = () => users;

function login(username, password) {
    const user = user.filter((u) => u.userName === username);
    if(!user[0]) throw Error('user not found');
    if(user[0].password !== password) throw Error("Password not found!");
}