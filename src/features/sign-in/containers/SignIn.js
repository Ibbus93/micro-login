import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { CircularProgress, LinearProgress, Typography } from '@material-ui/core';

import { validationSchema, initialValues } from '../utils';
import { SignInForm, Card, CardHeader } from "../components";

import { requestUser } from '../../../store/user/actions';
import { Selector } from '../../../store/user/reducer';

const SignIn = ({
    user: {
        isLoading,
        data
    },
    onSubmit
}) => {
    useEffect(() => {
        if (data) {
            const { logged, id } = data;
            console.log(logged, id);
        }
    }, [data]);

    const handleSubmit = ({ username, password }) => {
        onSubmit({ username, password });
    };

    return (
        <Card>
            { isLoading && ( <LinearProgress fullWidth /> ) }
            <CardHeader>
                <Typography variant="h4">Micro Login</Typography>
                <Typography variant="body2">Please provide your information before continue</Typography>
            </CardHeader>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {props => (
                    <SignInForm
                        {...props}
                    />
                )}
            </Formik>
        </Card>
    );
};

const mapStateToProps = state => ({
    user: Selector.getUser(state)
});

const dispatchToProps = {
    onSubmit: requestUser
};

export default connect(mapStateToProps, dispatchToProps)(SignIn);
