import React from "react";
import { Form, Button, Upload, DatePicker, Input, Select } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
        md: {
            span: 24,
        },
        lg: {
            span: 24,
        },
        xl: {
            span: 24,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
        md: {
            span: 24,
        },
        lg: {
            span: 24,
        },
        xl: {
            span: 24,
        },
    },
};

const FormLayout = (props) => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        form.resetFields();
        alert("Form Saved Successfully");
    };

    const onFinishFailed = () => {
        // console.log('Received values of form: ', values);
        form.validateFields().then(() => alert("Fill Missing Fields"))
        alert("Fill Missing Fields");
    };

    return (
        <>
            <div className={props.class}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        family_members: [],
                    }}
                    scrollToFirstError
                >

                    {props.children}

                </Form>
            </div>
        </>
    );
}

export default FormLayout;