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
  useCustom,
} from "@table-library/react-table-library/table";
import { useSearchLogic } from "./search";
import { usePaginationLogic } from "./pagenation";
import BasicModal from "../modal";
import { useTheme } from "@table-library/react-table-library/theme";
import Link from "next/link";
import { useRouter } from "next/router";

const ComponentTable = ({ nodes, nodesProps, tHeaderItems, link }) => {
  const { search, handleSearch } = useSearchLogic();
  const { pagination, handlePageChange } = usePaginationLogic();

  // nodesPropの０番目を検索対象とする
  const data = {
    nodes: nodes.filter((item) =>
      nodesProps.some((nodesProp) => {
        const propName = Object.keys(nodesProp)[0];
        const propValue = item[nodesProp[propName]];
        return (
          propValue &&
          propValue.toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    ),
  };

  useCustom("search", data, {
    state: { search },
    onChange: onSearchChange,
  });

  function onSearchChange(action, state) {
    console.log(action, state);
  }

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

  const handleTimeManagement = (id) => {
    router.push(`/attendance_times/${id}`);
  };

  return (
    <div className="px-4 py-8 ">
      <div className=" mb-4 ">
        <label htmlFor="search" className="block mb-2 ">
          検索↓:
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
          className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          placeholder="検索..."
        />
      </div>

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
                  {tHeaderItems.map((tHeaderItem) => (
                    <HeaderCell
                      key={tHeaderItem}
                      className="bg-blue-200 text-blue-700 text-center text-xl "
                      style={{
                        padding: "16px",
                        whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                      }}
                    >
                      {tHeaderItem}
                    </HeaderCell>
                  ))}
                </HeaderRow>
              </Header>

              <Body>
                {tableList.map((item) => (
                  <Row key={item.id} item={item} className="">
                    {nodesProps.map((nodesProp) => {
                      const propName = Object.keys(nodesProp)[0]; // プロパティ名を取得
                      const propValue = item[nodesProp[propName]]; // 対応する値を取得
                      return (
                        <Cell
                          key={propValue}
                          className="bg-gray-100 text-gray-900 text-3xl text-center "
                          style={{
                            cursor: "pointer",
                            padding: "16px",
                            whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                          }}
                        >
                          <BasicModal
                            type={propName} // プロパティ名をtypeとして渡す
                            openModal={propValue} // 対応する値をopenModalとして渡す
                          />
                        </Cell>
                      );
                    })}
                    {/* tHeaderItemsに"編集"が含まれていたら作成 */}
                    {tHeaderItems.includes("編集") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl "
                        style={{
                          padding: "16px",
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="text-center mx-auto overflow-auto">
                          <Link href={`${link}/edit/${item.id}`}>
                            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2">
                              編集
                            </button>
                          </Link>
                        </div>
                      </Cell>
                    )}
                    {/* tHeaderItemsに"削除"が含まれていたら作成 */}
                    {tHeaderItems.includes("削除") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl"
                        style={{
                          padding: "16px",
                          cursor: "pointer",
                          whiteSpace: "pre-wrap", // テキストの自動改行を有効にする
                        }}
                      >
                        <div className="text-center mx-auto ">
                          <Link href={`${link}/delete/${item.id}`}>
                            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2">
                              削除
                            </button>
                          </Link>
                        </div>
                      </Cell>
                    )}

                    {/* tHeaderItemsに"時間管理"が含まれていたら作成 */}
                    {tHeaderItems.includes("時間管理") && (
                      <Cell
                        className="bg-gray-100 text-gray-900 text-3xl"
                        style={{
                          padding: "16px",
                          cursor: "pointer",
                          overflow: "auto",
                        }}
                      >
                        <div className="text-center mx-auto">
                          <button
                            onClick={() => handleTimeManagement(item.id)}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
