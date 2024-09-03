import { Formik , Form, useFormikContext} from 'formik';
import FormAuth from './Form';
import { initialValues, LoginSchema } from './FormUtil';
import { Button } from 'antd';
import { useLogin } from '../api/Login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {
    const navigate = useNavigate()

    const { mutate: logIn, data, isSuccess, isError } = useLogin();


    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('token', data.token);
            navigate('/App');
        }
        if (isError) {

            console.error(isError);
        }
    }, [isSuccess, isError, data, navigate, isError]);
            
    return (
        <div className='Log-in'>
            <h1 className='log'>Login...</h1>
            <Formik

                initialValues={initialValues()}
                validationSchema={LoginSchema}
                onSubmit={logIn}
               
            >
                <Form>

                <FormAuth />
                <Button  type="primary" htmlType="submit" block >
                LogIn
            </Button>
                </Form>

            </Formik>

        
        </div>
    )
}

export default LoginPage