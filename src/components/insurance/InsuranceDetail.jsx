import React from 'react'
import { Form, Button, Upload, Select, Input } from 'antd';
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
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 18, offset: 3 }} lg={{ span: 14, offset: 5 }} xl={{ span: 12, offset: 6 }}>
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
                            <Button icon={<UploadOutlined />} className="uploadButton">Click to upload Insurance Id</Button>
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

                    <Form.Item name={'insuranceNumber'} label="Insurance Number" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default InsuranceDetail
