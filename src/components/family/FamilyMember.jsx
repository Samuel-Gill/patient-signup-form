import React, { useState } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox, Upload } from 'antd';
import InsuranceDetail from '../insurance/InsuranceDetail.jsx';
import { UploadOutlined } from '@ant-design/icons';
const { Title } = Typography;

//For Insurance ID
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const FamilyMember = (props) => {

    const insuranceStatusPatient = useSelector(state => state.insurance);

    //Family member insurance status
    const [status, setStatus] = useState("");

    return (
        <>
            <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                    name={[props.name, 'first']}
                    fieldKey={[props.fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                >
                    <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                    name={[props.name, 'last']}
                    fieldKey={[props.fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                >
                    <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                    name={[props.name, 'date']}
                    fieldKey={[props.fieldKey, 'date']}
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Please select time!',
                        },
                    ]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={[props.name, 'insurance_status']}
                    fieldKey={[props.fieldKey, 'insurance_status']}
                    rules={[
                        {
                            required: true,
                            message: 'Please select insurance status!',
                        },
                    ]}
                >
                    <Select placeholder="Insurance Status" onChange={(value => { setStatus(value) })}>
                        <Select.Option value="same" disabled={insuranceStatusPatient}>Same</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                        <Select.Option value="none" >None</Select.Option>
                    </Select>
                </Form.Item>

                {/* Insurance Details */}

                {status === "other" ?
                    (
                        <>
                            <Space direction="vertical">
                                <Form.Item
                                    name={[props.name, 'insurance_id']}
                                    fieldKey={[props.fieldKey, 'insurance_id']}
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
                                    name={[props.name, 'insurance_companies']}
                                    fieldKey={[props.fieldKey, 'insurance_companies']}
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

                                <Form.Item
                                    name={[props.name, 'insurance_number']}
                                    fieldKey={[props.fieldKey, 'insurance_number']}
                                    label="Insurance Number" rules={[{ required: true }]}>
                                    <Input type="number" />
                                </Form.Item>
                            </Space>
                        </>
                    )
                    : status === "none" ?
                        (
                            <Form.Item

                                name={[props.name, 'insurance_detail']}
                                fieldKey={[props.fieldKey, 'insurance_detail']}
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                            >
                                <Checkbox checked>Attest Insurance</Checkbox>
                            </Form.Item>
                        ) :
                        null}
            </Space>
        </>
    )
}

export default FamilyMember
