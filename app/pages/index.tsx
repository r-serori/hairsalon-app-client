import React from "react";
import RouterButton from "../components/elements/button/RouterButton";
import { Router } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutButton from "../components/elements/button/LogoutButton";

// ScrollTriggerの初期化
gsap.registerPlugin(Draggable);

const HomePage: React.FC = () => {
  useEffect(() => {
    // Draggableの設定
    Draggable.create("#active", {
      // type: "rotation",
      bounds: ".container",
      inertia: true,
    });
    Draggable.create("#rotate", {
      type: "rotation",
      // bounds: ".container",
      inertia: true,
    });
    // Draggable.create("#active", {
    //   type: "rotation",
    //   bounds: ".container",
    //   inertia: true,
    // });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between container h-full overflow-hidden ">
      <div className="flex justify-end py-4 mr-4 ">
        <LogoutButton className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" />
      </div>
      <div className="">
        <h1 id="rotate" className="mt-16 lg:text-8xl text-3xl rotate-45 ">
          Welcome to HairSalon App
        </h1>
      </div>

      <nav className="mt-16">
        <ul className="flex gap-24">
          <li id="active">
            <RouterButton link="auth/register" value="ユーザー登録画面へ" />
          </li>
          <li id="active">
            <RouterButton link="auth/login" value="ログイン画面へ" />
          </li>
        </ul>
      </nav>
      <div className="mt-12">
        <p className="text-red-500 lg:text-2xl text-xl bold">
          文字が斜めになっています！文字を掴んで直してから登録またはログインして下さい！
        </p>
        <p className="text-red-500 lg:text-2xl text-xl bold">
          ※文字を掴むと回転します！ ※しなくても登録、ログインできます！
        </p>
      </div>
      <div className="flex gap-24">
        <div id="active" className="mt-12 text-8xl">
          <ContentCutIcon className="text-8xl" />
        </div>
        <div id="rotate" className="mt-12 text-8xl">
          <StorefrontIcon className="text-8xl" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
