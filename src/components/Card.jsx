import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function CharCard({ data }) {
    const navigate = useNavigate()

    const navigateToCharacterPage = () => navigate(`/character/${data.id}`)

    console.log(data);
    return (
        <Card className="m-4 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="bg-purple-900">
                <Card.Title className="text-white font-extrabold">{data.name}</Card.Title>
                <Card.Text>
                    <h6 className="text-white">Status: {data.status}</h6>
                    <h6 className="text-white">Species: {data.species}</h6>
                </Card.Text>
                <Button variant="primary" onClick={navigateToCharacterPage}>LEARN MORE</Button>
            </Card.Body>
        </Card>
    );
}

export default CharCard;
