import React, { useState } from 'react'
import { Form, Button, Switch, Upload, Checkbox, Select, Input, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from '../redux/actions/insurance.js';
import InsuranceDetail from './InsuranceDetail.jsx';
//import FamilyDetails from './FamilyDetails.jsx';
import { Typography } from 'antd';

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

const InsuranceForm = () => {
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
        //return checked;
    }

    // function noInsurance(e) {
    //     console.log(`checked = ${e.target.checked}`);

    // }

    return (
        <>
            <Title level={3}>Insurance Details</Title>
            <Row>
                <Col xs={{ span: 24, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 4 }} lg={{ span: 12, offset: 4 }}>
                    {/* <div className="switch"> */}

                    <Title level={5}>Do you have insurance ? (Yes/No)</Title>
                    <Switch onChange={onChange} />


                    {(!insuranceStatus ?
                        (
                            <InsuranceDetail />
                        )
                        :
                        (

                            <Row>
                                <Col span={6} offset={0}>
                                    <Checkbox onChange={(e) => { e.target.checked ? console.log("attested") : console.log("require attestation") }}>  Insurance Attestation</Checkbox>
                                </Col>
                            </Row>

                        )
                    )}
                    {/* </div> */}
                </Col>
            </Row>
        </>
    )
}

export default InsuranceForm
