import { Modal, Tag } from "antd";
import { ProductType } from "../../ interface/product";

interface Prop {
  product?: ProductType;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ModalProductDetail = ({
  product,
  isModalOpen,
  handleOk,
  handleCancel,
}: Prop) => {
  return (
    <Modal
      title="Product Detail"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>{product?.name}</div>
      <div>{product?.price}</div>
      <div>{product?.quantity}</div>
      <div>
        {product?.info?.color.map((color) => (
          <Tag>{color}</Tag>
        ))}
      </div>
      <div>{product?.info?.size}</div>
      <div>{product?.info?.description}</div>
    </Modal>
  );
};

export default ModalProductDetail;
