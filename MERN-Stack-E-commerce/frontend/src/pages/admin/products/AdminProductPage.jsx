import { Button, message, Popconfirm, Space, Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProductPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Images",
      dataIndex: "img",
      key: "img",
      render: (imgArray) => (
        <img
          src={imgArray[0]}
          alt="Product"
          width={100}
          style={{ marginRight: 8 }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Colors",
      dataIndex: "colors",
      key: "colors",
      render: (colorsArray) => colorsArray.join(", "),
    },
    {
      title: "Sizes",
      dataIndex: "sizes",
      key: "sizes",
      render: (sizesArray) => sizesArray.join(", "),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) =>
        price.discount ? (
          <>
            <span>€{price.current}</span>
            <span style={{ display: "block" }}>%{price.discount}</span>
          </>
        ) : (
          `$${price.current}`
        ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category?.name || "N/A",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`update/${record._id}`)}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => deleteProduct(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Failed to fetch products. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred while fetching products: ", error);
      message.error("Unable to fetch products due to a network error.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Product deleted successfully");
        setDataSource((prevDataSource) =>
          prevDataSource.filter((product) => product._id !== productId)
        );
      } else {
        message.error("Failed to delete product. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred while deleting product: ", error);
      message.error("Unable to delete product due to a network error.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default AdminProductPage;
