import React from 'react'
import { Form, Checkbox } from 'antd';
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

const InsuranceForm = (props) => {

    const insuranceStatusPatient = props.insuranceStatusPatient;

    return (
        <>
            <Title level={3}>Insurance Details</Title>

            {(insuranceStatusPatient ?
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
