import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import InsuranceForm from './InsuranceForm.jsx';
import InsuranceDetail from './InsuranceDetail.jsx';
import FamilyMember from './FamilyMember.jsx';

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
        id: "",
        value: ""
    });
    const [option, setOption] = useState("");

    const selectRef = useRef(0);



    useEffect(() => {
        console.log(`use effect wala ref`)
        console.log(selectRef.current);
        //setOther({ id: selectRef.current, value: value });
    }, []);

    const insuranceStatus = useSelector(state => state.insurance);
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (
        <>
            <Title level={3}>Family Details {insuranceStatus}</Title>
            <Row>
                <Col xs={{ span: 24, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 4 }} lg={{ span: 12, offset: 4 }}>
                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="on">
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            {/* <Form.Item
                                                {...restField}
                                                name={[name, 'familymember']}
                                                fieldKey={[fieldKey, 'familymember']}
                                                rules={[{ required: true, message: 'Missing family member details' }]}
                                            > */}
                                            <FamilyMember />
                                            {/* </Form.Item> */}

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
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default FamilyDetails
