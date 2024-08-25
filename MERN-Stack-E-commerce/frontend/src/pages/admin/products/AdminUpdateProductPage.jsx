import { Button, Form, Input, message, Spin, InputNumber, Select } from "antd";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

const AdminUpdateProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch product details to populate the form
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/products/${id}`);
        const productData = await response.json();
        form.setFieldsValue(productData); // Populate the form with product data
      } catch (error) {
        console.error("Failed to fetch product", error);
        message.error("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch categories for the select dropdown
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchProduct();
    fetchCategories();
  }, [apiUrl, form, id]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Product updated successfully");
        navigate(`/admin/products`);
      } else {
        message.error("Failed to update product");
      }
    } catch (error) {
      console.error("Failed to update product", error);
      message.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="update-product"
        layout="horizontal"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select a category!",
            },
          ]}
        >
          <Select placeholder="Select a category">
            {categories.map((category) => (
              <Option key={category._id} value={category._id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Current Price"
          name={["price", "current"]}
          rules={[
            {
              required: true,
              message: "Please input current price!",
            },
          ]}
        >
          <InputNumber
            min={0}
            style={{ width: "50%" }}
            formatter={(value) => `€ ${value}`}
          />
        </Form.Item>

        <Form.Item label="Discount Percent" name={["price", "discount"]}>
          <InputNumber
            min={0}
            max={99}
            style={{ width: "50%" }}
            formatter={(value) => `% ${value}`}
          />
        </Form.Item>

        <Form.Item
          label="Images (URLs)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please input at least one image URL!",
            },
          ]}
        >
          <Select
            mode="tags"
            placeholder="Enter image URLs"
            tokenSeparators={[","]}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input product description!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Colors"
          name="colors"
          rules={[
            {
              required: true,
              message: "Please input available colors!",
            },
          ]}
        >
          <Select
            mode="tags"
            placeholder="Enter colors"
            tokenSeparators={[","]}
          />
        </Form.Item>

        <Form.Item
          label="Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Please input available sizes!",
            },
          ]}
        >
          <Select
            mode="tags"
            placeholder="Enter sizes"
            tokenSeparators={[","]}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default AdminUpdateProductPage;
