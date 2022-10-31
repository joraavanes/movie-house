import Head from "next/head";
import Image from "next/image";
import React from "react";

interface MoviePreview {
  id: number;
  title: string;
}

const MoviePreview: React.FC<MoviePreview> = ({ id, title }) => {
  return (
    <>
      <Head>
        <title>Movie page</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h2>
              [{title ? title : "Movie Title"}] - [id: {id}]
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
              eveniet enim officiis ducimus dolores praesentium vitae odio quae
              similique quas quidem, beatae quos voluptatibus tenetur consectetur
              tempora at cum atque! Quis fugit distinctio facere, nam dicta vel
              cumque voluptate tempora maiores incidunt, deserunt harum
              accusantium delectus doloremque sequi dolores?
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            <Image src={'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'} 
              width={500} height={750} alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
