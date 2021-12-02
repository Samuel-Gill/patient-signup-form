import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import InsuranceForm from './InsuranceForm.jsx';
import InsuranceDetail from './InsuranceDetail.jsx';

const { Title } = Typography;

//For DOB
// const config = {
//     rules: [
//         {
//             type: 'object',
//             required: true,
//             message: 'Please select time!',
//         },
//     ],
// };


const FamilyDetails = () => {

    const [other, setOther] = useState({
        id: "0",
        value: "none"
    });
    const [option, setOption] = useState("");

    const selectRef = useRef();

    function onChange(value, fieldKey) {
        console.log(`selected ${value}`);
        console.log(`selected ${fieldKey}`);
        // value === "other" ? selectRef.current.name === "other" : null;
        console.log(selectRef.current);
        //setOther({ id: selectRef.current.length, value: value });
        //console.log(other.id);
        //console.log(other.value);
        if (value === "other") {
            setOption(value);
        }
        else if (value === "none") {
            setOption(value);
        }
        else {
            setOption("same");
        }
    }

    const insuranceStatus = useSelector(state => state.insurance);
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (
        <>
            {/* <div className="fam_div"> */}
            <Title level={3}>Family Details {insuranceStatus}</Title>
            <Row>
                <Col xs={{ span: 24, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 4 }} lg={{ span: 12, offset: 4 }}>
                    {/* <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="on"> */}
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            fieldKey={[fieldKey, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'last']}
                                            fieldKey={[fieldKey, 'last']}
                                            rules={[{ required: true, message: 'Missing last name' }]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, "date-picker"]}
                                            fieldKey={[fieldKey, 'date-picker']}
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
                                            {...restField}
                                            name={[name, "insurancestatus"]}
                                            fieldKey={[fieldKey, 'insurancestatus']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select insurance status!',
                                                },
                                            ]}
                                        >
                                            <Select ref={el => (selectRef.current = el)} placeholder="Insurance Status" onChange={onChange}>
                                                <Select.Option value="same" disabled={insuranceStatus}>Same</Select.Option>
                                                <Select.Option value="other">Other</Select.Option>
                                                <Select.Option value="none" >None</Select.Option>
                                            </Select>

                                            {((option === "other") ?
                                                <InsuranceDetail /> : (

                                                    <Row>
                                                        <Col span={6} offset={0}>
                                                            <Checkbox onChange={(e) => { e.target.checked ? console.log("attested") : console.log("require attestation") }}>  Insurance Attestation</Checkbox>
                                                        </Col>
                                                    </Row>

                                                ))}
                                        </Form.Item>


                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add family member
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    {/* </Form> */}
                    {/* </div> */}
                </Col>
            </Row>
        </>
    )
}

export default FamilyDetails
