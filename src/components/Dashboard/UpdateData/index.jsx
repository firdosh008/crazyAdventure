import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Upload, message, Space, Input, Row, Col } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const UpdateData = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [trekName, setTrekName] = useState(""); // State to store the trek name
    const [price, setPrice] = useState(""); // State to store the price
    const [duration, setDuration] = useState(""); // State to store trek duration
    const [rating, setRating] = useState(""); // State to store rating
    const [location, setLocation] = useState(""); // State to store location
    const [listing, setListing] = useState(""); // State to store listing info
    const [category, setCategory] = useState(""); // State to store category
    const [file, setFile] = useState(null);

    // Fetch all tour data
    const fetchImages = () => {
        setLoading(true);
        axios
            .get("http://localhost:5000/api/tour")
            .then((response) => {
                console.log("Fetched tours:", response.data);
                setImages(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                message.error("Failed to fetch trekking details.");
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchImages();
    }, []);

    // Handle Upload
    const handleUpload = () => {
        if (!file || !trekName || !price || !duration || !rating || !location || !listing || !category) {
            message.warning("Please provide all the required details.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("image_name", trekName);
        formData.append("price", price);
        formData.append("days", duration);
        formData.append("rating", rating);
        formData.append("location", location);
        formData.append("listing", listing);
        formData.append("category", category);

        setLoading(true);
        axios
            .post("http://localhost:5000/api/tour/upload", formData) // Upload to the 'tour' table
            .then(() => {
                message.success("Trek uploaded successfully!");
                fetchImages(); // Refresh the list
                setTrekName("");
                setPrice("");
                setDuration("");
                setRating("");
                setLocation("");
                setListing("");
                setCategory("");
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
            .delete(`http://localhost:5000/api/tour/${id}`) // Delete from the 'tour' table
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
            render: (text) => (text ? text : "-"),
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => (rating ? `${rating} ★` : "-"),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => (price ? `₹${price}/Person` : "-"),
        },
        {
            title: "Duration",
            dataIndex: "days",
            key: "days",
            render: (days) => (days ? `${days} Days` : "-"),
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (location) => (location ? location : "-"),
        },
        {
            title: "Listing",
            dataIndex: "listing",
            key: "listing",
            render: (listing) => (listing ? listing : "-"),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (category) => (category ? category : "-"),
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
                padding: "10px",
            }}
        >
            {/* Header */}
            <Typography.Title level={2}>Upload Trekking Packages</Typography.Title>

            {/* Upload Form */}
            <Space style={{ marginBottom: "20px", width:"100%", display: "flex", flexDirection: "column" }}>
                <Row style={{ marginBottom: "10px" }}>
                    <Col span={12}>
                        <Input
                            placeholder="Enter trek name"
                            value={trekName}
                            onChange={(e) => setTrekName(e.target.value)}
                            size="medium"
                        />
                    </Col>
                    <Col span={12}>
                        <Input
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            size="medium"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                    <Col span={12}>
                        <Input
                            placeholder="Enter duration (in days)"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            size="medium"
                        />
                    </Col>
                    <Col span={12}>
                        <Input
                            placeholder="Enter rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            size="medium"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                    <Col span={12}>
                        <Input
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            size="medium"
                        />
                    </Col>
                    <Col span={12}>
                        <Input
                            placeholder="Enter listing"
                            value={listing}
                            onChange={(e) => setListing(e.target.value)}
                            size="medium"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                    <Col span={12}>
                        <Input
                            placeholder="Enter category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            size="medium"
                        />
                    </Col>
                    <Col span={12}>
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
                    </Col>
                </Row>
                <Button type="primary" onClick={handleUpload} loading={loading}>
                    Upload
                </Button>
            </Space>

            {/* Table for Uploaded Treks */}
            <Table
                style={{ width: "100%", maxWidth: "1100px" }}
                loading={loading}
                columns={columns}
                dataSource={images.map((image) => ({ ...image, key: image.id }))}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default UpdateData;
