import React, { useEffect, useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import { sendRequest } from "../../../../services/requestApi";

interface CustomerFormProps {
  onSubmit: (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    new_customer: boolean;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [customer_name, setCustomerName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [remarks, setRemarks] = useState("");
  const [new_customer, setNewCustomer] = useState(false);

  const [courses, setCourses] = useState([] as any[]);
  const [options, setOptions] = useState([] as any[]);
  const [merchandises, setMerchandises] = useState([] as any[]);
  const [hairstyles, setHairstyles] = useState([] as any[]);
  const [attendances, setAttendances] = useState([] as any[]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const getCourses = await sendRequest<any>("GET", "/courses");
        console.log(getCourses);
        setCourses(getCourses);

        const getOptions = await sendRequest<any>("GET", "/options");
        console.log(getOptions);
        setOptions(getOptions);

        const getMerchandises = await sendRequest<any>("GET", "/merchandises");
        console.log(getMerchandises);
        setMerchandises(getMerchandises);

        const getHairstyles = await sendRequest<any>("GET", "/hairstyles");
        console.log(getHairstyles);
        setHairstyles(getHairstyles);

        const getAttendances = await sendRequest<any>("GET", "/attendances");
        console.log(getAttendances);
        setAttendances(getAttendances);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      customer_name: customer_name,
      phone_number: phone_number,
      remarks: remarks,
      new_customer: new_customer,
      created_at: "",
      updated_at: "",
      loading: false,
      error: null,
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            スタッフ登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />
          <BasicTextField
            type="text"
            placeholder="スタッフ名"
            value={customer_name}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="備考"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <SingleCheckBox
            label={"新規顧客"}
            value={new_customer}
            onChange={(e) => setNewCustomer(e.target.checked)}
          />

          <MultiCheckbox options={courses} />

          <MultiCheckbox options={options} />

          <MultiCheckbox options={merchandises} />

          <MultiCheckbox options={hairstyles} />

          <MultiCheckbox options={attendances} />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
