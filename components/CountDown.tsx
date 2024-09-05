'use client'
import { useState, useEffect } from 'react';
import { differenceInSeconds, addDays, startOfDay } from 'date-fns';

export function LandingPage() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = startOfDay(addDays(now, 2));
    return differenceInSeconds(targetDate, now);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
      <header className="absolute top-0 left-0 p-4 flex items-center">
        <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Celestius</span>
      </header>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Website is Launching Soon!
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Get ready for an exciting new experience. Our website is launching in:
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          {/* calculate Days */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(days).padStart(2, '0')}
            </div>
            <div className="text-muted-foreground">Days</div>
          </div>
          {/* calculate Hours */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(hours).padStart(2, '0')}
            </div>
            <div className="text-muted-foreground">Hours</div>
          </div>
          {/* calculate Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(minutes).padStart(2, '0')}
            </div>
            <div className="text-muted-foreground">Minutes</div>
          </div>
          {/* calculate seconds */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(seconds).padStart(2, '0')}
            </div>
            <div className="text-muted-foreground">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}