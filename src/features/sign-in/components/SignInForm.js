import React from "react";
import PropTypes from 'prop-types';

import { InputAdornment } from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";

import { LoginButton, CardBody, InputField } from "./Styled";

const SignInForm = ({
    values: {
        username,
        password
    },
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
}) => (
    <form onSubmit={handleSubmit}>
        <CardBody>
            <InputField
                id="username"
                label="Username"
                value={username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && Boolean(errors.username) ? 'Username is required' : ''}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <InputField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && Boolean(errors.password) ? 'Password is required' : ''}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        </CardBody>
        <LoginButton variant="contained" color="primary" type="submit" fullWidth>Sign In</LoginButton>
    </form>
);

SignInForm.propTypes = {
    values: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string
    }),
    touched: PropTypes.shape({
        username: PropTypes.bool,
        password: PropTypes.bool
    }),
    errors: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string
    }),
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func
};
SignInForm.defaultProps = {
    values: {
        username: '',
        password: ''
    },
    touched: {
        username: false,
        password: false
    },
    errors: {
        username: '',
        password: ''
    },
    handleSubmit: () => {},
    handleChange: () => {},
    handleBlur: () => {}
};

export default SignInForm;
