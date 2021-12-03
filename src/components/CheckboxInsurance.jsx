import React from 'react'
import { Row, Col, Checkbox, Form } from 'antd';
import FormLayout from './FormLayout.jsx';
const CheckboxInsurance = () => {
    return (
        <>
            <br />
            <Row>
                <Col span={24} offset={2}>
                    <Form.Item
                        name="checkbox"
                        label="Insurance Attestion"
                        rules={[
                            {
                                required: true,
                                message: 'Please attest the insurance!',
                            },
                        ]}
                    >

                        <Checkbox />

                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default CheckboxInsurance
