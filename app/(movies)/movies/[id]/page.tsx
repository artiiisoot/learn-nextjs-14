import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params; // params 자체를 await하여 id에 접근
  const movie = await getMovie(id)
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; // params 자체를 await하여 id에 접근
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
