import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Upload, message, Space, Input } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const PopularTour = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trekName, setTrekName] = useState(""); // State to store the trek name
  const [price, setPrice] = useState(""); // State to store the price
  const [duration, setDuration] = useState(""); // State to store trek duration
  const [rating, setRating] = useState(""); // State to store rating
  const [file, setFile] = useState(null);

  // Fetch images (Trekking details)
  const fetchImages = () => {
    setLoading(true);
    axios
      .get("http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/most_popular_tours/fetch")
      .then((response) => {
        console.log("Fetched images:", response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        message.error("Failed to fetch trekking details.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle Upload
  const handleUpload = () => {
    if (!file || !trekName || !price || !duration || !rating) {
      message.warning("Please provide all the required details.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("image_name", trekName);
    formData.append("price", price);
    formData.append("days", duration);
    formData.append("rating", rating);

    setLoading(true);
    axios
      .post("http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/most_popular_tours/upload", formData)
      .then(() => {
        message.success("Trek uploaded successfully!");
        fetchImages(); // Refresh the list
        setTrekName("");
        setPrice("");
        setDuration("");
        setRating("");
        setFile(null);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        message.error("Failed to upload trek details.");
      })
      .finally(() => setLoading(false));
  };

  // Handle Delete
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/most_popular_tours/${id}`)
      .then(() => {
        message.success("Trek deleted successfully!");
        fetchImages();
      })
      .catch((error) => {
        console.error("Delete failed:", error);
        message.error("Failed to delete trek.");
      })
      .finally(() => setLoading(false));
  };

  // Columns for the Table
  const columns = [
    {
      title: "Trek Name",
      dataIndex: "image_name",
      key: "image_name",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <span>{rating ? `${rating} ★` : "No rating available"}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <span>₹{price}/Person</span>,
    },
    {
      title: "Duration",
      dataIndex: "days",
      key: "days",
      render: (days) => <span>{days} Days</span>,
    },
    {
      title: "Preview",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Uploaded Trek"
          style={{ width: "80px", borderRadius: "5px" }}
        />
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
      <Typography.Title level={2}>Upload Trekking Packages</Typography.Title>

      {/* Upload Form */}
      <Space style={{ marginBottom: "20px" }}>
        <Input
          placeholder="Enter trek name"
          value={trekName}
          onChange={(e) => setTrekName(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter duration (in days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: "200px" }}
        />
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

      {/* Table for Uploaded Treks */}
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

export default PopularTour;
