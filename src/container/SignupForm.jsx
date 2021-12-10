import React from 'react'
import { Form, Button, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { RightCircleOutlined } from '@ant-design/icons';
import { PersonalData } from '../components/personal/PersonalData.jsx';
import InsuranceForm from '../components/insurance/InsuranceForm.jsx';
import FamilyDetails from '../components/family/FamilyDetails.jsx';
import FormLayout from '../components/common/layout/FormLayout.jsx';

const { TabPane } = Tabs;

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 6,
            offset: 10,
        },
        sm: {
            span: 6,
            offset: 10,
        },
        md: {
            span: 6,
            offset: 11,
        },
        lg: {
            span: 6,
            offset: 11,
        },
        xl: {
            span: 6,
            offset: 11,
        },
    },
};

const SignupForm = () => {
    //const [form] = Form.useForm();
    //const { validateFields } = form;

    const [activeKey, setActiveKey] = React.useState('1')
    const onKeyChange = (key) => setActiveKey(key);

    const onChange = (key) => {
        //onKeyChange(key)
        //form.validateFields().then(setActiveKey(key))
        form.submit()
        form.validateFields().then(() => {
            onKeyChange(key)
        }).catch((errorInfo) => { console.log(errorInfo) });
    }

    const insuranceStatusPatient = useSelector(state => state.insurance);

    // const validate = () => {
    //     //get form fields
    //     const formValues = form.getFieldValue(true)
    //     console.log(formValues);

    //     if (formValues != undefined) {
    //         onChange("2")
    //     }
    //     else {
    //         alert("Kindly fill the required fields")
    //     }
    // }

    return (
        <>
            <FormLayout>
                <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={onChange} type="form" size={"large"}>
                    <TabPane tab="Personal Information" key="1">
                        <PersonalData />
                        <Form.Item {...tailFormItemLayout}>
                            <Button icon={<RightCircleOutlined />} type="primary" onClick={() => onChange('2')}>
                                Next
                            </Button>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Insurance Information" key="2">
                        <InsuranceForm />
                        <Form.Item {...tailFormItemLayout}>
                            <Button icon={<RightCircleOutlined />} type="primary" onClick={() => onChange('3')}>
                                Next
                            </Button>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Family Information" key="3">
                        <FamilyDetails />
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={() => onChange('1')}>
                                Submit
                            </Button>
                        </Form.Item>
                    </TabPane>
                </Tabs>
            </FormLayout>
        </>
    )
}

export default SignupForm
