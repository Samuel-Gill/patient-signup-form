import React, { useState } from 'react';
import { Form, Button, Upload, DatePicker, Input, Select } from 'antd';
import { Country, State, City } from 'country-state-city';
import { UploadOutlined, RightCircleOutlined } from '@ant-design/icons';
import InsuranceForm from './InsuranceForm.jsx';
import FamilyDetails from './FamilyDetails.jsx';
import "../index.css";
import { Typography } from 'antd';

const { Title } = Typography;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 6,
        },
        sm: {
            span: 16,
            offset: 11,
        },
    },
};

//For DOB
const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};

//For ID snapshot
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

//Personal Information Component
export const PersonalData = () => {
    const [city, setCity] = useState(City.getAllCities());
    const [state, setState] = useState(State.getAllStates());
    const [next, setNext] = useState(false);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        alert("Form Submitted Successfully");
    };

    //Phone extensions
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="+91">+91</Option>
                <Option value="+92">+92</Option>
            </Select>
        </Form.Item>
    );

    //Continue to next page
    const onContinue = () => {
        setNext(true);
    }

    return (
        <>
            <Title level={3}>Personal Information</Title>

            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
            >
                {/* Phone */}
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                {/* Email  */}
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* First Name */}
                <Form.Item name={['user', 'fname']} label="First name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                {/* Last Name */}
                <Form.Item name={['user', 'lname']} label="Last name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                {/* Date of Birth */}
                <Form.Item name="date-picker" label="DatePicker" {...config}>
                    <DatePicker />
                </Form.Item>

                {/* Gender */}
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                    </Select>
                </Form.Item>

                {/* Address */}
                <Form.Item name={['address']} label="Address" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                {/* City */}
                <Form.Item name="city" label="City"
                    rules={[
                        {
                            required: true,
                            message: 'Please select city!',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select City"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {city.map((city) => (<Select.Option value={city.name}>{city.name}</Select.Option>))}
                    </Select>
                </Form.Item>

                {/* State */}
                <Form.Item name="state" label="State"
                    rules={[
                        {
                            required: true,
                            message: 'Please select state!',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select State"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {state.map((state) => (<Select.Option value={state.name}>{state.name}</Select.Option>))}
                    </Select>
                </Form.Item>

                {/* Zip Code */}
                <Form.Item name={['zipcode']} label="Zip Code" rules={[{ required: true }]}>
                    <Input type="number" />
                </Form.Item>

                {/* ID Snapshot */}
                <Form.Item
                    name="id_snapshot"
                    label="ID Snapshot"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload ID Snapshot</Button>
                    </Upload>
                </Form.Item>

                {/* Insurance Status */}
                <InsuranceForm />

                {/* Family Details */}
                <FamilyDetails />

                {/* Register Button */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}