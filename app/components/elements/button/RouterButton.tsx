import { el } from "@fullcalendar/core/internal-common";
import Link from "next/link";
import { useRouter } from "next/router";

interface RouterButtonProps {
  link?: string;
  query?: any;
  value?: string;
  onChanger?: () => void;
  onChangeAndRouter?: () => void;
}

const RouterButton: React.FC<RouterButtonProps> = ({
  link,
  onChanger,
  value,
  query,
  onChangeAndRouter,
}) => {
  const router = useRouter();

  const handleRouter = () => {
    if (link) {
      if (onChangeAndRouter) {
        onChangeAndRouter();
      }
      router.push(link);
    } else if (query) {
      router.push({
        pathname: link,
        query: query,
      });
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div>
      {link ? (
        <button
          onClick={handleRouter}
          className="md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-md font-bold px-4 py-2 text-center cursor-pointer"
        >
          {value ? value : "戻る"}
        </button>
      ) : (
        <button
          onClick={onChanger}
          className=" md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-md font-bold px-4 py-2 text-center cursor-pointer"
        >
          {value ? value : "戻る"}
        </button>
      )}
    </div>
  );
};

export default RouterButton;
