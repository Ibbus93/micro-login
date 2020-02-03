import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Typography } from '@material-ui/core';

import { validationSchema, initialValues } from '../utils';
import { SignInForm, Card, CardHeader, LinearProgress, ErrorText } from "../components";

import { requestUser } from '../../../store/user/actions';
import { Selector } from '../../../store/user/reducer';

const SignIn = ({
    user: {
        isLoading,
        error,
        data
    },
    onSubmit
}) => {
    useEffect(() => {
        if (data) {
            const { logged, id } = data;

            // Dispatch here to the container the login done
            console.log(logged, id);
        }
    }, [data]);

    const handleSubmit = ({ username, password }) => {
        onSubmit({ username, password });
    };

    return (
        <Card>
            <CardHeader>
                <Typography variant="h4">Micro Login</Typography>
                <Typography variant="body2">Please provide your information before continue</Typography>
            </CardHeader>

            { isLoading && <LinearProgress /> }

            { !error && (
                <ErrorText variant="body2">
                    An error occurred during the operation of signing in. Please, try again later.
                </ErrorText>
            )}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                { props => (
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
