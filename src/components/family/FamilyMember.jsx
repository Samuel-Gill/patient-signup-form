import React, { useState } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox } from 'antd';
import InsuranceDetail from '../insurance/InsuranceDetail.jsx';
const { Title } = Typography;

const FamilyMember = () => {

    const insuranceStatusPatient = useSelector(state => state.insurance);

    //Family member insurance status
    const [status, setStatus] = useState("");

    return (
        <>
            <Form name="dynamic_form_nest_item" autoComplete="on">
                <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                        name={['first']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        name={['last']}
                        rules={[{ required: true, message: 'Missing last name' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        name={["date-picker"]}
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
                        name={["insurancestatus"]}
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

                    {status === "other" ?
                        <InsuranceDetail /> : status === "none" ?
                            (
                                <Checkbox>Attest Insurance</Checkbox>
                            ) :
                            null}
                </Space>
            </Form>
        </>
    )
}

export default FamilyMember
