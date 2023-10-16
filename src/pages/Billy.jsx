import { Container, Button, Card } from "react-bootstrap";

const Billy = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" alt="tesss" />
        <Card.Body>
          <Card.Title>Tes</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Billy;
