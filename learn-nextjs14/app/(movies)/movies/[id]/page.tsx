import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

const MoviesDetail = async ({
  params: { id },
  }: {
    params: { id: string };  
  }) => {

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