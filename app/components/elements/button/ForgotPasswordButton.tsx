import { useRouter } from "next/router";

const ForgotPasswordButton: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/auth/forgotPassword");
        }}
        className={
          "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md  px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        }
      >
        パスワードを忘れた方
      </button>
    </div>
  );
};

export default ForgotPasswordButton;
