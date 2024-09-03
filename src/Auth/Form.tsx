import { Form, Input, Select } from 'antd'
import { Field, useFormikContext } from 'formik';
import SelectFiled from '../component/SelectFiled';
;
import { useGetCycle } from '../api/Cycle';
import { useGetTerm } from '../api/Term';
import { useEffect } from 'react';
import { useLogin } from '../api/Login';
import { useGetbranch } from '../api/Branch';


function FormAuth() {
 
    const {values} =useFormikContext<any>()

    const { data } = useGetbranch({});


    const { data:cycleData, isLoading:isLoadingCycle } = useGetCycle({
        branch:values.branch
    },{
        enabled:!!values.branch
    });

    
    const { data:tremData, isLoading:isLoadingTrem } = useGetTerm({
        branch:values.cycle
    },{
        enabled:!!values.cycle
    });



    return (
        <div className='FormAuth' >

            <SelectFiled
                name="branch"
                options={data?.data ?? []}     
                />
            <SelectFiled name="cycle"
                
                options={cycleData?.data ?? []} 
                disabled={!values.branch}
                
                />
                
            <SelectFiled name="term"
                       
                       options={tremData?.data ?? []} 
                       disabled={!values.cycle}
                       
            />

            <Form.Item
                label="username"
            >
                <Field as={Input} name={"username"} placeholder="Inter your username" />
            </Form.Item>

            <Form.Item
                label="Password"

            >
                <Field as={Input.Password} name='password' placeholder="Inter your password" />
            </Form.Item>




        </div>
    )
}

export default FormAuth