import React, { useEffect, useState } from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import Reviews from "./Reviews";
import UpdateData from "./UpdateData";
import { Menu } from "antd";
import {
  CloudDownloadOutlined,
  UploadOutlined,
  PictureOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("1");

  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("islogin"));
    const isAdmin = JSON.parse(localStorage.getItem("admin"));

    if (!isLogin) {
      navigate("/");
    } else if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  const styles = {
    dashboard: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    },
    mainContent: {
      display: "flex",
      flex: 1,
      marginTop: "80px",
    },
    sidebar: {
      width: "250px",
      backgroundColor: "#fff",
      boxShadow: "2px 0 6px rgba(0, 0, 0, 0.1)",
    },
    content: {
      flex: 1,
      padding: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  };

  // Tab Content based on selectedKey
  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <Bookings />;
      case "2":
        return <UpdateData />;
      case "3":
        return <div>Blogs Content</div>;
      case "4":
        return <Reviews />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div style={styles.dashboard}>
      <Header />
      <div style={styles.mainContent}>
        {/* Sidebar */}
        <Menu
          style={styles.sidebar}
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
        >
          <Menu.Item key="1" icon={<CloudDownloadOutlined />}>
            View Booking
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            Update Data
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Blogs
          </Menu.Item>
          <Menu.Item key="4" icon={<PictureOutlined />}>
            Reviews
          </Menu.Item>
        </Menu>

        {/* Main Content */}
        <div style={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
