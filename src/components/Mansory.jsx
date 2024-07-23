import Image from 'next/image';
import React from 'react';

const Mansory = () => {
  return (
    <>
      <div className="z-10 self-center mt-4 text-4xl font-bold
       leading-10 text-center text-neutral-700">
        Furniturer
      </div>
      <div className=" columns-1 sm:columns-2 md:columns-3 
      lg:columns-4 gap-4 mx-10 pb-28 max-h-[600px] ">
        <div className="break-inside-avoid mb-4">
        <Image
            className="w-full"
            loading="lazy"
            src="/fur9.jpg"
            alt="Image 6"
            width={800}
            height={200}
          />
         </div>
        <div className="break-inside-avoid mb-4">
        <Image
            className="w-full"
            loading="lazy"
            src="/fur6.png"
            alt="Image 6"
            width={500}
            height={400}
          />
          <br/>
            <Image
            className="w-full"
            loading="lazy"
            src="/fur7.webp"
            alt="Image 6"
            width={800}
            height={200}
          />
        </div>
        <div className="break-inside-avoid mb-4">
        <Image
            className="w-full"
            loading="lazy"
            src="/fur4.jpg"
            alt="Image 3"
            width={500}
            height={200}
          />
        </div>
        <div className="break-inside-avoid mb-4">
        <Image
            className="w-full"
            loading="lazy"
            src="/fur3.jpg"
            alt="Image 3"
            width={500}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-4">
        <Image
            className="w-full"
            loading="lazy"
            src="/fur5.jpg"
            alt="Image 5"
            width={500}
            height={400}
          />
         
          <Image
            className="w-full"
            loading="lazy"
            src="/fur8.jpg"
            alt="Image 6"
            width={800}
            height={200}
          />
           <Image
            className="w-full"
            loading="lazy"
            src="/fur10.jpg"
            alt="Image 6"
            width={800}
            height={200}
          />
          <br/>
           <Image
            className="w-full"
            loading="lazy"
            src="/fur11.jpg"
            alt="Image 6"
            width={800}
            height={200}
          />
          </div>
      </div>
    </>
  );
};

export default Mansory;
