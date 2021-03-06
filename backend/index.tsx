const express = require('express');
const PORT = process.env.PORT || 3050;
const database = require('./database.tsx');
const User = require('./models/User.tsx');
const Course = require('./models/Course.tsx');
const Announcement = require('./models/Announcement.tsx');
const multer = require('multer');
const path = require('path');
const LearningObjective = require('./models/LearningObjective.tsx');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage:storage});

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
app.post("/upload/images", upload.single('image'), (req, res) => {
    res.json({uploadedFilename: req.file.filename});
})

app.post("/course/new", (req, res) => {
    const course = Course.create({
        courseTitle: req.body.title,
        courseDescription: req.body.description,
        courseAudience: req.body.audience,
        courseLength: req.body.length,
        courseSpaces: req.body.spaces,
        courseThumbnail: req.body.thumbnail,
        selfDirectedLearning: req.body.directedLearning,

    })
    .then((c) => {
        console.log(req.body.learningObjectives);
        req.body.learningObjectives.map((reqObjective) => {
            if(reqObjective !== ''){
                const obj = LearningObjective.create({
                    objective: reqObjective.value,
                    CourseId: c.id
                })
            };
        })
    });
    
    res.json({message: "Success!"});
})

app.get('/courses', (req, res) => {
    const courses = Course.findAll().then((courses) => {res.json({courses})});
})

app.get('/course/:id', (req, res) => {
    let courseS;
    const course = Course.findByPk(req.params.id)
        .then((course) => {
            courseS = course;
            return LearningObjective.findAll({
            where: {
                CourseId: req.params.id,
            }
        })})
        .then((objectives) => {
            res.json({objectives, courseS})
        });
})

app.listen(PORT, () => {
    database.connect();
    User.sync();
    Course.sync()
        .then(() => {
            LearningObjective.sync();
        });
    Announcement.sync();
    console.log(`Listening on port ${PORT}`);
});