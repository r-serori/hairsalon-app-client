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

const ComponentTable = ({ nodes, nodesItems, tHeaderItems }) => {
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

  return (
    <>
      <div className="mx-auto max-w-3l px-4 py-8 w-full ">
        <div className="mb-4">
          <label htmlFor="search" className="block mb-2">
            Search by Task:
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            className=" px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <Table data={paginatedData} className="rounded-xl">
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {tHeaderItems.map((tHeaderItem) => (
                    <HeaderCell
                      key={tHeaderItem}
                      className="bg-blue-200 text-blue-700 "
                      style={{ padding: "16px 24px" }}
                    >
                      {tHeaderItem}
                    </HeaderCell>
                  ))}
                </HeaderRow>
              </Header>

              <Body>
                {tableList.map((item) => (
                  <Row key={item.id} item={item}>
                    {nodesItems.map((nodesItem) => (
                      <Cell
                        key={nodesItem}
                        className="bg-gray-100 text-gray-900 "
                        style={{ padding: "16px 24px" }}
                      >
                        {item[nodesItem.toLowerCase()]}
                      </Cell>
                    ))}
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
    </>
  );
};

export default ComponentTable;
