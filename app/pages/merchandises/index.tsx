import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMerchandise } from "../../store/merchandises/merchandiseSlice";
import { RootState } from "../../redux/store";

const merchandises = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.merchandise.loading);

  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );
  console.log(merchandises);

  useEffect(() => {
    dispatch(getMerchandise() as any);
  }, [dispatch]);

  const searchItems = [
    { key: "merchandise_name", value: "物販名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems = ["物販名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "merchandise_name" }, { number: "price" }];

  const nodes = merchandises;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
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
