import { Button, Image, Input, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import { getProduct, getProductDetail } from "../../api/product";
import EditIC from "../../assets/svgs/write.svg";
import { ProductType } from "../../interface/product";
import DrawerProductDetail from "../../components/Modal/ModalProductDetail";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productDetail, setProductDetail] = useState<ProductType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActionClick = async (id: string) => {
    try {
      const productDetail = await getProductDetail(id);
      setProductDetail(productDetail);
      showModal();
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const columns: TableProps<ProductType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "category",
      render: (_: string, record: ProductType) => <>{record.category.name}</>,
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 200,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 200,
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record: ProductType) => (
        <Space className="" size="middle" onClick={showModal}>
          {/* <a>Delete</a> */}
          <Image
            className=""
            src={EditIC}
            preview={false}
            onClick={() => handleActionClick(record.id)}
          />
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProduct();
        setProducts(data);
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <Input className="max-w-[300px]" placeholder="Search by product name" />
        <Input className="max-w-[300px]" placeholder="Search by product name" />
        <Input className="max-w-[300px]" placeholder="Search by product name" />
        <Button>Search</Button>
      </div>
      <Table columns={columns} dataSource={products} scroll={{ y: 500 }} />
      <DrawerProductDetail
        product={productDetail}
        isDrawerOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Products;
