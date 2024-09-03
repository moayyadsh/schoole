import { Button, Form, Modal } from 'antd'
import React from 'react'
import useModalState from '../../../stateManagement/ModalState'
import { Formik } from 'formik'
import ModalCompnent from './ModalForm'
import { homeworkSechma, initialValues } from '../FormUtil'
import { useAddHomework } from '../../../api/homework'
import { appendData } from '../../../api/helper/useFormData'

function AddModal() {
  const {mutate:homeworkData}=useAddHomework();

    const {isOpenAdd,toggleModalAdd}=useModalState()

    const handleSubmit = (values: any) => {


    console.log(values,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
    
    const sendData = new FormData();
    appendData(sendData, values);
  
     homeworkData(values);
    };
  return (
    <>
    <Modal
    open={isOpenAdd}
    onCancel={toggleModalAdd}
    footer={false}
   >
   <Formik
          initialValues={initialValues()}
   
    validationSchema={homeworkSechma}
          
  onSubmit={handleSubmit}
          
   >
   <Form> 
    <ModalCompnent/>
    <Button
    htmlType='submit' type="primary">Submit</Button>
    <button type='submit'>sss</button>
   </Form>
   </Formik>
   </Modal>

    
    
    </>
  )
}

export default AddModal