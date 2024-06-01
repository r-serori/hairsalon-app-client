import React from "react";
import NavLink from "../components/link";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InventoryIcon from "@mui/icons-material/Inventory";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import LogoutButton from "../components/elements/button/LogoutButton";

const dashboard: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsFullScreen(window.innerWidth >= 1024); // 1024px 以上でフルスクリーンと判定
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // コンポーネントがマウントされたときに初期設定を行う

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth);

  const message = useSelector((state: RootState) => state.auth.message);

  return (
    <>
      {message ? <p>{message}</p> : null}
      <div className="flex justify-end py-4 mr-4 ">
        <LogoutButton className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" />
      </div>
      <div className="h-full flex justify-center items-center">
        <nav className={`h-full  ${isFullScreen ? "my-12" : "my-4"}`}>
          <ul
            className={`flex flex-wrap justify-center  h-full  ${
              isFullScreen ? "p-20" : ""
            }
            ${isFullScreen ? "gap-16" : "gap-4"}`}
          >
            <NavLink
              IconName={ManageAccountsIcon}
              href="/attendances"
              iconSrc="#"
              label="スタッフ管理"
            />
            {/* <NavLink
              IconName={ManageAccountsIcon}
              href="/attendance_times"
              iconSrc="#"
              label="スタッフ管理"
            /> */}
            <NavLink
              IconName={SentimentVerySatisfiedIcon}
              href="/customers"
              iconSrc="#"
              label="顧客管理"
            />
            <NavLink
              IconName={EventAvailableIcon}
              href="/schedules"
              iconSrc="#"
              label="予約表"
            />
            <NavLink
              IconName={InventoryIcon}
              href="/stocks"
              iconSrc="#"
              label="在庫管理"
            />
            <NavLink
              IconName={MenuBookIcon}
              href="/courses"
              iconSrc="#"
              label="コース"
            />
            <NavLink
              IconName={PlaylistAddIcon}
              href="/options"
              iconSrc="#"
              label="オプション"
            />
            <NavLink
              IconName={ShoppingCartIcon}
              href="/merchandises"
              iconSrc="#"
              label="物販"
            />
            <NavLink
              IconName={ContentCutIcon}
              href="/hairstyles"
              iconSrc="#"
              label="髪型"
            />
            <NavLink
              IconName={CurrencyYenIcon}
              href="/daily_sales"
              iconSrc="#"
              label="日次売上"
            />
            <NavLink
              IconName={CurrencyYenIcon}
              href="/monthly_sales"
              iconSrc="#"
              label="月次売上"
            />
            <NavLink
              IconName={CurrencyYenIcon}
              href="/yearly_sales"
              iconSrc="#"
              label="年次売上"
            />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default dashboard;
