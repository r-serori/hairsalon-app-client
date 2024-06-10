import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMerchandise } from "../../store/merchandises/merchandiseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

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
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/merchandises/create" value="新規作成" />
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
    </div>
  );
};

export default merchandises;
