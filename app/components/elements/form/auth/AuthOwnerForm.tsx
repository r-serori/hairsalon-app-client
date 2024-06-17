import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import router from "next/router";

interface AuthOwnerFormProps {
  onSubmit: (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => void;
}

const AuthOwnerForm: React.FC<AuthOwnerFormProps> = ({ onSubmit }) => {
  const [store_name, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const userId = localStorage.getItem("user_id");
    e.preventDefault();
    if (!userId) {
      router.push("/auth/register");
    }
    onSubmit({
      store_name: store_name,
      address: address,
      phone_number: phone_number,
      user_id: Number(userId),
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウント登録
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <BasicTextField
            type="text"
            placeholder="店舗名"
            value={store_name}
            onChange={(e) => setStoreName(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="住所"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <PrimaryButton value="オーナー情報登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthOwnerForm;
