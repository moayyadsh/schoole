import { Button, DatePicker, DatePickerProps, Form, Input, Upload } from 'antd'
import React from 'react'
import SelectFiled from '../../../component/SelectFiled';
import { UploadOutlined } from '@ant-design/icons';

import { useGetTeacher } from '../../../api/Teacher';
import { useGetSubject } from '../../../api/Subject';
import { Field, useFormikContext } from 'formik';

function ModalCompnent() {
    const{data:teacherData}=useGetTeacher()
    const{data:subjectData}=useGetSubject()


    const {values:homeworkValues , setFieldValue} = useFormikContext()

    console.log(homeworkValues);
    
    const onChange: DatePickerProps<any>['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    
    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.files?.[0];
        console.log(value,"value");  
        setFieldValue("image", value)
      }
    return (
        <>
            <Form.Item
                label="المحتوى"
            >
             <Field as={Input} name={"content"} placeholder="Inter your content" />
            </Form.Item>
            <Form.Item
                label="العنوان"
            >

                <Field as={Input} name={"title"} placeholder="Inter your title" />
            </Form.Item>
            <Form.Item
                label="تاريخ الاستحقاق"
            >
                <DatePicker onChange={onChange} needConfirm />
            </Form.Item>
            <Form.Item
                label="تاريخ الانجاز"

            >
                <DatePicker onChange={onChange} needConfirm />
            </Form.Item>

            <Form.Item
                label="اسم المادة"

            >
                <SelectFiled
                     name="subject"
                     options={subjectData?.data ?? []} 
                />
            </Form.Item>
            <Form.Item
                label="اسم الاستاذ"

            >
                <SelectFiled
                                name="name"
                                options={teacherData?.data ?? []} 
                />
            </Form.Item>
            <Form.Item
                label="المرفقات"

            >
                <Upload>
                <Button icon={<UploadOutlined 
                onChange={handleChangeImage}
                
                />}>Upload</Button>
                </Upload>
            </Form.Item>
        </>
    )
}

export default ModalCompnent