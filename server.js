const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

const PORT = 3000;

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
  const title = "Contacts";
  const contacts = [
    { name: "YouTube", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "GitHub", link: "#" },
  ];
  res.render(createPath("contacts"), { contacts }, { title });
});

app.get("/posts/:id", (req, res) => {
  const title = "Post";
  res.render(createPath("post"), { title });
});

app.get("/posts", (req, res) => {
  const title = "Post";
  res.render(createPath("posts"), { title });
});

app.get("/add-post", (req, res) => {
  const title = "Add-post";
  res.render(createPath("add-post"), { title });
});

app.get("/about-us", (req, res) => {
  const title = "About-Us";
  res.render("/contacts");
});

app.use((req, res) => {
  const title = "Error pages";
  res.status(404).render(createPath("error"), { title });
});
