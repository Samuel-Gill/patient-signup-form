import React from 'react'
import { Tabs } from 'antd';
import { PersonalData } from '../components/personal/PersonalData.jsx';
import InsuranceForm from '../components/insurance/InsuranceForm.jsx';
import FamilyDetails from '../components/family/FamilyDetails.jsx';

const { TabPane } = Tabs;

const SignupForm = () => {
    return (
        <>
            <Tabs defaultActiveKey="1" type="form" size={"large"}>
                <TabPane tab="Personal Information" key="1">
                    <PersonalData />
                </TabPane>
                <TabPane tab="Insurance Information" key="2">
                    <InsuranceForm />
                </TabPane>
                <TabPane tab="Family Information" key="3">
                    <FamilyDetails />
                </TabPane>
            </Tabs>
        </>
    )
}

export default SignupForm
