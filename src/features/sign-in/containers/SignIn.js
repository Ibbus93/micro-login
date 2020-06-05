import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Typography } from '@material-ui/core';

import { validationSchema, initialValues } from '../utils';
import {
  SignInForm,
  LinearProgress,
  ErrorText,
} from '../components';

import { signInUser } from '../../../store/sign-in/actions';
import { Selector } from '../../../store/sign-in/reducer';

const Card = React.lazy(() => import('component_library/Card'));
const CardHeader = React.lazy(() => import('component_library/CardHeader'));

const SignIn = ({ user: { isLoading, error, data }, onSubmit, handler }) => {
  useEffect(() => {
    if (data) {
      const { id, token } = data;

      handler({ id, token });
    }
  }, [data]);

  const handleSubmit = ({ username, password }) => {
    onSubmit({ username, password });
  };

  return (
    <React.Suspense fallback={null}>
      <Card>
        <CardHeader>
          <Typography variant="h4">Micro Login</Typography>
          <Typography variant="body2">
            Please provide your information before continue
          </Typography>
        </CardHeader>

        {isLoading && <LinearProgress />}

        {error && (
          <ErrorText variant="body2">
            An error occurred during the operation of signing in. Please, try
            again later.
          </ErrorText>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => <SignInForm {...props} />}
        </Formik>
      </Card>
    </React.Suspense>
  );
};

SignIn.propTypes = {
  user: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.any,
    data: PropTypes.shape({
      id: PropTypes.string,
      token: PropTypes.string,
    }),
  }),
  onSubmit: PropTypes.func,
  handler: PropTypes.func,
};
SignIn.defaultProps = {
  user: {
    isLoading: false,
    error: null,
    data: null,
  },
  onSubmit: () => {},
  handler: () => {},
};

const mapStateToProps = (state) => ({
  user: Selector.getUser(state),
});

const dispatchToProps = {
  onSubmit: signInUser,
};

export default connect(mapStateToProps, dispatchToProps)(SignIn);
