import React, { useState, useEffect } from "react";
import { Table, Typography, Button, Popconfirm, Space, Input, Select, message, Modal, Form } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { URLS } from "../../../Utils/urls";

const { Option } = Select;

function UpdateData() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        days: "",
        rating: "",
        location: "",
        listing: "",
        category: "",
        imageUrl: "", // New field to store the image URL
    });
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);
    const [editForm] = Form.useForm();

    // Fetch Trek Data
    const fetchTrekData = () => {
        setLoading(true);
        axios
            .get(`${URLS.backendUrl}:5000/api/tour`)
            .then((response) => {
                setDataSource(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(() => {
                message.error("Failed to fetch trek data.");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchTrekData();
    }, []);

    // Handle Upload (Add Image URL instead of file)
    const handleUpload = () => {
        const { name, price, days, rating, location, listing, category, imageUrl } = formData;
        const uploadData = new FormData();
        uploadData.append("name", name);
        uploadData.append("price", price);
        uploadData.append("days", days);
        uploadData.append("rating", rating);
        uploadData.append("location", location);
        uploadData.append("listing", listing);
        uploadData.append("category", category);
        uploadData.append("image", imageUrl); // Image URL

        axios
            .post(`${URLS.backendUrl}:5000/api/tour/upload`, uploadData)
            .then(() => {
                message.success("Trek uploaded successfully!");
                fetchTrekData();
                setFormData({
                    name: "",
                    price: "",
                    days: "",
                    rating: "",
                    location: "",
                    listing: "",
                    category: "",
                    imageUrl: "", // Reset the image URL input
                });
            })
            .catch(() => message.error("Failed to upload trek."));
    };

    // Handle Delete
    const handleDelete = (id) => {
        axios
            .delete(`${URLS.backendUrl}:5000/api/tour/${id}`)
            .then(() => {
                message.success("Trek deleted successfully!");
                setDataSource((prev) => prev.filter((item) => item.id !== id));
            })
            .catch(() => message.error("Failed to delete the trek."));
    };

    // Handle Edit
    const handleEdit = (record) => {
        setCurrentEditId(record.id);
        setEditModalVisible(true);
        editForm.setFieldsValue({
            name: record.image_name,
            price: record.price,
            days: record.days,
            rating: record.rating,
            location: record.location,
            listing: record.listing,
            category: record.category,
            imageUrl: record.image_url, // Set image URL in the form
        });
    };

    const handleEditSubmit = () => {
        editForm.validateFields().then((values) => {
            const updateData = new FormData();
            updateData.append("name", values.name);
            updateData.append("price", values.price);
            updateData.append("days", values.days);
            updateData.append("rating", values.rating);
            updateData.append("location", values.location);
            updateData.append("listing", values.listing);
            updateData.append("category", values.category);
            updateData.append("image", values.imageUrl); // Image URL instead of file

            axios
                .put(`${URLS.backendUrl}:5000/api/tour/update/${currentEditId}`, updateData)
                .then(() => {
                    message.success("Trek updated successfully!");
                    setEditModalVisible(false);
                    fetchTrekData();
                })
                .catch(() => message.error("Failed to update the trek."));
        });
    };

    // Table Columns
    const columns = [
        {
            title: "Trek Name",
            dataIndex: "image_name",
            key: "image_name",
            render: (text) => text || "-",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => price ? `₹${price}` : "-",
        },
        {
            title: "Duration",
            dataIndex: "days",
            key: "days",
            render: (days) => days ? `${days} Days` : "-",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => rating ? `${rating} ★` : "-",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (location) => location || "-",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (category) => category || "-",
        },
        {
            title: "Image",
            dataIndex: "image_url",
            key: "image_url",
            render: (imageUrl) => (
                imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Trek"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                ) : (
                    "-"
                )
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this trek?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
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
            <Typography.Title level={2}>Upload Trekking Packages</Typography.Title>

            {/* Upload Form */}
            <Space style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Input
                    placeholder="Enter trek name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Enter duration"
                    value={formData.days}
                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Select
                    placeholder="Select Rating"
                    value={formData.rating}
                    onChange={(value) => setFormData({ ...formData, rating: value })}
                    style={{ width: "200px" }}
                >
                    <Option value={1}>1 ★</Option>
                    <Option value={2}>2 ★</Option>
                    <Option value={3}>3 ★</Option>
                    <Option value={4}>4 ★</Option>
                    <Option value={5}>5 ★</Option>
                </Select>
                <Input
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Enter category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Enter image URL"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Button type="primary" onClick={handleUpload} loading={loading}>
                    Upload
                </Button>
            </Space>

            {/* Table for Trek Data */}
            <Table
                style={{ width: "100%", maxWidth: "1000px" }}
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 5 }}
                rowKey="id"
            />

            {/* Edit Modal */}
            <Modal
                title="Edit Trek"
                open={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                onOk={handleEditSubmit}
            >
                <Form form={editForm} layout="vertical">
                    <Form.Item name="name" label="Trek Name" rules={[{ required: true }]}>
                        <Input placeholder="Trek Name" />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                        <Input placeholder="Price" />
                    </Form.Item>
                    <Form.Item name="days" label="Duration" rules={[{ required: true }]}>
                        <Input placeholder="Duration" />
                    </Form.Item>
                    <Form.Item name="rating" label="Rating" rules={[{ required: true }]}>
                        <Select placeholder="Select Rating">
                            <Option value={1}>1 ★</Option>
                            <Option value={2}>2 ★</Option>
                            <Option value={3}>3 ★</Option>
                            <Option value={4}>4 ★</Option>
                            <Option value={5}>5 ★</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="location" label="Location" rules={[{ required: true }]}>
                        <Input placeholder="Location" />
                    </Form.Item>
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                        <Input placeholder="Category" />
                    </Form.Item>
                    <Form.Item name="imageUrl" label="Image URL" rules={[{ required: true }]}>
                        <Input placeholder="Image URL" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default UpdateData;
