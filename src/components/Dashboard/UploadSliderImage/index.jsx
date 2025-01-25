import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Upload, message, Space } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { URLS } from "../../../Utils/urls";

const UploadSliderImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  // Fetch images
  const fetchImages = () => {
    setLoading(true);
    axios
      .get(`${URLS.backendUrl}:5000/api/hero_section`)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        message.error("Failed to fetch images.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle Upload
  const handleUpload = () => {
    if (!file) {
      message.warning("Please choose an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    axios
      .post(`${URLS.backendUrl}:5000/api/hero_section/upload`, formData)
      .then(() => {
        message.success("Image uploaded successfully!");
        fetchImages(); // Refresh the list
        setFile(null);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        message.error("Failed to upload image.");
      })
      .finally(() => setLoading(false));
  };

  // Handle Delete
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`${URLS.backendUrl}:5000/api/hero_section/${id}`)
      .then(() => {
        message.success("Image deleted successfully!");
        fetchImages(); // Refresh the list
      })
      .catch((error) => {
        console.error("Delete failed:", error);
        message.error("Failed to delete image.");
      })
      .finally(() => setLoading(false));
  };

  // Columns for the Table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Preview",
      dataIndex: "image_data",
      key: "image_data",
      render: (imageData) => (
        <img src={imageData} alt="Uploaded" style={{ width: "80px", borderRadius: "5px" }} />
      ),
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
  ];

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
      {/* Header */}
      <Typography.Title level={2}>Upload Slider Images</Typography.Title>

      {/* Upload Form */}
      <Space style={{ marginBottom: "20px" }}>
        <Upload
          beforeUpload={(file) => {
            setFile(file);
            return false;
          }}
          maxCount={1}
          accept="image/*"
        >
          <Button icon={<UploadOutlined />}>Choose Image</Button>
        </Upload>
        <Button type="primary" onClick={handleUpload} loading={loading}>
          Upload
        </Button>
      </Space>

      {/* Table for Uploaded Images */}
      <Table
        style={{ width: "100%", maxWidth: "1000px" }}
        loading={loading}
        columns={columns}
        dataSource={images.map((image) => ({ ...image, key: image.id }))}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default UploadSliderImages;
