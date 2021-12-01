import React, { useState } from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from '../redux/actions/insurance.js';
//import FamilyDetails from './FamilyDetails.jsx';
import { Typography } from 'antd';
import InsuranceForm from './InsuranceForm.jsx';

const { Title } = Typography;

//For Insurance ID
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

//Form
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

const formItemLayout1 = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
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
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const InsuranceDetail = () => {
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const insuranceStatus = useSelector(state => state.insurance);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        alert("Form Submitted Successfully");
        <Alert message="Form Submitted Successfully" type="success" />
    };
    const [hasInsurance, setHasInsurance] = useState(false);

    //Yes-No Insurance check
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        dispatch(setStatus(!checked));
        checked ? setHasInsurance(true) : setHasInsurance(false)
    }

    return (
        <>
            {/* 
            <Form
                {...formItemLayout}
                form={form}
                name="insurance_info"
                onFinish={onFinish}
                scrollToFirstError
            > */}

            <Form.Item
                name="id_insurance"
                label="ID Insurance"
                valuePropName="fileList"
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
            {/* 
                <Form.Item {...tailFormItemLayout}>
                </Form.Item> */}
            {/* 
            </Form> */}
        </>
    )
}

export default InsuranceDetail
