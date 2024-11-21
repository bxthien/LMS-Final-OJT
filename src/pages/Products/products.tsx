import { Image, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import { getProduct, getProductDetail } from "../../api/product";
import EditIC from "../../assets/svgs/write.svg";
import { ProductType } from "../../ interface/product";
import ModalProductDetail from "../../components/Modal/ModalProductDetail";

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
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      render: (_: string, record: ProductType) => <>{record.category.name}</>,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
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
    <>
      <Table columns={columns} dataSource={products} />
      <ModalProductDetail
        product={productDetail}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
  return "oke";
};

export default Products;
