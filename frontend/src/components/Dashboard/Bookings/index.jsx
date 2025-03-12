import { Space, Table, Typography, Button, message } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { URLS } from "../../../Utils/urls";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // Fetch bookings
  const getBookingsData = () => {
    return fetch(`${URLS.backendUrl}/api/bookings`).then((res) => res.json());
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
        console.log(res);
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
    fetch(`${URLS.backendUrl}/api/bookings/${id}`, { method: "DELETE" })
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

  // Helper function to format price
  const formatPrice = (value) => {
    const number = parseFloat(value) || 0;
    return `₹${number.toFixed(2)}`;
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
            title: "S.No",
            key: "serialNumber",
            render: (_, __, index) => index + 1,
            width: 80,
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
            title: "Phone",
            dataIndex: "phone_number",
            key: "phone_number",
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
            title: "People Count",
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
            title: "Track Price",
            dataIndex: "price",
            key: "price",
            render: (value) => <span>{formatPrice(value)}</span>,
          },
          {
            title: "Amount Paid",
            dataIndex: "amount_paid",
            key: "amount_paid",
            render: (value) => <span>{formatPrice(value)}</span>,
          },
          {
            title: "Amount paid with charges",
            dataIndex: "price_with_charges",
            key: "price_with_charges",
            render: (value) => <span>{formatPrice(value)}</span>,
          },
          {
            title: "Remaining Amount",
            dataIndex: "remaining_amount",
            key: "remaining_amount",
            render: (value) => <span>{formatPrice(value)}</span>,
          },
          {
            title: "User ID",
            dataIndex: "user_id",
            key: "user_id",
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
          onChange: (page) => {
            window.scrollTo(0, 0);
          },
        }}
      />
    </div>
  );
}

export default Orders;
