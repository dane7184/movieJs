import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASE_URL, BASE_PATH } from '@/lib';
import { useRouter } from 'next/router';

export default function CardComponent({title, overview, imagePath, id}) {

  const router = useRouter();

  const handleClick = () =>{
    router.push(`/movie/${id}`);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagePath?.poster_path? BASE_PATH + movie?.poster_path: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} />
      <Card.Body>
        <Card.Title>{title? title : "Unknown"}</Card.Title>
        <Button onClick={handleClick} variant="primary">View details</Button>
      </Card.Body>
    </Card>
  )
}
