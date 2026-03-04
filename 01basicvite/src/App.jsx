import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [section, setSection] = useState('love'); // 'love' or 'chose'

  const loveReasons = [
    {
      title: 'How you make me feel',
      description:
        'Fadzai, when I\'m around you or when I\'m talking to you, I feel like I can be myself without any fear of you judging me because you truly know me.',
    },
    {
      title: 'Your Kindness',
      description:
        'How you care about others without expecting anything in return. Your compassion is inspiring, not just to others but especially to me. You believe in me even when I\'m struggling to believe in myself, and that kind of loyalty is rare.',
    },
    {
      title: 'Your Strength',
      description:
        'The way you face challenges with courage and never give up. You inspire me to be better every single day.',
    },
    {
      title: 'Your Intelligence',
      description:
        'Your brilliant mind and the way you see things from perspectives I never would have considered. You challenge me to think deeper.',
    },
    {
      title: 'Your Humor',
      description:
        'You make me laugh at the most unexpected moments. Life is so much lighter and brighter with you.',
    },
    {
      title: 'Your Authenticity',
      description:
        "You're unapologetically yourself, and that genuineness is what I fell in love with first. Your realness is beautiful.",
    },
    {
      title: 'Your Presence',
      description:
        "Simply being near you makes everything feel right. You're my safe place, my home.",
    },
    {
      title: 'Your Passion for Animals',
      description:
        'The way your eyes light up when you talk about horses and animals shows me the depth of your passion. That love you have for creatures and nature is truly inspiring.',
    },
  ];

  const choseReasons = [
    {
      title: 'Your Genuine Heart',
      description:
        'While many girls are beautiful on the outside, Fadzai, your heart is something truly special. The way you care for horses and animals shows me the purity of your soul—most people don\'t have that.',
    },
    {
      title: 'Your Unique Passions',
      description:
        'Not every girl shares the depth of passion for animals like you do. The way you connect with horses and creatures shows a sensitivity and understanding that I\'ve never seen before.',
    },
    {
      title: 'Your Loyalty',
      description:
        'I chose you because you stand by those you love, just like how you\'re devoted to the animals you care for. That loyalty extends to me, and it means everything.',
    },
    {
      title: 'Your Dreams Are Different',
      description:
        'While other girls chase material things, you dream about making a difference for animals. That vision of yours, your purpose, sets you apart completely.',
    },
    {
      title: 'How You See Me',
      description:
        'You don\'t just see me for what I am on the surface. You understand me deeply, just like you understand the animals you bond with. That connection is irreplaceable.',
    },
    {
      title: 'Your Confidence',
      description:
        'You\'re not afraid to be different, to pursue what you love. While others follow trends, you follow your heart—especially when it comes to your passion for horses and nature.',
    },
    {
      title: 'The Way You Make Me Better',
      description:
        'Being with you makes me want to be a better person. Your values, your compassion for animals, inspire me to grow. I chose you because you make me the best version of myself.',
    },
    {
      title: 'Because It\'s You, Fadzai',
      description:
        'Simply put, I chose you because there\'s no one else like you. In a world full of people, you\'re my choice. Not because you\'re perfect, but because you\'re perfect for me.',
    },
  ];

  const reasons = section === 'love' ? loveReasons : choseReasons;

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % reasons.length);
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + reasons.length) % reasons.length);
  };

  const changeSection = (newSection) => {
    setSection(newSection);
    setCurrentPage(0);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-red-900 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Title Section */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse'>
            {section === 'love' ? 'Why I Love You' : 'Why I Chose You'}
          </h1>
          <p className='text-pink-200 text-lg'>For my beautiful Fadzai</p>
        </div>

        {/* Section Toggle Buttons */}
        <div className='flex gap-3 justify-center mb-8'>
          <button
            onClick={() => changeSection('love')}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-200 ${
              section === 'love'
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            My Love ❤️
          </button>
          <button
            onClick={() => changeSection('chose')}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-200 ${
              section === 'chose'
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Why You 💕
          </button>
        </div>

        {/* Card Section */}
        <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 min-h-80 flex flex-col justify-center border border-white/20 shadow-2xl'>
          <div className='animate-fade-in'>
            <h2 className='text-3xl font-bold text-white mb-6 text-center'>
              {reasons[currentPage].title}
            </h2>
            <p className='text-pink-100 text-lg text-center leading-relaxed'>
              {reasons[currentPage].description}
            </p>
          </div>
          <div className='text-center mt-8 text-pink-300 font-semibold'>
            {currentPage + 1} of {reasons.length}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex gap-4 justify-center mb-8'>
          <button
            onClick={prevPage}
            className='bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 border border-white/30 hover:border-white/50'
          >
            ← Previous
          </button>
          <button
            onClick={nextPage}
            className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl'
          >
            Next →
          </button>
        </div>

        {/* Heart Decorations */}
        <div className='text-center text-5xl mb-8 animate-bounce'>💕</div>

        {/* Footer Message */}
        <div className='text-center'>
          <p className='text-white/80 italic text-lg'>
            "I fell in love with you because you're everything
            <br />I didn't know I was looking for."
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
