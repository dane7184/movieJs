import NavbarComponent from '@/components/NavbarComponent'
import CardComponent from '@/components/CardComponent'
import { API_KEY,BASE_PATH } from '@/lib'


export default function Home({movies}) {
  const data = movies?.results || [];
  console.log(data);
  return (
    <>
    
      <div className='container'>
      <h1>Home Page</h1>
      <div className="d-flex justify-content-evenly flex-wrap">
        {data.length>0 && data.map((movie)=><CardComponent key=
        {movie.id} 
        imagePath={movie.backdrop_path} 
        title={movie.title} 
        id={movie.id}/>)}
      </div>
      </div>
    </>
  )
}

//getServersideProps
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res=await fetch(url);
  if(!res){
    console.log("error")
  }
  const movies=await res.json();
  if(!movies){
    props:{
      movies: []
    }
  }
  return {
    props:{
      movies
    }
  }
}
