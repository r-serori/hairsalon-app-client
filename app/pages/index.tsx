import React from "react";
import RouterButton from "../components/elements/button/RouterButton";
import { Router } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <li>
            <RouterButton link="auth/register" value="ユーザー登録画面へ" />
          </li>
          <li>
            <RouterButton link="auth/login" value="ログイン画面へ" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
