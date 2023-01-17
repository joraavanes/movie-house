import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Content not found!</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h2 className="h4 text-center">The content was not found!</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
