import React, { useState } from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//import { Row, Col } from 'antd';
//import { useSelector, useDispatch } from "react-redux";
//import { setStatus } from '../redux/actions/insurance.js';
//import FamilyDetails from './FamilyDetails.jsx';
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

//For Insurance ID
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const InsuranceDetail = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        alert("Form Submitted Successfully");
    };

    return (
        <>
            <br />
            <Form.Item
                name="id_insurance"
                label="ID Insurance"
                valuePropName="fileList"
                rules={[
                    {
                        required: true,
                        message: 'Please attach ID Snapshot!',
                    },
                ]}
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload Insurance Id</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="companies"
                label="Insurance Companies"
                rules={[
                    {
                        required: true,
                        message: 'Please select companies!',
                    },
                ]}
            >
                <Select placeholder="select insurance company">
                    <Select.Option value="insurance_c1">Insurance_c1</Select.Option>
                    <Select.Option value="insurance_c2">Insurance_c2</Select.Option>
                    <Select.Option value="insurance_c3">Insurance_c3</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name={['insurance number']} label="Insurance Number" rules={[{ required: true }]}>
                <Input type="number" />
            </Form.Item>
        </>
    )
}

export default InsuranceDetail
