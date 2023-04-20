import React, { useState } from "react";

function LoginPage() {
  // save changes on useState
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // capture data of input on console [value and name]
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="bg-green-600 px-4 py-1 rounded-md">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;