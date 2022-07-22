import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src="https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {`Dirección: ${item.address.street}`}
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;