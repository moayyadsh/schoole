import * as yup from "yup"

export const initialValues=()=>{
return {
    username:'',
    password:''

}
}

export const LoginSchema =yup.object().shape({
    // email:yup
    // .string()
    // .min(3,"please enter a email")
    // .required(),
    // password:yup
    // .string()
    // .min(5,"please inter your passsword")
    // .required("Required"),
})