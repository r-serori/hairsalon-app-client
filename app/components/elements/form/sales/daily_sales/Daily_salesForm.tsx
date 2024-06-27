// import React, { useState } from "react";
// import BasicTextField from "../../../input/BasicTextField";
// import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
// import PrimaryButton from "../../../button/PrimaryButton";
// import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";
// import { Daily_salesState } from "../../../../../store/sales/daily_sales/daily_saleSlice";

// interface DailySalesFormProps {
//   createDailySales: (formData: Daily_salesState) => void;
// }

// const DailySalesForm: React.FC<DailySalesFormProps> = ({
//   createDailySales,
// }) => {
//   const [date, setDate] = useState("");
//   const [daily_sales, setDaily_sales] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     createDailySales({
//       id: 0,
//       date: "",
//       daily_sales: parseInt(daily_sales),
//     });
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             日次売上登録
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <BasicTextField
//             type="date"
//             placeholder="日付"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />

//           <BasicTextField
//             type="number"
//             placeholder="日次売上"
//             value={daily_sales}
//             onChange={(e) => setDaily_sales(e.target.value)}
//           />

//           <PrimaryButton value={"作成"} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DailySalesForm;
