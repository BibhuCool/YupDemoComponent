import { useFormik } from "formik";
import * as yup from "yup";




export default function YupDemoComponent(){
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Age: 0
        },
        validationSchema: yup.object({
            Name:yup.string().required('User Name Required').min(4,'Too Short..').max(10,'Too Long'),
            Email:yup.string().required('Email Required').email('Invalid Email'),
            Age:yup.number().required('Age Required')
        }),

        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <h2>Register User</h2>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input name="Name" {...formik.getFieldProps('Name')} type="text" /></dd>
                        <dd className="text-danger">{formik.touched.Name && formik.errors.Name?formik.errors.Name:null}</dd>
                        <dt>Email</dt>
                        <dd><input name="Email" {...formik.getFieldProps('Email')} type="text" /></dd>
                        <dd className="text-danger">{formik.touched.Email && formik.errors.Email?formik.errors.Email:null}</dd>
                        <dt>Age</dt>
                        <dd><input name="Age" {...formik.getFieldProps('Age')} type="text" /></dd>
                        <dd className="text-danger">{formik.errors.Age}</dd>
                    </dl>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    )
}