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

const ComponentTable = ({
  nodes,
  searchItems,
  nodesProps,
  tHeaderItems,
  link,
  isLoading,
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

  console.log("nodesだよ");
  console.log(nodes); // [{id: 1, attendance_name: "田中店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}, {id: 2, attendance_name: "佐藤店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}]

  //dataという新しいオブジェクトを作成
  const data = {
    nodes: nodes.filter((node) =>
      nodesProps.some((nodesProp) => {
        const propName = Object.keys(nodesProp)[0];
        console.log("propNameだよ");
        console.log(propName); //attendance_name
        const propValue = node[nodesProp[propName]];
        const propProp = nodesProp[propName];
        console.log("propValueだよ");
        console.log(propValue); //attendance_name

        const searchResult =
          propProp.toString().includes(searchField || "") &&
          propValue.toString().includes(searchText || "");

        console.log("searchResultだよ");
        console.log(searchResult);

        return searchResult;
      })
    ),
  };

  console.log("searchFieldだよ");
  console.log(searchField); //名前

  console.log("searchTextだよ");
  console.log(searchText); //田中

  console.log("dataだよ");
  console.log(data); //{nodes: Array(2)}
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
    totalPages: Math.ceil(data.nodes.length / pagination.size),
  };

  const columnCount = tHeaderItems.length;

  const gridTemplateColumns = `repeat(${columnCount},1fr)`;

  const theme = useTheme({
    Table: `--data-table-library_grid-template-columns:
    ${gridTemplateColumns};
    overflow-auto sm:overflow-hidden
  `,
  });

  const router = useRouter();

  //時間管理画面へ遷移
  const handleTimeManagement = (id) => {
    router.push(`attendance_times/${id}/show?id=${id}`);
  };

  //編集画面へ遷移
  const handleEditManagement = (nodeId, link) => {
    console.log("nodeIdだよヨヨヨ");
    console.log(nodeId);
    router.push(`${link}/${nodeId}/edit?id=${nodeId}`);
  };

  return (
    <div className="items-center px-2">
      <div className="flex items-end ">
        <div>
          <label htmlFor="searchField" className="items-center block ">
            検索カテゴリ:
            <select
              id="searchField"
              name="searchField"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              className="items-center pr-16 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            >
              <option value="">すべて</option>
              {searchItems.map((searchItem) => {
                const searchKey = searchItem.key;
                const searchValue = searchItem.value; // 検索対象のキーを取得,attendance_name
                console.log("searchKeyだよ");
                console.log(searchKey); //名前

                return (
                  <option key={searchKey} value={searchKey}>
                    {searchValue}
                  </option>
                );
              })}
            </select>
          </label>

          <label htmlFor="searchText" className="items-center block mt-4">
            検索ワード名:
            <input
              type="text"
              id="searchText"
              name="searchText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} // イベントオブジェクトを明示的に渡す
              placeholder="検索ワード"
              className="items-center py-2 pl-1 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div className="ml-auto">
          {link === "/stocks" && data && (
            <StockNotice nodes={nodes} setSearch={setSearchText} />
          )}

          {link === "/attendance_times" && data && (
            <AttendanceTimeResult nodes={nodes} />
          )}
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={paginatedData}
          className="items-center rounded-xl border border-gray-300 shadow-md w-full mt-4"
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        >
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {/* Headerのカラム数を数える */}
                  {tHeaderItems.map((tHeaderItem, index) => (
                    <HeaderCell
                      key={`${tHeaderItem} + ${index}`}
                      className="items-center bg-blue-200 text-blue-700 text-center text-sm "
                      style={{
                        whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        padding: "4px",
                      }}
                    >
                      {tHeaderItem}
                    </HeaderCell>
                  ))}
                </HeaderRow>
              </Header>

              <Body>
                {/* Bodyの横行を数える */}
                {tableList.map((node, index) => (
                  <Row key={`${index} `} item={node}>
                    {/* nodeの縦列を数える */}
                    {nodesProps.map((nodesProp) => {
                      const propName = Object.keys(nodesProp)[0]; //  Object.keysは()内＝nodesProp　のkeyを取得　[0]は一番上のkeyを取得　mapで一つ一つ取得してるから一番上[0]にあるのは一つだけ

                      const propValue = node[nodesProp[propName]];
                      //nodesProp[propName]はnodesPropのvalueを取得しているので、nodeのkeyとpropNameが一致しているものを取得している

                      const propProp = nodesProp[propName];

                      const imgUrl = "http://localhost:8000/";

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
                            className="items-center bg-gray-100 text-gray-900 text-sm text-center "
                            style={{
                              cursor: "pointer",
                              whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                            }}
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
                        propProp === "isAttendance"
                      ) {
                        return (
                          <Cell
                            key={`${propValue} + ${propName} + ${node.id}+ ${index}`}
                            className="items-center bg-gray-100 text-gray-900 text-sm text-center"
                            style={{
                              cursor: "pointer",
                            }}
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
                            key={`${propValue} + ${propName} + ${node.id}+ ${index}`}
                            className="items-center bg-gray-100 text-gray-900 text-xl text-center"
                            style={{
                              cursor: "pointer",
                            }}
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
                            className="items-center bg-gray-100 text-gray-900 text-center pb-1 "
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <div className="flex justify-center items-center text-center mx-auto">
                              <img
                                key={
                                  propProp === "start_photo_path"
                                    ? `${propValue} + ${propName} + ${node.id}+ ${index} + start`
                                    : `${propValue} + ${propName} + ${node.id}+ ${index} + end`
                                }
                                src={
                                  propValue === "編集済み"
                                    ? "https://dummyimage.com/320x240/000/fff&text=編集済み"
                                    : propValue &&
                                      propValue !== "編集済み" &&
                                      propProp === "start_photo_path"
                                    ? imgUrl +
                                      "attendance_times/images/startPhotos/" +
                                      propValue
                                    : propValue &&
                                      propValue !== "編集済み" &&
                                      propProp === "end_photo_path"
                                    ? imgUrl +
                                      "attendance_times/images/endPhotos/" +
                                      propValue
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
                            key={`${propValue} + ${propName} + ${node.id}+ ${index}`}
                            className="items-center bg-gray-100 text-gray-900 text-sm text-center"
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <BasicModal
                              type={propName}
                              editValue={propValue}
                              editNode={node}
                              NodesProp={nodesProp[propName]}
                              link={link}
                              isLoading={isLoading}
                            />
                          </Cell>
                        );
                      }
                    })}
                    {/* tHeaderItemsに"出勤"が含まれていたら作成 */}
                    {tHeaderItems.includes("出勤") ||
                    tHeaderItems.includes("出勤時間と写真を編集") ? (
                      <Cell
                        className="items-center bg-gray-100 text-gray-900 pt-1 pr-1 "
                        style={{
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        {node.isAttendance === "勤務中" ? (
                          <div className="w-full y-full p-4 ">
                            今日も１日頑張りましょう！！
                          </div>
                        ) : (
                          <div className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm text-center ml-2　pointer ">
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
                              isLoading={isLoading}
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
                        className="items-center bg-gray-100 text-gray-900 pt-1 pr-1"
                        style={{
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        {node.isAttendance === "退勤中" ? (
                          <div className="w-full y-full p-4  ">
                            今日も１日お疲れ様でした！！
                          </div>
                        ) : (
                          <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm text-center ml-2 pointer">
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
                              isLoading={isLoading}
                            />
                          </div>
                        )}
                      </Cell>
                    ) : (
                      ""
                    )}
                    {/* tHeaderItemsに"編集"が含まれていたら作成 */}
                    {tHeaderItems.includes("編集") &&
                      (console.log("編集nodeだよ"),
                      console.log(node.id),
                      (
                        <Cell
                          className="items-center bg-gray-100 text-gray-900 pt-1 px-1"
                          style={{
                            cursor: "pointer",
                            whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                          }}
                        >
                          <div className="flex justify-center items-center text-center mx-auto pb-1">
                            <button
                              className="items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center "
                              onClick={() =>
                                handleEditManagement(node.id, link)
                              }
                            >
                              編集
                            </button>
                          </div>
                        </Cell>
                      ))}
                    {/* tHeaderItemsに"削除"が含まれていたら作成 */}
                    {tHeaderItems.includes("削除") && (
                      <Cell
                        className="items-center bg-gray-100 text-gray-900 py-1 pr-1 "
                        style={{
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="items-center mx-auto text-center ">
                          <DeleteMan id={node.id} link={link} />
                        </div>
                      </Cell>
                    )}

                    {/* tHeaderItemsに"時間管理"が含まれていたら作成 */}
                    {tHeaderItems.includes("時間管理") && (
                      <Cell
                        className="items-center bg-gray-100 text-gray-900 pt-1 pr-1"
                        style={{
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="flex justify-center items-center text-center mx-auto pb-1">
                          <button
                            onClick={() => handleTimeManagement(node.id)}
                            className="items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center "
                          >
                            時間管理
                          </button>
                        </div>
                      </Cell>
                    )}

                    {/* tHeaderItemsに"予約"が含まれていたら作成 */}
                    {/* {tHeaderItems.includes("時間管理") && (
                      <Cell
                        className="items-center bg-gray-100 text-gray-900 text-3xl pt-2"
                        style={{
                          cursor: "pointer",
                          overflow: "auto",
                        }}
                      >
                        <div className="items-center text-center mx-auto">
                          <button
                            onClick={() => handleReservation(node.id)}
                            className="items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
                          >
                            予約
                          </button>
                        </div>
                      </Cell>
                    )} */}
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      )}
      <div className="items-center flex justify-between items-center mt-8  ">
        <div>
          <span className="items-center text-gray-700">
            全件数: {pageInfo.total}
          </span>
        </div>
        <div className="items-center flex space-x-2">
          <span className="items-center text-gray-700">
            {pageInfo.startSize}-{pageInfo.endSize} 件目 / 全 {pageInfo.total}{" "}
            件
          </span>
          <div className="items-center flex space-x-2">
            <button
              type="button"
              disabled={pagination.page === 0}
              onClick={() => handlePageChange(0)}
              className="items-center btn-pagination"
            >
              {"|<"}
            </button>
            <button
              type="button"
              disabled={pagination.page === 0}
              onClick={() => handlePageChange(pagination.page - 1)}
              className="items-center btn-pagination "
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={pagination.page + 1 === pageInfo.totalPages}
              onClick={() => handlePageChange(pagination.page + 1)}
              className="items-center btn-pagination"
            >
              {">"}
            </button>
            <button
              type="button"
              disabled={pagination.page + 1 === pageInfo.totalPages}
              onClick={() => handlePageChange(pageInfo.totalPages - 1)}
              className="items-center btn-pagination"
            >
              {">|"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTable;
