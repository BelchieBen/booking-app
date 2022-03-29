const express = require('express');
const PORT = process.env.PORT || 3001;
const database = require('./database.tsx');
const User = require('./models/User.tsx')
const Announcement = require('./models/Announcement.tsx')

const app = express();
app.use(express.json())

app.post("/register", (req, res) => {
    console.log(req.body);
    const usr = User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });
    console.log("Added user");
})

app.get("/api/announcements", (req, res) => {
    Announcement.findAll().then((announcements) => {res.json(announcements)});
})

app.post("/announcement/create", (req, res) => {
    const announcement = Announcement.create({
        title: req.body.title,
        body: req.body.body,
        type: req.body.type,
        image: req.body.image,
    });
    console.log("Added announcement");
})

app.listen(PORT, () => {
    database.connect();
    User.sync();
    Announcement.sync();
    console.log(`Listening on port ${PORT}`);
});