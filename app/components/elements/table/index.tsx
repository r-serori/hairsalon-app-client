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
import { useSearchLogic } from "./search";
import { usePaginationLogic } from "./pagenation";
import BasicModal from "../modal";
import { useTheme } from "@table-library/react-table-library/theme";
import { useRouter } from "next/router";
import DeleteMan from "../../DeleteMan/[DeleteMan]/[id]";

const ComponentTable = ({
  nodes,
  searchItems,
  nodesProps,
  tHeaderItems,
  link,
}) => {
  const {
    searchText,
    searchField,
    handleSearchTextChange,
    handleSearchFieldChange,
  } = useSearchLogic();
  const { pagination, handlePageChange } = usePaginationLogic();

  console.log("nodesだよ");
  console.log(nodes); // [{id: 1, attendance_name: "田中店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}, {id: 2, attendance_name: "佐藤店長", phone_number: "090-1234-5678", position: "店長", address: "東京都千代田区"}]

  //dataという新しいオブジェクトを作成
  const data = {
    nodes: nodes.filter((node) =>
      nodesProps.some((nodesProp) => {
        const propName = Object.keys(nodesProp)[0];
        const propValue = node[nodesProp[propName]];
        const propProp = nodesProp[propName];

        const searchResult =
          propProp.includes(searchField || "") &&
          propValue &&
          propValue.includes(searchText);

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

  // const handleItemClick = (node, nodesProps) => {
  //   setNode(node);
  //   setNodesProps(nodesProps);
  // };

  //時間管理画面へ遷移
  const handleTimeManagement = (id) => {
    router.push(`/attendance_times/${id}`);
  };

  //編集画面へ遷移
  const handleEditManagement = (id, link) => {
    router.push(`${link}/[id]/edit?id=${id}`);
  };

  return (
    <div className="px-4 py-8 ">
      <label htmlFor="searchField" className="block mb-2 ">
        検索対象↓:
      </label>
      <select
        id="searchField"
        value={searchField}
        onChange={handleSearchFieldChange}
        className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
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

      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange} // イベントオブジェクトを明示的に渡す
        placeholder="検索"
        className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 ml-2"
      />

      <div className="w-auto overflow-x-scroll">
        <Table
          data={paginatedData}
          className="rounded-xl border border-gray-300 shadow-md w-full"
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        >
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {/* Headerのカラム数を数える */}
                  {tHeaderItems.map((tHeaderItem) => (
                    <HeaderCell
                      key={tHeaderItem}
                      className="bg-blue-200 text-blue-700 text-center text-xl "
                      style={{
                        padding: "8px",
                        whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                      }}
                    >
                      {tHeaderItem}
                    </HeaderCell>
                  ))}
                </HeaderRow>
              </Header>

              <Body>
                {/* Bodyの横行を数える */}
                {tableList.map((node) => (
                  <Row key={node.id} item={node} className="">
                    {/* Bodeの縦列を数える */}
                    {nodesProps.map((nodesProp) => {
                      const propName = Object.keys(nodesProp)[0]; //  Object.keysは()内＝nodesProp　のkeyを取得　[0]は一番上のkeyを取得　mapで一つ一つ取得してるから一番上[0]にあるのは一つだけ

                      const propValue = node[nodesProp[propName]];
                      //nodesProp[propName]はnodesPropのvalueを取得しているので、nodeのkeyとpropNameが一致しているものを取得している

                      const propProp = nodesProp[propName];

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
                            key={propValue}
                            className="bg-gray-100 text-gray-900 text-3xl text-center "
                            style={{
                              cursor: "pointer",
                              padding: "8px",
                              whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                            }}
                          >
                            <BasicModal
                              type={propName}
                              editValue={propDate}
                              editNode={node}
                              NodesProp={nodesProp[propName]}
                              link={link}
                            />
                          </Cell>
                        );
                      } else {
                        return (
                          <Cell
                            key={propValue}
                            className="bg-gray-100 text-gray-900 text-3xl text-center "
                            style={{
                              cursor: "pointer",
                              padding: "8px",
                              whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                            }}
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
                    {/* tHeaderItemsに"編集"が含まれていたら作成 */}
                    {tHeaderItems.includes("編集") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl "
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="text-center mx-auto overflow-auto">
                          <button
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2"
                            onClick={() => handleEditManagement(node.id, link)}
                          >
                            編集
                          </button>
                        </div>
                      </Cell>
                    )}
                    {/* tHeaderItemsに"削除"が含まれていたら作成 */}
                    {tHeaderItems.includes("削除") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl"
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="text-center mx-auto ">
                          <DeleteMan id={node.id} link={link} />
                        </div>
                      </Cell>
                    )}

                    {/* tHeaderItemsに"時間管理"が含まれていたら作成 */}
                    {tHeaderItems.includes("時間管理") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl"
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          overflow: "auto",
                        }}
                      >
                        <div className="text-center mx-auto">
                          <button
                            onClick={() => handleTimeManagement(node.id)}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
                          >
                            時間管理
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
      <div className="flex justify-between items-center mt-8  ">
        <div>
          <span className="text-gray-700">全件数: {pageInfo.total}</span>
        </div>
        <div className="flex space-x-2">
          <span className="text-gray-700">
            {pageInfo.startSize}-{pageInfo.endSize} 件目 / 全 {pageInfo.total}{" "}
            件
          </span>
          <div className="flex space-x-2">
            <button
              type="button"
              disabled={pagination.page === 0}
              onClick={() => handlePageChange(0)}
              className="btn-pagination"
            >
              {"|<"}
            </button>
            <button
              type="button"
              disabled={pagination.page === 0}
              onClick={() => handlePageChange(pagination.page - 1)}
              className="btn-pagination "
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={pagination.page + 1 === pageInfo.totalPages}
              onClick={() => handlePageChange(pagination.page + 1)}
              className="btn-pagination"
            >
              {">"}
            </button>
            <button
              type="button"
              disabled={pagination.page + 1 === pageInfo.totalPages}
              onClick={() => handlePageChange(pageInfo.totalPages - 1)}
              className="btn-pagination"
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
