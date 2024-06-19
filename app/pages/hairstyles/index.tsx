import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHairstyle } from "../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

const hairstyles: React.FC = () => {
  const dispatch = useDispatch();

  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );
  console.log(hairstyles);

  useEffect(() => {
    if (hairstyles.length === 0) {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getHairstyle(ownerId) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.hairstyle.loading);

  const message = useSelector((state: RootState) => state.hairstyle.message);

  const error = useSelector((state: RootState) => state.hairstyle.error);

  const searchItems = [{ key: "hairstyle_name", value: "髪型" }];

  const tHeaderItems = ["髪型", "編集", "削除"];

  const nodesProps = [{ text: "hairstyle_name" }];

  const nodes = hairstyles;
  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="ml-2">
        <div className="flex my-4 ml-2">
          <RouterButton link="/hairstyles/create" value="新規作成" />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/hairstyles"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default hairstyles;
