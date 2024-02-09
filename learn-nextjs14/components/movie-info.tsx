import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  // console.log(`Fetching movie: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>
};

export default MovieInfo;