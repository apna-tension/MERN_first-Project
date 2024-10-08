require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const port = process.env.PORT || 5000;

const connectDB = require("./utils/db");
const { errorMiddleware } = require("./middlewares/error-middlewares");

const cors = require("cors");

// cors:- middleware function that handles requests from different origins and allows them to access the resources on the server
const crossOption = {
    origin: "http://localhost:5173",
    // origin: ["https://deploy-mern-lwhq.vercel.app"],
    methods: "GET, GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    // optionsSuccessStatus: 204,
}
// const corsOptions = {
//     origin: ["https://deploy-mern-lwhq.vercel.app"],
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// };


app.use(cors(crossOption));

app.use(express.json());
<<<<<<< HEAD

app.get("/", (req, res) => {
    res.send("Hello World");
});

=======
app.get("/", (req, res) => {
    res.json("Hello");
});
>>>>>>> a847fe37bb3bd0c57c6cf92423281b444d09f817
app.use("/auth", authRouter);

app.use("/contact", contactRouter);

app.use("/service", serviceRouter);

app.use("/admin", adminRouter);

app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(port, () => console.log("Server running on port 5000"));
});
