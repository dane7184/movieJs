import {  useState } from 'react'
import React, {useEffect} from 'react'
import { BASE_URL, API_KEY, BASE_PATH } from '@/lib';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import Placeholder from 'react-bootstrap/Placeholder';

export default function movieDetail() {
    const router = useRouter();
    
    const [id, setId] = useState(router.query.id);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("data at movie page",data);
            setMovie(data);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
           });
    },[]);

    console.log(movie)

    if(loading){
        return(
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
        )
    }

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={
        movie.backdrop_path ? BASE_PATH+ movie.backdrop_path : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
      } />
      <Card.Body>
        <Card.Title> {movie.title? movie.title : "Unknown"}</Card.Title>
        <Card.Text>
          {movie.overview ? movie.overview : "No description"}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
