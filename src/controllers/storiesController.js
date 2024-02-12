export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "trending" });
export const newStories = (req, res) =>
  res.render("newStories", { pageTitle: "newStories" });
export const seeStory = (req, res) =>
  res.render("seeStory", { id: req.params.id });
export const editStory = (req, res) =>
  res.render("editStory", { id: req.params.id });
export const deleteStory = (req, res) =>
  res.render("deleteStory", { id: req.params.id });
