import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { useRouter } from "next/router";
import BasicNumberField from "../../input/BasicNumberField";
import { getUserId } from "../../../Hooks/getLocalStorage";
import { useSelector } from "react-redux";
import { userKey } from "../../../Hooks/authSelector";
import { fetchAddressApi } from "../../../../services/auth/fetchAddressApi";
import { useDispatch } from "react-redux";
import { changeMessage } from "../../../../store/auth/userSlice";

interface AuthOwnerFormProps {
  onSubmit: (formData: {
    store_name: string;
    postal_code: string;
    prefecture: string;
    city: string;
    addressLine1: string;
    addressLine2?: string;
    phone_number: string;
    user_id: number;
  }) => void;
}

const AuthOwnerForm: React.FC<AuthOwnerFormProps> = ({ onSubmit }) => {
  const [store_name, setStoreName] = useState<string>("");
  const [postal_code, setPostalCode] = useState<string>("");
  const [prefecture, setPrefecture] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");

  const [storeNameValidate, setStoreNameValidate] = useState<boolean>(true);
  const [postalCodeValidate, setPostalCodeValidate] = useState<boolean>(true);
  const [prefectureValidate, setPrefectureValidate] = useState<boolean>(true);
  const [cityValidate, setCityValidate] = useState<boolean>(true);
  const [addressLine1Validate, setAddressLine1Validate] =
    useState<boolean>(true);
  const [phoneNumberValidate, setPhoneNumberValidate] = useState<boolean>(true);

  const router = useRouter();
  const dispatch = useDispatch();

  const key: string | null = useSelector(userKey);

  const handlePostalCodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const newPostalCode = e.target.value;
      setPostalCode(newPostalCode);

      if (newPostalCode.length === 7) {
        // 郵便番号が7桁になったらAPIを呼び出す
        const address = await fetchAddressApi(newPostalCode);
        if (address) {
          setPrefecture(address.prefecture);
          setCity(address.city);
          setAddressLine1(address.address_line1);
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(
        changeMessage(
          "住所の取得に失敗しました！もう一度お試しください！失敗が続く場合、申し訳ありませんがご自身でご入力お願いいたします。"
        )
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = getUserId(key);
    if (!userId) {
      router.push("/auth/register");
      return;
    }
    onSubmit({
      store_name,
      postal_code,
      prefecture,
      city,
      addressLine1,
      addressLine2,
      phone_number,
      user_id: Number(userId),
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            店舗情報登録
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <BasicTextField
            id={0}
            placeholder="店舗名"
            value={store_name}
            onChange={(e) => setStoreName(e.target.value)}
            onValidationChange={(isValid) => setStoreNameValidate(isValid)}
          />

          <BasicNumberField
            id={1}
            placeholder="郵便番号"
            value={postal_code}
            onChange={handlePostalCodeChange}
            onValidationChange={(isValid) => setPostalCodeValidate(isValid)}
          />

          <BasicTextField
            id={2}
            placeholder="都道府県"
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
            onValidationChange={(isValid) => setPrefectureValidate(isValid)}
          />

          <BasicTextField
            id={3}
            placeholder="市区町村"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onValidationChange={(isValid) => setCityValidate(isValid)}
          />

          <BasicTextField
            id={4}
            placeholder="町名・番地"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            onValidationChange={(isValid) => setAddressLine1Validate(isValid)}
            regex={/[<>&'"\\;\s]|--/g}
          />

          <BasicTextField
            id={5}
            placeholder="建物名・部屋番号"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            required={false}
            regex={/[<>&'"\\;\s]|--/g}
          />

          <BasicNumberField
            id={6}
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxNumber={999999999999999}
            onValidationChange={(isValid) => setPhoneNumberValidate(isValid)}
          />

          <PrimaryButton value="オーナー情報登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthOwnerForm;
