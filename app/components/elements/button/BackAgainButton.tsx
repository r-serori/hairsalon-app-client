import Link from "next/link";

const BackAgainButton = ({ link }) => (
  <div className="bg-gray-50">
    <Link href={link}>
      <button className=" ml-4 md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
        戻る
      </button>
    </Link>
  </div>
);

export default BackAgainButton;
