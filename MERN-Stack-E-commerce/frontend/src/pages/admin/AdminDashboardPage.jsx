import { Row, Col, Card, Statistic } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminDashboardPage = () => {
  const productSalesData = [
    { name: "January", itemsSold: 10 },
    { name: "February", itemsSold: 15 },
    { name: "March", itemsSold: 20 },
    { name: "April", itemsSold: 25 },
    { name: "May", itemsSold: 30 },
    { name: "June", itemsSold: 35 },
  ];

  const customerData = [
    { name: "January", customerNumber: 20 },
    { name: "February", customerNumber: 25 },
    { name: "March", customerNumber: 30 },
    { name: "April", customerNumber: 10 },
    { name: "May", customerNumber: 40 },
    { name: "June", customerNumber: 45 },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Product Sales" value={120} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Number of Customers" value={50} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Income" value={3000} prefix="€" />
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: "20px" }}>
        <h2>Product Sales Increase in the Last Month</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={productSalesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="itemsSold"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card style={{ marginTop: "20px" }}>
        <h2>Customer Increase in the Last Month</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={customerData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="customerNumber"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
