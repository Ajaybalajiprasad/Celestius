import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function GitHubIds() {
  const githubIds = [
    'adithyagenie',
    'adithyaa-s',
    'KRISHNASAKTHIESWAR',
    'arunkumar2645s',
    'Ajaybalajiprasad',
    'chorko',
    'AzimMohideen',
    'bhrahmesh',
    'arjun256900',
    'keerthikumar132005',
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <footer className="py-12 bg-primary text-muted-foreground">
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {githubIds.map((id, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-background p-4 sm:p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={100 * index}
          >
            <img
              src={`https://github.com/${id}.png`}
              alt={`${id}'s profile`}
              className="w-16 h-16 rounded-full mb-4 border-2 border-primary"
            />
            <a
              href={`https://github.com/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300"
            >
              {id}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
