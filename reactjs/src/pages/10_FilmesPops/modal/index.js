import { Container } from "./styled";

export default function Index(props) {
    <Container show={props.show}>
        <div>
           {props.children}
        </div>
    </Container>
}