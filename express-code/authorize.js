const authorize = (req, res, next) => {
  const { name } = req.query;

  if (name === "john") {
    // here we are attaching a new property to request object in middileware  
    req.user = { name: "John", id: 3 };
    next();
  } else {
    res.status(401).send("Not authorized");
  }
};

module.exports = authorize;
