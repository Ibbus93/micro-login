import * as Yup from 'yup';

const validation = Yup.object().shape({
    username: Yup.string()
        .required("Insert your username"),
    password: Yup.string()
        .required('Insert your password')
});

export default validation;
