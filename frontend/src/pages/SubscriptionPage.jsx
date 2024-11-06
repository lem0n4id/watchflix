import { useState } from 'react';
import Navbar from "../components/Navbar";

const genres = [
  'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'
];

const SubscriptionPage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white p-8'>
        <Navbar />
      <h1 className='text-3xl font-bold mb-4 mt-6'>Subscription Plans</h1>
      <div className='mb-8'>
        <label className='mr-4'>
          <input
            type='radio'
            name='subscription'
            value='monthly'
            checked={subscriptionType === 'monthly'}
            onChange={() => setSubscriptionType('monthly')}
          />
          Monthly - $9.99
        </label>
        <label>
          <input
            type='radio'
            name='subscription'
            value='yearly'
            checked={subscriptionType === 'yearly'}
            onChange={() => setSubscriptionType('yearly')}
          />
          Yearly - $99.99
        </label>
      </div>
      <h2 className='text-2xl font-bold mb-4'>Select Genres</h2>
      <div className='grid grid-cols-2 gap-4'>
        {genres.map((genre) => (
          <label key={genre} className='flex items-center'>
            <input
              type='checkbox'
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            <span className='ml-2'>{genre}</span>
          </label>
        ))}
      </div>
      <button className='mt-8 bg-red-600 px-4 py-2 rounded'>
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionPage;