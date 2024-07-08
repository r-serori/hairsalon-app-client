// ComponentTable.js
import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useState } from "react";
import { usePaginationLogic } from "./pagenation";
import BasicModal from "../modal";
import { useTheme } from "@table-library/react-table-library/theme";
import { useRouter } from "next/router";
import DeleteMan from "../../DeleteMan/[DeleteMan]/[id]";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import StockNotice from "../../stockNotice/StockNotice";
import AttendanceTimeResult from "../../attendanceTimeResult/AttendanceTimeResult";

interface ComponentTableProps {
  nodes: any;
  searchItems: any;
  nodesProps: any;
  tHeaderItems: string[];
  link: string;
  role: string;
}

const ComponentTable: React.FC<ComponentTableProps> = ({
  nodes,
  searchItems,
  nodesProps,
  tHeaderItems,
  link,
  role,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("");

  const { pagination, handlePageChange } = usePaginationLogic();
  // usePageReload(() => {
  //   setSearchText("");
  // });

  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  // console.log("nodesだよ");
  // console.log(nodes); // [{id: 1, attendance_name: "田中店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}, {id: 2, attendance_name: "佐藤店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}]

  //dataという新しいオブジェクトを作成
  const data = {
    nodes: nodes.filter((node) =>
      nodesProps.some((nodesProp) => {
        const propName = Object.keys(nodesProp)[0];
        // console.log("propNameだよ");
        // console.log(propName); //attendance_name
        const propValue = node[nodesProp[propName]];
        const propProp = nodesProp[propName];
        // console.log("propValueだよ");
        // console.log(propValue); //attendance_name

        const searchResult =
          propProp.toString().includes(searchField || "") &&
          propValue.toString().includes(searchText || "");

        // console.log("searchResultだよ");
        // console.log(searchResult);

        return searchResult;
      })
    ),
  };

  // console.log("searchFieldだよ");
  // console.log(searchField); //名前

  // console.log("searchTextだよ");
  // console.log(searchText); //田中

  // console.log("dataだよ");
  // console.log(data); //{nodes: Array(2)}
  // 検索処理,onChange処理をカスタムフックで定義,searchの値をstateとして持つ

  const paginatedData = {
    nodes: data.nodes.slice(
      pagination.page * pagination.size,
      (pagination.page + 1) * pagination.size
    ),
  };

  const pageInfo = {
    total: data.nodes.length,
    startSize: pagination.page * pagination.size + 1,
    endSize: Math.min(
      (pagination.page + 1) * pagination.size,
      data.nodes.length
    ),
    totalPages:
      data.nodes.length < 11
        ? 0
        : Math.ceil(data.nodes.length / pagination.size),
  };

  const columnCount = tHeaderItems.length;

  const gridTemplateColumns = `repeat(${columnCount},1fr)`;

  const theme = useTheme({
    Table: `--data-table-library_grid-template-columns:
    ${gridTemplateColumns};
    overflow-auto sm:overflow-hidden
  `,
    BaseRow: `border-b border-gray-900`,
  });

  const router = useRouter();

  //時間管理画面へ遷移
  const handleTimeManagement = (id) => {
    router.push(`attendance_times/${id}/show?id=${id}`);
  };

  //編集画面へ遷移
  const handleEditManagement = (nodeId, link) => {
    // console.log("nodeIdだよヨヨヨ");
    // console.log(nodeId);
    router.push(`${link}/${nodeId}/edit?id=${nodeId}`);
  };

  return (
    <div className="items-center px-2">
      <div className="flex items-end">
        <div className="ml-auto">
          {link === "/stocks" && data && (
            <StockNotice nodes={nodes} setSearch={setSearchText} />
          )}

          {link === "/attendance_times" && data && (
            <AttendanceTimeResult nodes={nodes} />
          )}
        </div>
      </div>

      <div className="items-center flex justify-between items-center mb-4  ">
        <label
          htmlFor="searchField"
          className="items-center block font-bold  text-lg"
        >
          検索カテゴリ :{" "}
          <select
            id="searchField"
            name="searchField"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="items-center pr-16 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          >
            <option value="">すべて</option>
            {searchItems.map((searchItem, index) => {
              const searchKey = searchItem.key;
              const searchValue = searchItem.value; // 検索対象のキーを取得,attendance_name
              // console.log("searchKeyだよ");
              // console.log(searchKey); //名前

              return (
                <option key={index} value={searchKey}>
                  {searchValue}
                </option>
              );
            })}
          </select>
        </label>

        <label
          htmlFor="searchText"
          className="items-center block  font-bold text-lg"
        >
          検索ワード名 :{" "}
          <input
            type="text"
            id="searchText"
            name="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // イベントオブジェクトを明示的に渡す
            placeholder="検索ワード"
            className="items-center py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </label>

        <div className="items-center flex space-x-2 ">
          <div>
            <span className="items-center text-gray-700  font-medium  text-lg">
              全件数: {pageInfo.total}件
            </span>
          </div>
          <span className="items-center text-gray-700 text-lg">
            {pageInfo.startSize}-{pageInfo.endSize} 件目 / 全 {pageInfo.total}{" "}
            件
          </span>
          <div className="items-center flex space-x-2">
            <button
              type="button"
              disabled={pagination.page === 0 || data.nodes.length < 11}
              onClick={() => handlePageChange(pagination.page === 0)}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 
              focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
               dark:shadow-green-800/80  font-medium rounded-lg text-md px-4 py-1.5 text-center "
            >
              {"<<"}
            </button>
            <button
              type="button"
              disabled={pagination.page === 0 || data.nodes.length < 11}
              onClick={() => handlePageChange(pagination.page - 1)}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
               shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  font-medium rounded-lg text-md px-4 py-1.5 text-center "
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={
                pagination.page + 1 === pageInfo.totalPages ||
                data.nodes.length < 11
              }
              onClick={() => handlePageChange(pagination.page + 1)}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg 
              dark:shadow-teal-800/80 font-medium rounded-lg text-md px-4 py-1.5 text-center "
            >
              {">"}
            </button>
            <button
              type="button"
              disabled={
                pagination.page + 1 === pageInfo.total || data.nodes.length < 11
              }
              onClick={() => handlePageChange(pageInfo.totalPages - 1)}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
              focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-md px-4 py-1.5 text-center "
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>

      <Table
        data={paginatedData}
        className="items-center rounded-xl border border-gray-300 shadow-md mt-2 overflow-scroll"
        theme={theme}
        layout={{ custom: true, horizontalScroll: true }}
      >
        {(tableList) => (
          <>
            <Header>
              <HeaderRow className="border-b-2 border-gray-900">
                {/* Headerのカラム数を数える */}
                {tHeaderItems.map((tHeaderItem, index) => (
                  <HeaderCell
                    key={`${tHeaderItem} + ${index}`}
                    className="items-center bg-blue-300 text-blue-800 text-center p-2"
                  >
                    {tHeaderItem}
                  </HeaderCell>
                ))}
              </HeaderRow>
            </Header>

            <Body>
              {/* Bodyの横行を数える */}
              {tableList.map((node, index) => (
                <Row key={`${index} + ${node.id} `} item={node}>
                  {/* nodeの縦列を数える */}
                  {nodesProps.map((nodesProp) => {
                    const propName = Object.keys(nodesProp)[0]; //  Object.keysは()内＝nodesProp　のkeyを取得　[0]は一番上のkeyを取得　mapで一つ一つ取得してるから一番上[0]にあるのは一つだけ

                    const propValue = node[nodesProp[propName]];
                    //nodesProp[propName]はnodesPropのvalueを取得しているので、nodeのkeyとpropNameが一致しているものを取得している

                    const propProp = nodesProp[propName];

                    const imgUrl = "http://localhost:8000/storage/";

                    const imgDecode = decodeURIComponent(propValue);
                    // console.log("imgDecodeだよ", imgDecode);

                    if (
                      propProp === "created_at" ||
                      propProp === "updated_at"
                    ) {
                      const propDate =
                        new Date(propValue).getFullYear().toString() +
                        "/" +
                        (new Date(propValue).getMonth() + 1).toString() +
                        "/" +
                        new Date(propValue).getDate().toString() +
                        " " +
                        new Date(propValue).getHours().toString() +
                        ":" +
                        new Date(propValue).getMinutes().toString();
                      return (
                        <Cell
                          key={`${propDate} + ${propName} + ${node.id} + ${index} `}
                          className="items-center bg-gray-100 text-gray-900  text-center border-b-2 border-gray-300"
                        >
                          {propDate}
                        </Cell>
                      );
                    } else if (
                      propProp === "date" ||
                      propProp === "daily_sales" ||
                      propProp === "year_month" ||
                      propProp === "monthly_sales" ||
                      propProp === "year" ||
                      propProp === "yearly_sales" ||
                      propProp === "shotUserName" ||
                      propProp === "attendanceNow" ||
                      propProp === "name" ||
                      propProp === "staff_phone_number" ||
                      propProp === "role" ||
                      role === "スタッフ"
                    ) {
                      return (
                        <Cell
                          key={`${propValue} + ${propName} + ${node.id}+ ${index} + ${propProp}
                          + ${role}`}
                          className="items-center bg-gray-100 text-gray-900  text-center border-b-2 border-gray-300"
                        >
                          {propValue}
                        </Cell>
                      );
                    } else if (
                      propProp === "start_time" ||
                      propProp === "end_time"
                    ) {
                      return (
                        <Cell
                          key={`${propValue} + ${propName} + ${node.id}+ ${index} + ${propProp}
                          + ${role}`}
                          className="items-center bg-gray-100 text-gray-900  text-center border-b-2 border-gray-300"
                        >
                          {propValue
                            ? dayjs(propValue)
                                .tz("Asia/Tokyo")
                                .format("YYYY/MM/DD HH:mm")
                            : "未登録"}
                        </Cell>
                      );
                    } else if (
                      propProp === "start_photo_path" ||
                      propProp === "end_photo_path"
                    ) {
                      return (
                        <Cell
                          key={
                            propProp === "start_photo_path"
                              ? `${propValue} + ${propName} + ${node.id}+ ${index} + start`
                              : `${propValue} + ${propName} + ${node.id}+ ${index} + end`
                          }
                          className="items-center bg-gray-100 text-gray-900 text-center pb-1 border-b-2 border-gray-300"
                        >
                          <div className="flex justify-center items-center text-center mx-auto">
                            <img
                              key={
                                propProp === "start_photo_path"
                                  ? `${propValue} + ${propName} + ${node.id}+ ${index} + start`
                                  : `${propValue} + ${propName} + ${node.id}+ ${index} + end`
                              }
                              src={
                                propValue === "111222"
                                  ? "https://dummyimage.com/320x240/000/fff&text=編集済み"
                                  : propValue &&
                                    propValue !== "111222" &&
                                    propProp === "start_photo_path"
                                  ? imgUrl + decodeURIComponent(propValue)
                                  : propValue &&
                                    propValue !== "111222" &&
                                    propProp === "end_photo_path"
                                  ? imgUrl + decodeURIComponent(propValue)
                                  : "https://dummyimage.com/320x240/000/fff&text=未登録"
                              }
                              alt="画像"
                              className="w-36 h-28 object-cover object-fill"
                            />
                          </div>
                        </Cell>
                      );
                    } else {
                      return (
                        <Cell
                          key={`${propValue} + ${propName} + ${node.id}+ ${index} + ${propProp}
                          + ${role}`}
                          className="items-center bg-gray-100 text-gray-900 text-xl text-center pointer  border-b-2 border-gray-300"
                        >
                          <BasicModal
                            type={propName}
                            editValue={propValue}
                            editNode={node}
                            NodesProp={nodesProp[propName]}
                            link={link}
                          />
                        </Cell>
                      );
                    }
                  })}
                  {/* tHeaderItemsに"出勤"が含まれていたら作成 */}
                  {tHeaderItems.includes("出勤") ||
                  tHeaderItems.includes("出勤時間と写真を編集") ? (
                    <Cell
                      className="items-center bg-gray-100 text-gray-900 pt-1 pr-1 border-b-2 border-gray-300"
                      style={
                        node.attendanceNow === "勤務中"
                          ? { cursor: "not-allowed" }
                          : { cursor: "pointer" }
                      }
                    >
                      {node.attendanceNow === "勤務中" ? (
                        <div className="w-full y-full p-4 ">
                          今日も１日頑張りましょう！！
                        </div>
                      ) : (
                        <div className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg  text-center ml-2 pointer ">
                          <BasicModal
                            editValue={
                              link === "/attendance_times"
                                ? "出勤時間と写真を編集"
                                : link === "/attendanceTimeShots"
                                ? "出勤"
                                : "出勤時間と写真を編集"
                            }
                            editNode={node}
                            link={
                              link === "/attendance_times"
                                ? "/attendanceTimeStart"
                                : link === "/attendanceTimeShots"
                                ? "/attendanceTimeShots"
                                : "/attendance_times"
                            }
                          />
                        </div>
                      )}
                    </Cell>
                  ) : (
                    ""
                  )}
                  {/* tHeaderItemsに"退勤"が含まれていたら作成 */}
                  {tHeaderItems.includes("退勤") ||
                  tHeaderItems.includes("退勤時間と写真を編集") ? (
                    <Cell
                      className="items-center bg-gray-100 text-gray-900 pt-1 pr-1 border-b-2 border-gray-300"
                      style={
                        node.attendanceNow === "退勤中"
                          ? { cursor: "not-allowed" }
                          : { cursor: "pointer" }
                      }
                    >
                      {node.attendanceNow === "退勤中" ? (
                        <div className="w-full y-full p-4  text-center ">
                          今日も１日お疲れ様でした！！
                        </div>
                      ) : (
                        <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  text-center ml-2 pointer">
                          <BasicModal
                            editValue={
                              link === "/attendance_times"
                                ? "退勤時間と写真を編集"
                                : link === "/attendanceTimeShots"
                                ? "退勤"
                                : "退勤時間と写真を編集"
                            }
                            editNode={node}
                            link={
                              link === "/attendance_times"
                                ? "/attendanceTimeEnd"
                                : link === "/attendanceTimeShots"
                                ? "/attendanceTimeShots"
                                : "/attendance_times"
                            }
                          />
                        </div>
                      )}
                    </Cell>
                  ) : (
                    ""
                  )}
                  {/* tHeaderItemsに"編集"が含まれていたら作成 */}
                  {tHeaderItems.includes("編集") && (
                    // console.log("編集nodeだよ"),
                    // console.log(node.id),
                    <Cell className="items-center bg-gray-100 text-gray-900 pt-1 px-1 pointer border-b-2 border-gray-300">
                      <div className="flex justify-center items-center text-center mx-auto pb-1">
                        <button
                          className="items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg  px-4 py-2 text-center "
                          onClick={() => handleEditManagement(node.id, link)}
                        >
                          編集
                        </button>
                      </div>
                    </Cell>
                  )}
                  {/* tHeaderItemsに"削除"が含まれていたら作成 */}
                  {tHeaderItems.includes("削除") && (
                    <Cell className="items-center bg-gray-100 text-gray-900 py-1 pr-1 pointer border-b-2 border-gray-300">
                      <div className="items-center mx-auto text-center">
                        <DeleteMan id={node.id} link={link} />
                      </div>
                    </Cell>
                  )}

                  {/* tHeaderItemsに"時間管理"が含まれていたら作成 */}
                  {tHeaderItems.includes("勤怠時間管理") && (
                    <Cell className="items-center bg-gray-100 text-gray-900 pt-1 pr-1 pointer border-b-2 border-gray-300">
                      <div className="flex justify-center items-center text-center mx-auto pb-1">
                        <button
                          onClick={() => handleTimeManagement(node.id)}
                          className="items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-4 py-2 text-center "
                        >
                          勤怠時間管理
                        </button>
                      </div>
                    </Cell>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
};

export default ComponentTable;
