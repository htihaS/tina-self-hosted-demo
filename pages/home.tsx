// pages/index.tsx

import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
          <p className="text-lg">A short description of your website.</p>
          <img
            src="/hero-image.jpg"  // Replace with the path to your hero image
            alt="Hero Image"
            className="w-full mt-8 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Card Sections */}
      <section className="cards mt-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card bg-white p-6 rounded-lg shadow-md">
          <img
            src="/card1-image.jpg"  // Replace with the path to your card image
            alt="Card 1 Image"
            className="w-full h-32 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-xl font-bold mb-2">Card 1 Title</h2>
          <p className="text-gray-600">A brief description of card 1.</p>
        </div>

        {/* Card 2 */}
        <div className="card bg-white p-6 rounded-lg shadow-md">
          <img
            src="/card2-image.jpg"  // Replace with the path to your card image
            alt="Card 2 Image"
            className="w-full h-32 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-xl font-bold mb-2">Card 2 Title</h2>
          <p className="text-gray-600">A brief description of card 2.</p>
        </div>

        {/* Add more card sections as needed */}
      </section>
    </div>
  );
};

export default Home;
