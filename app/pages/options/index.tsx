import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOption } from "../../store/options/optionSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

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
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/options/create" value="新規作成" />
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
    </div>
  );
};

export default options;
