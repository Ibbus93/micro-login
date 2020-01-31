import styled from "styled-components";
import { TextField } from "@material-ui/core";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 640px;
    background: white;
    border-radius: 5px   
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

export {
    Card,
    CardHeader,
    CardBody,
    InputField
}
