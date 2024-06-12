import Link from "next/link";
import { useRouter } from "next/router";

interface RouterButtonProps {
  link?: string;
  query?: any;
  value?: string;
  onChanger?: () => void;
}

const RouterButton: React.FC<RouterButtonProps> = ({
  link,
  onChanger,
  value,
  query,
}) => {
  const router = useRouter();

  const handleRouter = () => {
    if (link) {
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
          className="ml-4 md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-md font-bold px-4 py-2 text-center cursor-pointer"
        >
          {value ? value : "戻る"}
        </button>
      )}
    </div>
  );
};

export default RouterButton;
