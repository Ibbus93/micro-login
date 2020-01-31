import React from 'react';
import { Formik } from 'formik';

import validationSchema from '../validators';
import { SignInForm, Card, CardHeader } from "../components";

const SignIn = () => {
    const initialValues = {
        username: '',
        password: ''
    };

    return (
        <Card>
            <CardHeader>
                <h2>Sign In</h2>
                <span>Please provide your information before continue</span>
            </CardHeader>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => alert("Compliments!")}>
                {props => (
                    <SignInForm
                        {...props }
                    />
                )}
            </Formik>
        </Card>
    )
};

export default SignIn;
