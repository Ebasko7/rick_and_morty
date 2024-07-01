import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharCard( { data } ) {
    console.log(data)
  return (
    <Card  style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body class='bg-purple-900'>
        <Card.Title class='text-white font-extrabold'>{data.name}</Card.Title>
        <Card.Text>
            <h6 class='text-white'>Status: {data.status}</h6>
            <h6 class='text-white'>Species: {data.species}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CharCard;