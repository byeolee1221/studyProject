import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  // console.log(`Fetching videos: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
};

export default MovieVideos;