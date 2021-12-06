import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import FamilyMember from './FamilyMember.jsx';

const { Title } = Typography;

const FamilyDetails = () => {

    const insuranceStatus = useSelector(state => state.insurance);

    const onFinish = values => {
        console.log('Received values of form:', values);
        alert("Form Saved Successfully");
    };
    return (
        <>
            <Title level={3}>Family Details {insuranceStatus}</Title>
            <Row>
                <Col xs={{ span: 24, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 4 }} lg={{ span: 12, offset: 4 }}>
                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="on">
                        <Form.List name="family_members">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <FamilyMember name={name} fieldKey={fieldKey} />
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default FamilyDetails
