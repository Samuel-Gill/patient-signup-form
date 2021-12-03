import React from 'react'
import { Tabs } from 'antd';
import { PersonalData } from './PersonalData.jsx';
import InsuranceForm from './InsuranceForm.jsx';
import FamilyDetails from './FamilyDetails.jsx';

const { TabPane } = Tabs;

const ParentForm = () => {
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

export default ParentForm
