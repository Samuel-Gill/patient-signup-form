import React from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from '../../redux/actions/insurance.js';
import { RightCircleOutlined } from '@ant-design/icons';
import InsuranceDetail from './InsuranceDetail.jsx';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
1
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
            offset: 2,
        },
        lg: {
            span: 24,
            offset: 2,
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
            <Row>
                <Col xs={{ span: 12, offset: 2 }} sm={{ span: 12, offset: 2 }} md={{ span: 12, offset: 2 }} lg={{ span: 12, offset: 2 }}>
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
