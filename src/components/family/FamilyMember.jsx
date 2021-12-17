import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Checkbox, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

//For Insurance ID
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const FamilyMember = (props) => {

    const insuranceStatusPatient = props.insuranceStatus;

    //Family member insurance status
    const [familyInsuranceStatus, setFamilyInsuranceStatus] = useState("");

    return (
        <>
            <Form.Item
                name={[props.name, 'first']}
                label="First Name"
                fieldKey={[props.fieldKey, 'first']}
                rules={[{ required: true, message: 'Missing first name' }]}
            >
                <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
                name={[props.name, 'last']}
                label="Last Name"
                fieldKey={[props.fieldKey, 'last']}
                rules={[{ required: true, message: 'Missing last name' }]}
            >
                <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
                name={[props.name, 'date']}
                label="Date of Birth"
                fieldKey={[props.fieldKey, 'date']}
                rules={[
                    {
                        type: 'object',
                        required: true,
                        message: 'Please select date of birth!',
                    },
                ]}>
                <DatePicker placeholder="YYYY-MM-DD" picker={"date"}
                    disabledDate={(d) => d.isAfter(new Date())}
                    format="YYYY-MM-DD"
                />
            </Form.Item>
            <Form.Item
                name={[props.name, 'insuranceStatus']}
                label="Insurance Status"
                fieldKey={[props.fieldKey, 'insuranceStatus']}
                rules={[
                    {
                        required: true,
                        message: 'Please select insurance status!',
                    },
                ]}
            >
                <Select placeholder="Insurance Status" onChange={(value => { setFamilyInsuranceStatus(value) })}>
                    <Select.Option value="same" disabled={!insuranceStatusPatient}>Same</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                    <Select.Option value="none" >None</Select.Option>
                </Select>
            </Form.Item>

            {/* Insurance Details */}
            {familyInsuranceStatus === "other" ?
                (
                    <>
                        <Space direction="vertical">
                            <Form.Item
                                name={[props.name, 'insuranceID']}
                                label="Insurance ID"
                                fieldKey={[props.fieldKey, 'insuranceID']}
                                valuePropName="fileList"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please attach ID Snapshot!',
                                    },
                                ]}
                                getValueFromEvent={normFile}
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />} className="uploadButton">Click to upload Insurance Id</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item
                                name={[props.name, 'insuranceCompanies']}
                                label="Insurance Companies"
                                fieldKey={[props.fieldKey, 'insuranceCompanies']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select companies!',
                                    },
                                ]}
                            >
                                <Select placeholder="Select insurance company">
                                    <Select.Option value="insurance_c1">Insurance_c1</Select.Option>
                                    <Select.Option value="insurance_c2">Insurance_c2</Select.Option>
                                    <Select.Option value="insurance_c3">Insurance_c3</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name={[props.name, 'insuranceNumber']}
                                label="Insurance Number"
                                fieldKey={[props.fieldKey, 'insuranceNumber']}
                                rules={[{
                                    required: true,
                                    message: 'Please fill insurance number!',
                                },
                                ]}
                            >
                                <Input type="number" placeholder="Insurance Number" />
                            </Form.Item>
                        </Space>
                    </>
                )
                : familyInsuranceStatus === "none" ?
                    (
                        <Form.Item

                            name={[props.name, 'insuranceAttestation']}
                            label="Insurance Attestation"
                            fieldKey={[props.fieldKey, 'insuranceAttestation']}
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Kindly attest insurance')),
                                },
                            ]}
                        >
                            <Checkbox checked>Attest Insurance</Checkbox>
                        </Form.Item>
                    ) :
                    null}
        </>
    )
}

export default FamilyMember
