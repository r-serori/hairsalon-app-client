import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CustomerState,
  getCustomer,
} from "../../store/customers/customerSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  customersStore,
  customerStatus,
  customerMessage,
  customerError,
  coursesStore,
  optionsStore,
  merchandiseStore,
  hairstylesStore,
  course_customersStore,
  option_customersStore,
  merchandise_customersStore,
  hairstyle_customersStore,
  customer_usersStore,
} from "../../components/Hooks/selector";
import {
  user,
  userKey,
  permissionStore,
} from "../../components/Hooks/authSelector";
import { staffPermission } from "../../components/Hooks/useMethod";
import { allLogout } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { CourseState } from "../../store/courses/courseSlice";
import { OptionState } from "../../store/options/optionSlice";
import { MerchandiseState } from "../../store/merchandises/merchandiseSlice";
import { HairstyleState } from "../../store/hairstyles/hairstyleSlice";
import { UserAllState } from "../../components/Hooks/interface";
import { Course_customersState } from "../../store/middleTable/customers/course_customersSlice";
import { Option_customersState } from "../../store/middleTable/customers/option_customersSlice";
import { Merchandise_customersState } from "../../store/middleTable/customers/merchandise_customersSlice";
import { Hairstyle_customersState } from "../../store/middleTable/customers/hairstyle_customersSlice";
import { Customer_usersState } from "../../store/middleTable/customers/customer_usersSlice";
import { PermissionsState } from "../../store/auth/permissionSlice";

interface CustomerProps {
  update?: boolean;
}

const customers: React.FC<CustomerProps> = ({ update }) => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const dispatch = useDispatch();

  const customers: CustomerState[] = useSelector(customersStore);

  const cStatus: string = useSelector(customerStatus);

  const cMessage: string | null = useSelector(customerMessage);

  const cError: string | null = useSelector(customerError);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("permission", permission);
        staffPermission(permission, router);
        if (permission === "オーナー") {
          setTHeaderItems([
            "顧客",
            "電話番号",
            "備考",
            "コース",
            "オプション",
            "商品",
            "髪型",
            "担当者",
            "編集",
            "削除",
          ]);
        } else if (permission === "マネージャー") {
          setTHeaderItems([
            "顧客名",
            "電話番号",
            "備考",
            "コース",
            "オプション",
            "商品",
            "髪型",
            "担当者",
            "編集",
          ]);
        } else {
          setTHeaderItems([
            "顧客",
            "電話番号",
            "備考",
            "コース",
            "オプション",
            "商品",
            "髪型",
            "担当者",
          ]);
        }
        if (
          _.isEmpty(customers) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getCustomer({}) as any);
        }
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      } finally {
        localStorage.removeItem("userCount");
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

  const courses: CourseState[] = useSelector(coursesStore);

  const options: OptionState[] = useSelector(optionsStore);

  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);

  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);

  const users: UserAllState[] = useSelector(user);

  const course_customers: Course_customersState[] = useSelector(
    course_customersStore
  );

  console.log("course_customersだよ");
  console.log(course_customers);

  const option_customers: Option_customersState[] = useSelector(
    option_customersStore
  );
  const merchandise_customers: Merchandise_customersState[] = useSelector(
    merchandise_customersStore
  );
  const hairstyle_customers: Hairstyle_customersState[] = useSelector(
    hairstyle_customersStore
  );

  const customer_users: Customer_usersState[] =
    useSelector(customer_usersStore);

  const searchItems = [
    { key: "customer_name", value: "顧客" },
    { key: "phone_number", value: "電話番号" },
    { key: "remarks", value: "備考" },
    { key: "course", value: "コース" },
    { key: "option", value: "オプション" },
    {
      key: "merchandise",
      value: "商品",
    },
    { key: "hairstyle", value: "髪型" },
    { key: "names", value: "担当者" },
  ];

  const nodesProps = [
    { text: "customer_name" },
    { number: "phone_number" },
    { text: "remarks" },
    { text: "course" },
    { text: "option" },
    { text: "merchandise" },
    { text: "hairstyle" },
    { text: "names" },
  ];

  const nodes = Array.isArray(customers)
    ? [
        ...customers.map((customer) => {
          // customerは一回一番下まで行く。その後、次のcustomerに行く。
          // 顧客に関連するコースの情報を取得
          const customerCourses = course_customers.filter(
            (course) => course.customer_id === customer.id
          );
          console.log(customerCourses);
          // [{customer_id: 1, course_id: 1}]

          // 顧客に関連するコース名を取得し、カンマ区切りの文字列に変換
          const courseNames = customerCourses
            .map((course) => {
              const courseInfo = courses.find((c) => c.id === course.course_id);
              return courseInfo ? courseInfo.course_name : ""; // コース名が見つかった場合のみ取得
            })
            .join(",\n"); // コース名をカンマ区切りの文字列に変換
          console.log(courseNames);
          // カットとシェービングA

          // 顧客に関連するオプションの情報を取得
          const customerOptions = option_customers.filter(
            (cus_op) => cus_op.customer_id === customer.id
          );
          console.log("CUSOP", customerOptions);
          // [{customer_id: 1, option_id: 1},
          // {customer_id: 1, option_id: 2}]

          // 顧客に関連するオプション名を取得し、カンマ区切りの文字列に変換
          const optionNames = customerOptions
            .map((option) => {
              const optionInfo = options.find((o) => o.id === option.option_id);
              return optionInfo ? optionInfo.option_name : ""; // オプション名が見つかった場合のみ取得
            })
            .join(",\n"); // オプション名をカンマ区切りの文字列に変換
          console.log(optionNames);
          // トリートメント, パーマ

          // 顧客に関連する商品の情報を取得
          const customerMerchandises = merchandise_customers.filter(
            (merchandise) => merchandise.customer_id === customer.id
          );
          console.log(customerMerchandises);
          // [{customer_id: 1, merchandise_id: 1},
          // {customer_id: 1, merchandise_id: 2}]

          // 顧客に関連する商品名を取得し、カンマ区切りの文字列に変換
          const merchandiseNames = customerMerchandises
            .map((merchandise) => {
              const merchandiseInfo = merchandises.find(
                (m) => m.id === merchandise.merchandise_id
              );
              return merchandiseInfo ? merchandiseInfo.merchandise_name : ""; // 商品名が見つかった場合のみ取得
            })
            .join(",\n"); // 商品名をカンマ区切りの文字列に変換
          console.log(merchandiseNames);
          // シャンプー, コンディショナー

          // 顧客に関連する髪型の情報を取得
          const customerHairstyles = hairstyle_customers.filter(
            (hairstyle) => hairstyle.customer_id === customer.id
          );
          console.log(customerHairstyles);
          // [{customer_id: 1, hairstyle_id: 1},
          // {customer_id: 1, hairstyle_id: 2}]

          // 顧客に関連する髪型名を取得し、カンマ区切りの文字列に変換
          const hairstyleNames = customerHairstyles
            .map((hairstyle) => {
              const hairstyleInfo = hairstyles.find(
                (h) => h.id === hairstyle.hairstyle_id
              );
              return hairstyleInfo ? hairstyleInfo.hairstyle_name : ""; // 髪型名が見つかった場合のみ取得
            })
            .join(",\n"); // 髪型名をカンマ区切りの文字列に変換
          console.log(hairstyleNames);
          // ショート, ロング

          // 顧客に関連する担当者の情報を取得
          const customerUsers = customer_users.filter(
            (user) => user.customer_id === customer.id
          );
          console.log(customerUsers);
          // [{customer_id: 1, user_id: 1}]

          // 顧客に関連する担当者名を取得し、カンマ区切りの文字列に変換
          const userNames = Array.isArray(users)
            ? customerUsers
                .map((user) => {
                  const userInfo = users.find((a) => a.id === user.user_id);
                  return userInfo ? userInfo.name : ""; // 担当者名が見つかった場合のみ取得
                })
                .join(",\n") // 担当者名をカンマ区切りの文字列に変換
            : Object(users).name;

          console.log(userNames);
          // 田中店長

          // 顧客情報を返す
          return {
            id: customer.id,
            customer_name: customer.customer_name,
            phone_number: customer.phone_number,
            remarks: customer.remarks,
            course: courseNames,
            option: optionNames,
            merchandise: merchandiseNames,
            hairstyle: hairstyleNames,
            names: userNames,
          };
        }),
      ]
    : [];

  return (
    <div>
      <div>
        {cMessage && (
          <BasicAlerts
            type="success"
            message={cMessage}
            space={1}
            padding={0.6}
          />
        )}
        {cError && (
          <BasicAlerts type="error" message={cError} space={1} padding={0.6} />
        )}
      </div>
      {cStatus === "loading" || !nodes || permission === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-4">
          <div className="my-4 ">
            <RouterButton link="/customers/create" value="顧客新規作成" />
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/customers"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default customers;
