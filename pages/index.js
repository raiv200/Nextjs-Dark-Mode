import Layout from "../sections/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section  */}

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        {/* Headlines */}
        
        <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">The Blogging Platform For Devs.</h2>
         <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">Start your developer blog,share ideas and connect with the Dev Community.</p>
        {/* CTA */}
        <button className="btn" type="button" onClick={null}>
          {" "}
          Start Your Blog
        </button>
      </section>
    </Layout>
  );
}
