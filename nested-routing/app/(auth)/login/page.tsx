import React from "react";
import { login } from "./actions";

const page = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <form action="">
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <button formAction={login}>Login</button>
        </form>
      </div>
    </>
  );
};

export default page;
