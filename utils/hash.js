require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const hashPassword = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const hashedUser = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
    };

    return hashedUser;
  } catch (error) {
    return error;
  }
};

const jwtSign = async (user) => {
  const jwtDetails = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  try {
    if (jwtDetails) {
      const accessToken = jwt.sign(
        jwtDetails,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
      );
      return accessToken;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const authUser = async (user, request) => {
  const jwtDetails = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  // here we are checking the hashed password and making sure it's correct before signing in.
  try {
    if (await bcrypt.compare(request.password, user.password)) {
      const accessToken = jwt.sign(
        jwtDetails,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
      );
      return accessToken;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const verifyToken = (request) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.spilt(" ")[1];
  if (token == null) return "401 error";

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return "403 error";

    request.user = user;
  });
};

module.exports = { hashPassword, authUser, verifyToken, jwtSign };
