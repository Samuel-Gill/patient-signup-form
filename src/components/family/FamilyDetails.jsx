import React from 'react';
import { Form, Button, Space, Divider } from 'antd';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import FamilyMember from './FamilyMember.jsx';

const { Title } = Typography;

const FamilyDetails = () => {

    const insuranceStatus = useSelector(state => state.insurance);

    return (
        <>
            <Title level={3}>Family Details {insuranceStatus}</Title>

            <Form.List name="familyMembers">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Row>
                                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }}>
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <FamilyMember name={name} fieldKey={fieldKey} />

                                    </Space>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                    <Divider />
                                </Col>
                            </Row>
                        ))}

                        <Row>
                            <Col xs={{ span: 24, offset: 6 }} sm={{ span: 24, offset: 6 }} md={{ span: 24, offset: 6 }} lg={{ span: 24, offset: 6 }}>
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Family member
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </>
                )}
            </Form.List>
        </>
    )
}

export default FamilyDetails
