import { Button, message, Popconfirm, Table } from "antd";
import { useCallback, useEffect, useState } from "react";

const AdminUserPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="Avatar"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Delete the user"
          description="Are you sure to delete this user?"
          onConfirm={() => deleteUser(record.email)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Failed to fetch users. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred while fetching users: ", error);
      message.error("Unable to fetch users due to a network error.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("User deleted successfully");
        setDataSource((prevDataSource) =>
          prevDataSource.filter((user) => user.email !== userEmail)
        );
      } else {
        message.error("Failed to delete user. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred while deleting user: ", error);
      message.error("Unable to delete user due to a network error.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default AdminUserPage;
