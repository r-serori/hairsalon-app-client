const DeleteButton = ({ value }) => {
  return (
    <div className="text-right">
      <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-2 ">
        {value}
      </button>
    </div>
  );
};

export default DeleteButton;
