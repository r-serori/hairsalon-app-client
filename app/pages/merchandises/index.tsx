import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMerchandise } from "../../store/merchandises/merchandiseSlice";
import { RootState } from "../../redux/store";

const merchandises = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMerchandise({}) as any);
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.merchandise.loading);

  const message = useSelector((state: RootState) => state.merchandise.message);

  const error = useSelector((state: RootState) => state.merchandise.error);

  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );
  console.log(merchandises);

  const searchItems = [
    { key: "merchandise_name", value: "物販名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems = ["物販名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "merchandise_name" }, { number: "price" }];

  const nodes = merchandises;

  return (
    <div className="mx-auto max-w-6xl px-4 ">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/merchandises/create">新規作成</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/merchandises"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default merchandises;
