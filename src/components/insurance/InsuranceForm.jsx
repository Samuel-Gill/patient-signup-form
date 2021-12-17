import React, { useState } from 'react'
import { Form, Checkbox, Switch } from 'antd';
import { Row, Col } from 'antd';
import InsuranceDetail from './InsuranceDetail.jsx';
import { Typography } from 'antd';


const { Title } = Typography;

const checkboxLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 2,
        },
        sm: {
            span: 24,
            offset: 2,
        },
        md: {
            span: 24,
            offset: 3,
        },
        lg: {
            span: 24,
            offset: 5,
        },
        xl: {
            span: 24,
            offset: 6,
        }
    },
};

const InsuranceForm = () => {

    const [insuranceStatus, setInsuranceStatus] = useState(false)

    const onChange = () => {
        setInsuranceStatus(!insuranceStatus);
    }

    return (
        <>
            <Title level={3}>Insurance Details</Title>
            {/* Insurance Status */}
            <Row>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 18, offset: 3 }} lg={{ span: 14, offset: 5 }} xl={{ span: 12, offset: 6 }}>
                    <Title level={5}>Do you have insurance ? (Yes/No)</Title>
                    <Form.Item name={'insuranceStatus'} initialValue="true" shouldUpdate={true}>
                        <Switch onChange={onChange} />
                    </Form.Item>
                </Col>
            </Row>

            {(insuranceStatus ?
                (
                    <>
                        <br />
                        <InsuranceDetail />
                    </>
                )
                :
                (
                    < Form.Item
                        name="attestation"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should have insurance attestion')),
                            },
                        ]}
                        {...checkboxLayout}
                    >
                        <Checkbox> Attest Insurance</Checkbox>
                    </Form.Item>
                )
            )}
        </>
    )
}

export default InsuranceForm
