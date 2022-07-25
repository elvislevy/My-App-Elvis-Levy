import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.marca}</Card.Title>
        <Card.Text>{item.modelo}</Card.Text>
        <Card.Text>${item.precio}</Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;