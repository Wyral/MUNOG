import React from "react";
import { Wrapper } from "./NotFound.style";


const Error = ({code, title, children}) => (
    <Wrapper>
        <h1>{code}</h1>
        <h2>{title}</h2>
        <p>{children}</p>
    </Wrapper>
);

const NotFound = () => <Error code="404" title="Page not found">This Page does not exist.</Error>;

export default NotFound;
