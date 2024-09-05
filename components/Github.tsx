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
    <footer className="py-12 bg-muted text-muted-foreground">
      <h2 className="text-center text-3xl font-bold mb-12" data-aos="fade-up">Our GitHub Profiles</h2>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-5 gap-8 px-4" data-aos="fade-up" data-aos-delay="200">
        {githubIds.map((id, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-background p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={100 * index}
          >
            <img
              src={`https://github.com/${id}.png`}
              alt={`${id}'s profile`}
              className="w-16 h-16 rounded-full mb-4"
            />
            <a
              href={`https://github.com/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300"
            >
              {id}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
