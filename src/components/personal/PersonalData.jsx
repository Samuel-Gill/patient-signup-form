import React, { useState } from 'react';
import { Form, Button, Upload, DatePicker, Input, Select, Switch } from 'antd';
import { State, City } from 'country-state-city';
import { Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

//For DOB
const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select date of birth!',
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

    //Phone extensions
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                placeholder="Ext"
                style={{
                    width: 70,
                }}
            >
                <Option value="+91">+91</Option>
                <Option value="+92">+92</Option>
            </Select>
        </Form.Item>
    );

    return (
        <>
            <Title level={3}>Personal Information</Title>

            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 18, offset: 3 }} lg={{ span: 14, offset: 5 }} xl={{ span: 12, offset: 6 }}>
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
                    <Form.Item name={['first', 'Name']} label="First name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    {/* Last Name */}
                    <Form.Item name={['last', 'Name']} label="Last name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    {/* Date of Birth */}
                    <Form.Item name="dob" label="Date of Birth" {...config}>
                        <DatePicker placeholder="YYYY-MM-DD" picker={"date"}
                            disabledDate={(d) => d.isAfter(new Date())}
                            format="YYYY-MM-DD"
                            disabledTime={true}
                        />
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
                        name="idSnapshot"
                        label="ID Snapshot"
                        rules={[
                            {
                                required: true,
                                message: 'Please attach ID Snapshot!',
                            },
                        ]}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />} className="uploadButton">Click to upload ID Snapshot</Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}