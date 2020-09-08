const app = require("express")(),
  colors = require("colors"),
  ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.render("profile.ejs", { name, age }); //  name = name:name
});

app.listen(80, () => {
  console.log("Server is running...".america);
});
