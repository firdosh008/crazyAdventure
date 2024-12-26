import { Space, Table, Typography, Button, message } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // Fetch bookings
  const getBookingsData = () => {
    return fetch("http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/bookings").then((res) => res.json());
  };

  // Fetch data when the component loads
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    getBookingsData()
      .then((res) => {
        setDataSource(res);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        message.error("Failed to fetch bookings.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle Delete Booking
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/bookings/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          message.success("Booking deleted successfully!");
          fetchData(); // Refresh bookings list
        } else {
          throw new Error("Failed to delete booking.");
        }
      })
      .catch((error) => {
        console.error("Delete failed:", error);
        message.error("Failed to delete booking.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Title */}
      <Typography.Title level={2}>Booking List</Typography.Title>

      {/* Booking Table */}
      <Table
        style={{ width: "100%", maxWidth: "1500px" }}
        loading={loading}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Phone Number",
            dataIndex: "phone_number",
            key: "phone_number",
          },
          {
            title: "Country Code",
            dataIndex: "country_code",
            key: "country_code",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Trek Name",
            dataIndex: "trekname",
            key: "trekname",
          },
          {
            title: "Number of People",
            dataIndex: "number_of_people",
            key: "number_of_people",
          },
          {
            title: "Trek Date",
            dataIndex: "trek_date",
            key: "trek_date",
            render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
          },
          {
            title: "Total Price",
            dataIndex: "price",
            key: "price",
            render: (value) => <span>₹{value}</span>,
          },
          {
            title: "Booking Date",
            dataIndex: "booking_date",
            key: "booking_date",
            render: (value) => <span>{new Date(value).toLocaleString()}</span>,
          },
          {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
              <Space>
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export default Orders;
