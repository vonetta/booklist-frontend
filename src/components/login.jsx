import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import { createLoginRequest } from '../actions/users'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';


class Login extends Component {

    formSubmission = async (values) => {
        try {
            this.props.createLoginRequest({
                email: values.email,
                password: values.password
            })

        }
        catch (err) {
            console.log(err)
            toast.warn("User is not registered, Please try another email or Sign up")
        }
    }
    render() {
        const validationSchema = Yup.object().shape({
            email: Yup.string()
                .email("Please enter a valid Email")
                .required("Email is required"),
            password: Yup.string()
                .min(5, "Password is more than 5 characters")
                .required('Password is required')
        })

        return (
            <React.Fragment>
                <div className="container card col-6 shadow-sm p-3 mb-5 bg-white rounded mt-5">
                    <h1 className="text-center">Login</h1>
                    <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={this.formSubmission}>
                        {({ errors, touched, handleBlur }) => (
                            <Form className="m-2">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <Field
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        aria-describedby="email"
                                        placeholder="Email"
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && (<div className="alert alert-danger">{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password && (<div className="alert alert-danger">{errors.password}</div>)}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </React.Fragment >
        );
    }
}

export default connect(({ users }) => ({ users }),
    {
        createLoginRequest
    })(Login);