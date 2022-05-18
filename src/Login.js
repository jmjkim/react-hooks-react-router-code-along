import React from "react";

export default function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }