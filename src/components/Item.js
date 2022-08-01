import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.marca}</Card.Title>
        <Card.Text>{item.modelo}</Card.Text>
        <Card.Text>${item.precio}</Card.Text>
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;