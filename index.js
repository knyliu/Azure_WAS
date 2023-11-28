import express from "express"; //create API, served Front-End
import cors from "cors"; // set up the commnuication rules between Front-End and Back-End
import mongoose from "mongoose";

import { userRouter } from "./src/routes/user.js";
import { appointmentsRouter } from "./src/routes/route_appointment.js";


const app = express(); // a version of our API

app.use(express.static('./client/build'));
app.use(express.json()); // the data got from the Front-End will be converted into JSON
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build",     
  "index.html"));
});

app.use("/auth", userRouter); // applt the router
app.use("/appointments", appointmentsRouter);
app.use("/client_appointments", appointmentsRouter);

mongoose.connect(
  "mongodb+srv://41171123h:41171123hB1@b1.3xjj9xw.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));