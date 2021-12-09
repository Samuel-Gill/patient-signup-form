import React from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

//For Insurance ID
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const InsuranceDetail = () => {
    return (
        <>
            <Row>
                <Col span={12} offset={4}>
                    <Form.Item
                        name="idInsurance"
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
                </Col>
            </Row>
        </>
    )
}

export default InsuranceDetail
