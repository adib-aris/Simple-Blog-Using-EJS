import express from "express";

const port = 3000;
const app = express();

app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/section1", (req, res)=>{
    res.redirect("/");
});
app.get("/section2", (req, res)=>{
    res.render("index2.ejs");
});
app.get("/section3", (req, res)=>{
    res.render("index3.ejs");
});
app.get("/section4", (req, res)=>{
    res.render("index4.ejs");
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});