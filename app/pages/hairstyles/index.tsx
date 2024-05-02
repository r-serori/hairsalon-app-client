import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHairstyle } from "../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../redux/store";

const hairstyles: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.hairstyle.loading);

  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );
  console.log(hairstyles);

  useEffect(() => {
    dispatch(getHairstyle() as any);
  }, [dispatch]);

  const searchItems = [{ key: "hairstyle_name", value: "髪型" }];

  const tHeaderItems = ["髪型", "編集", "削除"];

  const nodesProps = [{ text: "hairstyle_name" }];

  const nodes = hairstyles;
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
      <div className="flex space-x-4 mb-4">
        <Link href="/hairstyles/create">新規作成</Link>
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
  );
};

export default hairstyles;
