const app = require("express")(),
  colors = require("colors"),
  ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("profile.ejs", { name, age }); 
});



app.get("/news", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("news.ejs", { name, age }); 
});

app.get("/shop", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("shop.ejs", { name, age }); 
});


var songs = ["dream on", "Rockn roll until we die", "territory", "Lemonade"]

app.get("/songs", (req, res) => {


  res.render("songs.ejs", songs); 
});

app.get("/events", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("events.ejs", { name, age }); 
});

app.get("/videos", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("videos.ejs", { name, age }); 
});

app.listen(80, () => {
  console.log("Server is running...".america);
});
