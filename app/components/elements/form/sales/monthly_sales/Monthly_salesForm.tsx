// import React, { useState } from "react";
// import BasicTextField from "../../../input/BasicTextField";
// import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
// import PrimaryButton from "../../../button/PrimaryButton";
// import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";
// import { Monthly_salesState } from "../../../../../store/sales/monthly_sales/monthly_saleSlice";

// interface MonthlySalesFormProps {
//   createMonthlySales: (formData: Monthly_salesState) => void;
// }

// const MonthlySalesForm: React.FC<MonthlySalesFormProps> = ({
//   createMonthlySales,
// }) => {
//   const [year, setYear] = useState(0);
//   const [month, setMonth] = useState(0);
//   const [monthly_sales, setMonthly_sales] = useState(0);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     createMonthlySales({
//       id: 0,
//       year: year,
//       month: month,
//       monthly_sales: monthly_sales,
//       created_at: "",
//       updated_at: "",
//     });
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             月次売上登録
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <BasicTextField
//             type="number"
//             placeholder="年"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />

//           <BasicTextField
//             type="number"
//             placeholder="月"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           />

//           <BasicTextField
//             type="number"
//             placeholder="月次売上"
//             value={monthly_sales}
//             onChange={(e) => setMonthly_sales(e.target.value)}
//           />

//           <PrimaryButton value={"作成"} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MonthlySalesForm;
