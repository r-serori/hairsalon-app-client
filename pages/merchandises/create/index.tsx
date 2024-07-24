import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMerchandise,
  MerchandiseState,
} from "../../../store/merchandises/merchandiseSlice";
import MerchandiseForm from "../../../components/elements/form/merchandises/MerchandiseForm";
import { useRouter, NextRouter } from "next/router";
import {
  merchandiseStatus,
  merchandiseError,
  merchandiseErrorStatus,
} from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/BasicAlert";
import { AppDispatch } from "../../../redux/store";
import { renderError } from "../../../services/errorHandler";
import { PermissionsState } from "../../../store/auth/permissionSlice";
import { permissionStore } from "../../../components/Hooks/authSelector";

const MerchandiseCreate: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();
  const permission: PermissionsState = useSelector(permissionStore);

  const mStatus: string = useSelector(merchandiseStatus);
  const mError: string = useSelector(merchandiseError);
  const mErrorStatus: number = useSelector(merchandiseErrorStatus);

  const handleCreate = async (formData: MerchandiseState) => {
    try {
      const response = await dispatch(createMerchandise(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        router.push("/merchandises");
      } else {
        const re = renderError(mErrorStatus, router, dispatch);
        if (re === null) throw new Error("物販の作成に失敗しました");
      }
    } catch (error) {
      return;
    }
  };
  return (
    <div className="min-h-full">
      {mError && (
        <BasicAlerts type="error" message={mError} space={1} padding={1} />
      )}
      {mStatus === "loading" ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
      ) : (
        <div>
          <div className="ml-4 mt-4">
            <RouterButton link={"/merchandises"} value="物販画面に戻る" />
          </div>

          <MerchandiseForm createMerchandise={handleCreate} />
        </div>
      )}
    </div>
  );
};

export default MerchandiseCreate;
