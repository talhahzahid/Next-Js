import React from "react";
import { signUp } from "./actions";

const page = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <form action="">
          <input type="text" name="username" id="username" />
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <button formAction={signUp}>SignUp</button>
        </form>
      </div>
    </>
  );
};

export default page;
