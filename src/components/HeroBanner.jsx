"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

const HeroBanner = () => {
    return (
        <div className="relative text-[20px] hidden xl:flex w-full max-w-5xl mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                interval={6000}    >
               
                <div>
                    <Image alt="banner" width={1500} height={200}
                        src="/fur2.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover max-h-[200px]"
                        style={{ objectPosition: 'top' }}
                    />
                    
                </div>
                <div>
                <Image alt="banner" width={1500} height={200}
                        src="/fur2.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover max-h-[200px]"
                        style={{ objectPosition: 'top' }}
                    />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
