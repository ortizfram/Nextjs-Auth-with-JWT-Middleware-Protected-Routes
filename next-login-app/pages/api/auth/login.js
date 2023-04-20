import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function loginHandler(req, res) {
  // extract data from frontend
  // console.log(req.body);
  const { email, password } = req.body;

  // from here you can check in your DB if email and

  // password are valid

  // if exists return...

  // --this is not for production
  // TOKEN
  if (email === "admin@local.local" && password === "admin") {
    // 30 days token
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: "admin@local.local",
        username: "fazt",
      },
      "secret"
    );
    const serialized = serialize("myTokenName", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    return res.json("login successfully");
  }

  return res.status(401).json({ error: "invalid credentials" });
}
