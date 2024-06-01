import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOption } from "../../store/options/optionSlice";
import { RootState } from "../../redux/store";

const options: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.option.loading);

  const message = useSelector((state: RootState) => state.option.message);

  const error = useSelector((state: RootState) => state.option.error);

  const options = useSelector((state: RootState) => state.option.option);
  console.log(options);

  useEffect(() => {
    dispatch(getOption({}) as any);
  }, [dispatch]);

  const searchItems = [
    { key: "option_name", value: "オプション名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems = ["オプション名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "option_name" }, { number: "price" }];

  const nodes = options;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/options/create">新規作成</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/options"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default options;
