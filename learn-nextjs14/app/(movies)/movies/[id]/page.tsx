import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  return {
    title: movie.title
  }
}

const MoviesDetail = async ({
  params: { id },
  }: IParams) => {

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie viedos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}

export default MoviesDetail;