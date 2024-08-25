import {
  Button,
  Form,
  Input,
  message,
  Popconfirm,
  Space,
  Table,
  Spin,
} from "antd";
import { useState, useEffect, useCallback } from "react";

const AdminCouponPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editingCoupon, setEditingCoupon] = useState(null); // State for editing coupon

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Discount Percent",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (text) => `${text}%`,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => onEditCoupon(record)}>
            Update
          </Button>
          <Popconfirm
            title="Are you sure to delete this coupon?"
            onConfirm={() => deleteCoupon(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const fetchCoupons = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Failed to fetch coupons.");
      }
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
      message.error("Failed to fetch coupons.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteCoupon = async (couponId) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Coupon deleted successfully");
        setDataSource((prevDataSource) =>
          prevDataSource.filter((item) => item._id !== couponId)
        );
      } else {
        message.error("Failed to delete coupon.");
      }
    } catch (error) {
      console.error("Failed to delete coupon:", error);
      message.error("Failed to delete coupon.");
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (editingCoupon) {
        // Update existing coupon
        const response = await fetch(
          `${apiUrl}/api/coupons/${editingCoupon._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          message.success("Coupon updated successfully");
          setEditingCoupon(null); // Clear the editing state
          form.resetFields();
          fetchCoupons(); // Refresh the list of coupons
        } else {
          message.error("Failed to update coupon.");
        }
      } else {
        // Create new coupon
        const response = await fetch(`${apiUrl}/api/coupons`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          message.success("Coupon created successfully");
          form.resetFields();
          fetchCoupons(); // Refresh the list of coupons
        } else {
          message.error("Failed to create coupon.");
        }
      }
    } catch (error) {
      console.error("Failed to submit coupon:", error);
      message.error("Failed to submit coupon.");
    } finally {
      setLoading(false);
    }
  };

  const onEditCoupon = (coupon) => {
    setEditingCoupon(coupon);
    form.setFieldsValue({
      code: coupon.code,
      discountPercent: coupon.discountPercent,
    });
  };

  const onCancelEdit = () => {
    setEditingCoupon(null);
    form.resetFields();
  };

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: "20px" }}
      >
        <Form.Item
          name="code"
          rules={[{ required: true, message: "Please input coupon code!" }]}
        >
          <Input placeholder="Coupon Code" />
        </Form.Item>
        <Form.Item
          name="discountPercent"
          rules={[
            { required: true, message: "Please input discount percent!" },
          ]}
        >
          <Input
            placeholder="Discount Percent"
            type="number"
            min={0}
            max={100}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {editingCoupon ? "Update Coupon" : "Create Coupon"}
          </Button>
          {editingCoupon && (
            <Button onClick={onCancelEdit} style={{ marginLeft: "8px" }}>
              Cancel
            </Button>
          )}
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="_id"
        pagination={{ pageSize: 7 }}
      />
    </Spin>
  );
};

export default AdminCouponPage;
