import React from "react";
import { useRouter } from "next/router";
import { Router } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutButton from "../components/elements/button/LogoutButton";
import RouterButton from "../components/elements/button/RouterButton";

// ScrollTriggerの初期化
gsap.registerPlugin(Draggable);

const ErrorPage = () => {
  const router = useRouter();

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

  const { statusCode } = router.query;

  const getMessage = () => {
    switch (Number(statusCode)) {
      case 404:
        return "お探しのページが見つかりません。";
      case 500:
        return "サーバーエラーが発生しました。しばらくしてからもう一度お試しください。";
      case 403:
        return "アクセス権限がありません。";
      case 401:
        return "認証が必要です。ログイン画面へ移動し、、ログインしてください。";
      case 503:
        return "サービスが一時的に利用できません。しばらくしてからもう一度お試しください。";
      case 419:
        return "セッションがタイムアウトしました。再度ログインしてください。";
      default:
        return "エラーが発生しました。";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between container h-full mx-auto overflow-hidden ">
      <div className="flex justify-end py-4 mr-4 ">
        <LogoutButton className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" />
      </div>
      <div>
        <h1 id="rotate" className="mt-16 lg:text-8xl text-3xl rotate-45 ">
          {getMessage()}
        </h1>
      </div>

      <nav className="mt-16">
        <ul className="flex gap-24 mr-12">
          <li id="active">
            <RouterButton link="auth/register" value="ユーザー登録画面へ" />
          </li>
          <li id="active">
            <RouterButton link="auth/login" value="ログイン画面へ" />
          </li>
          {Number(statusCode) === 401 ||
            (Number(statusCode) === 503 && (
              <li id="active">
                <RouterButton link="dashboard" value="一覧画面へ" />
              </li>
            ))}
        </ul>
      </nav>

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

export default ErrorPage;
