const express = require("express");

const app = express();

app.use("/beetlejuice", express.static("beetlejuice"));


app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});



// import express from "express";
