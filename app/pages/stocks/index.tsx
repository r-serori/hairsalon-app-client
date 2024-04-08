import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const stocks: React.FC = () => {
  //コースカテゴリをとってきて、nosesPropsに追加する
  const stockCategories = [
    {
      id: 1,
      category: "整髪料",
    },
    {
      id: 2,
      category: "化粧品",
    },
  ];

  const stocks = [
    {
      id: 1,
      product_name: "ワックス",
      product_price: 1500,
      quantity: 20,
      remarks: "ツヤ",
      supplier: "資生堂",
      stock_category_id: 1,
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      product_name: "化粧水",
      product_price: 2000,
      quantity: 10,
      remarks: "保湿",
      supplier: "資生堂",
      stock_category_id: 2,
      updated_at: "2024-01-01",
    },
  ];

  const tHeaderItems = [
    "在庫カテゴリ",
    "商品名",
    "価格",
    "数量",
    "備考",
    "仕入れ先",
    "更新日",
    "編集",
    "削除",
  ];

  const nodesProps = [
    { text: "category_name" },
    { text: "product_name" },
    { number: "product_price" },
    { number: "quantity" },
    { text: "remarks" },
    { text: "supplier" },
    { date: "updated_at" },
  ];

  //stocksのstock_category_idとstockCategoriesのidが一致するものをnodesに追加する
  const nodes = [
    ...stocks.map((stock) => {
      const categoryAndStock = stockCategories.find(
        (category) => category.id === stock.stock_category_id
      );
      return {
        id: stock.id,
        category_name: categoryAndStock.category,
        product_name: stock.product_name,
        product_price: stock.product_price,
        quantity: stock.quantity,
        remarks: stock.remarks,
        supplier: stock.supplier,
        updated_at: stock.updated_at,
      };
    }),

    // 他の行データもここに追加する
  ];
  return (
    <div>
      <h1>stocks</h1>
      <Link href="/stocks/create">新規作成</Link>
      <br />
      <Link href="/stocks/[id]/edit?id=1">編集</Link>
      <br />
      <Link href="/stocks/[id]/delete?id=1">削除</Link>
      <br />
      <Link href="/stocks/[id]/search/[search_stock]?id=id&search_stock=search_stock">
        検索
      </Link>
      <br />
      <Link href="/stock_categories">カテゴリ画面</Link>

      <br />

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/stocks"
      />
    </div>
  );
};

export default stocks;
