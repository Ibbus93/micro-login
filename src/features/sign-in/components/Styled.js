import styled from "styled-components";
import { Button, LinearProgress, TextField, Typography } from "@material-ui/core";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 640px;
    background: white;
    border-radius: 20px   
    text-align: center;
    padding: 2rem;
`;

const CardHeader = styled.div`
    padding-bottom: 0
`;

const CardBody = styled.div`
    padding: 1rem 1rem 2rem;
`;

const InputField = styled(TextField)`
    margin-top: 1rem !important
`;

const Loading = styled(LinearProgress)`
    margin-top: 1rem !important
`;

const ErrorText = styled(Typography)`
    margin-top: 1rem !important;
    color: red !important;
`;

const LoginButton = styled(Button)`
    background: green !important;
`;

export {
    Card,
    Loading,
    CardBody,
    ErrorText,
    CardHeader,
    InputField,
    LoginButton
}
