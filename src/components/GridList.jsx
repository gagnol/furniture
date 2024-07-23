"use client"
import React from 'react';
import { InView } from 'react-intersection-observer';
import Card from './Card'; // Import your Card component
import { Heading, Text } from '@radix-ui/themes';

const GridList = ({ products }) => {
    return (
        <InView as="div" onChange={(inView, entry) => inView}>
            <div className="my-6 w-full mx-auto text-center">
            <div className="mb-6 mt-16 text-4xl font-bold leading-10 text-center text-neutral-700 max-md:mt-10">
                    Recommended Products
                </div>
                <div className="grid gap-4 grid-cols-1 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.slice(0, 8).map((product) => (
                           <div key={product.slug} className="flex justify-center">
                        <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </InView>
    );
};

export default GridList;
