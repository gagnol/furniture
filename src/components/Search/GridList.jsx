"use client";
import React from 'react';
import { InView } from 'react-intersection-observer';
import Card from '../Card'; // Import your Card component

const GridList = ({ products }) => {
    return (
        <InView as="div" onChange={(inView, entry) => inView}>
            <div className="my-6 w-full mx-auto text-center">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
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
