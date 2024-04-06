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

const ComponentTable = ({ nodes, nodesProps, tHeaderItems }) => {
  const { search, handleSearch } = useSearchLogic();
  const { pagination, handlePageChange } = usePaginationLogic();

  const data = {
    nodes: nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
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

  return (
    <div className="px-4 py-8 overflow-auto sm:overflow-hidden">
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

      <Table
        data={paginatedData}
        className="rounded-xl"
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
                    className="bg-blue-200 text-blue-700  "
                    style={{ padding: "16px 24px" }}
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
                        className="bg-gray-100 text-gray-900 text-3xl "
                        style={{
                          padding: "16px 24px",
                          cursor: "pointer",
                          overflow: "auto",
                        }}
                      >
                        <BasicModal
                          type={propName} // プロパティ名をtypeとして渡す
                          openModal={propValue} // 対応する値をopenModalとして渡す
                        />
                      </Cell>
                    );
                  })}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

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
