import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Insert your username"),
    password: Yup.string()
        .required('Insert your password')
});

const initialValues = {
    username: '',
    password: ''
};

export {
    validationSchema,
    initialValues
};
