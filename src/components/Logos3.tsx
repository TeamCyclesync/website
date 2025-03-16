'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/Carousel';

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = 'Trusted by',
  logos = [
    {
      id: 'logo-1',
      description: 'Logo 1',
      image: '/assets/trusted/thub.png',
      className: 'md:h-20 w-auto h-16',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image: '/assets/trusted/wehub.png',
      className: 'md:h-40 h-32 w-auto',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image: '/assets/trusted/18startup.png',
      className: 'md:h-20 h-12 w-auto',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image: '/assets/trusted/nsr.png',
      className: 'h-16 w-auto',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image: '/assets/trusted/microsoftforstartups.png',
      className: 'h-20 w-auto',
    },
    {
      id: 'logo-6',
      description: 'Logo 6',
      image: '/assets/trusted/bioasia.png',
      className: 'md:h-8 h-6 w-auto mr-10',
    },
    {
      id: 'logo-20',
      description: 'Logo 20',
      image: '/assets/trusted/shooting_stars_foundation.png',
      className: 'md:h-12 h-8 w-auto',
    },
  ],
}: Logos3Props) => {
  return (
    <section className="my-16 mx-auto md:-mb-16 -mb-28">
      <div className="pt-4 md:pt-6">
        <h2 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] font-semibold text-white text-shadow-200 tracking-wide text-center">
          {heading}
        </h2>
        <div className="relative flex items-center justify-center lg:max-w-5xl mx-auto">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0 space-x-8">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* <div className="absolute inset-y-0 left-0 w-12"></div>
          <div className="absolute inset-y-0 right-0 w-12"></div> */}
        </div>
      </div>
    </section>
  );
};

export { Logos3 };