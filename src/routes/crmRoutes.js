const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => res.send("GET request successful!"))
    .post((req, res) => res.send("POST request seccessful!"));

  app
    .route("/contact/:contactID")
    .put((req, res) => res.send("PUT request succesful!"))
    .delete((req, res) => res.send("DELETE request succesful!"));
};

export default routes;
