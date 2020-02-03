import React from "react";
import { Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";

import { CardBody, InputField } from "./Styled";

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
                required/>
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
                required/>
        </CardBody>
        <Button variant="contained" color="primary" type="submit" fullWidth>Sign In</Button>
    </form>
);

export default SignInForm;
