import React, { useState } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox } from 'antd';
import InsuranceDetail from './InsuranceDetail.jsx';
import CheckboxInsurance from './CheckboxInsurance.jsx';
import FormLayout from './FormLayout.jsx';
const { Title } = Typography;

const FamilyMember = () => {

    const insuranceStatusPatient = useSelector(state => state.insurance);

    //Family member insurance status
    const [status, setStatus] = useState("");

    return (
        <>
            {/* <FormLayout> */}
            {/* {fields.map(({ key, name, fieldKey, ...restField }) => ( */}
            <Form name="dynamic_form_nest_item" autoComplete="on">
                {/* <Form.List name="users"> */}
                <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                        // {...restField}
                        name={[name, 'first']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        // {...restField}
                        name={[name, 'last']}
                        rules={[{ required: true, message: 'Missing last name' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        // {...restField}
                        name={[name, "date-picker"]}
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
                        // {...restField}
                        name={[name, "insurancestatus"]}
                        rules={[
                            {
                                required: true,
                                message: 'Please select insurance status!',
                            },
                        ]}
                    >
                        <Select placeholder="Insurance Status" onChange={(value => { setStatus(value) })}>
                            <Select.Option value="same" disabled={insuranceStatusPatient}>Same</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                            <Select.Option value="none" >None</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name={[name, 'details']}
                        rules={[{ required: true, message: 'Missing status details' }]}
                    >

                        {status === "other" ?
                            <InsuranceDetail /> : status === "none" ?
                                (
                                    <Checkbox>Attest Insurance</Checkbox>
                                ) :
                                null}
                    </Form.Item>
                </Space>
                {/* </Form.List> */}
            </Form>
            {/* ))} */}
            {/* </FormLayout> */}
        </>
    )
}

export default FamilyMember
