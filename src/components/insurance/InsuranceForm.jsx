import React from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from '../../redux/actions/insurance.js';
import InsuranceDetail from './InsuranceDetail.jsx';
import { Typography } from 'antd';
import FormLayout from '../common/layout/FormLayout.jsx';

const { Title } = Typography;

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

const InsuranceForm = () => {
    const dispatch = useDispatch();

    const insuranceStatus = useSelector(state => state.insurance);

    //Yes-No Insurance check
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        dispatch(setStatus(!checked));
    }

    return (
        <>
            <Title level={3}>Insurance Details</Title>
            <FormLayout>
                <Row>
                    <Col xs={{ span: 24, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 4 }} lg={{ span: 12, offset: 4 }}>
                        <Title level={5}>Do you have insurance ? (Yes/No)</Title>
                        <Switch onChange={onChange} />
                    </Col>
                </Row>

                {(!insuranceStatus ?
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
                            {...tailFormItemLayout}
                        >


                            <Checkbox> Attest Insurance</Checkbox>


                        </Form.Item>
                    )
                )}
            </FormLayout>
        </>
    )
}

export default InsuranceForm
