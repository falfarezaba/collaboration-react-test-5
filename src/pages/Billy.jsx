import { Container, Button, Card } from "react-bootstrap";

const Billy = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" alt="tesss" />
        <Card.Body>
          <Card.Title>Billy</Card.Title>
          <Card.Text>test baruuu</Card.Text>
          <Button variant="primary">Gas</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Billy;
