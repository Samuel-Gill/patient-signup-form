import React from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from '../../redux/actions/insurance.js';
import InsuranceDetail from './InsuranceDetail.jsx';
import { Typography } from 'antd';
import FormLayout from '../common/layout/FormLayout.jsx';

const { Title } = Typography;

const InsuranceForm = () => {
    const dispatch = useDispatch();

    const insuranceStatus = useSelector(state => state.insurance);

    //Yes-No Insurance check
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        dispatch(setStatus(!checked));
        checked ? setHasInsurance(true) : setHasInsurance(false)
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

                        <Row>
                            <Col span={24} offset={2}>
                                <br />
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

                                    <Checkbox> Attest Insurance</Checkbox>

                                </Form.Item>
                            </Col>
                        </Row>
                    )
                )}
            </FormLayout>
        </>
    )
}

export default InsuranceForm
