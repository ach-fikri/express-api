const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const usersRoutes = require('./src/routes/users');
const middleware = require('./src/midleware/logs');
const upload = require('./src/midleware/multer');

const app = express();



app.use(middleware);
app.use(express.json());
app.use("assets/", express.static("public/images"));

app.use("/users", usersRoutes);

app.post("/upload", upload.single("image"), (req, res) => {
    res.json({
        message: "Upload success",
        data: req.file,
    });
});

app.use((err, req, res, next) => {
    res.json({
       message : err.message,

    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });