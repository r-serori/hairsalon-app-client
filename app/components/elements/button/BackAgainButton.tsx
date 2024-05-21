import Link from "next/link";

interface BackAgainButtonProps {
  link?: string;
  onChanger?: () => void;
}

const BackAgainButton: React.FC<BackAgainButtonProps> = ({
  link,
  onChanger,
}) => (
  <div>
    {link ? (
      <Link href={link}>
        <button
          onClick={onChanger}
          className="ml-4 md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
        >
          戻る
        </button>
      </Link>
    ) : (
      <button
        onClick={onChanger}
        className="ml-4 md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
      >
        戻る
      </button>
    )}
  </div>
);

export default BackAgainButton;
