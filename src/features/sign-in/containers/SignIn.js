import React from 'react';
import { Formik } from 'formik';

import { validationSchema, initialValues } from '../utils';
import { SignInForm, Card, CardHeader } from "../components";
import { Typography } from '@material-ui/core';

const SignIn = () => (
    <Card>
        <CardHeader>
            <Typography variant="h4">Micro Login</Typography>
            <Typography variant="body2">Please provide your information before continue</Typography>
        </CardHeader>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => alert("Compliments!")}>
            {props => (
                <SignInForm
                    {...props}
                />
            )}
        </Formik>
    </Card>
);

export default SignIn;
