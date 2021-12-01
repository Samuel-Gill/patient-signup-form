import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select } from 'antd';
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

    const [other, setOther] = useState(false);
    const [none, setNone] = useState(false);

    const selectRef = useRef([]);

    function onChange(value) {
        console.log(`selected ${value}`);
        // value === "other" ? selectRef.current.name === "other" : null;
        console.log(selectRef.current);
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
                                            <Select ref={el => (selectRef.current[key] = el)} placeholder="Insurance Status" onChange={onChange}>
                                                <Select.Option value="same" disabled={insuranceStatus}>Same</Select.Option>
                                                <Select.Option value="other">Other</Select.Option>
                                                <Select.Option value="none" >None</Select.Option>
                                            </Select>

                                        </Form.Item>

                                        {(selectRef.current[key] === "other" ?
                                            <InsuranceDetail /> : null)}
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
