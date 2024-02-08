const MoviesDetail = ({
  params: { id },
  }: {
    params: { id: string };  
  }) => {
  return (
    <div>Movie {id}</div>
  )
}

export default MoviesDetail;