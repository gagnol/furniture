import * as React from "react";
import { RECOMMENDED_PRODUCTS } from '@/constant/products';
import Image from "next/image";

export default async function ProductDetail({ params }) {

    const id = params.id;
    const product = RECOMMENDED_PRODUCTS.find((p) => p.id === id);

    if (!product) {
      return <div>Product not found</div>;
    }



return (
  <div className="flex flex-col pb-12 bg-white">
    <div className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="shrink-0 self-start w-0.5 border-2 border-solid bg-neutral-400 border-neutral-400 h-[37px]" />
      <div className="flex-auto self-stretch my-auto text-black max-md:max-w-full">
        {product.name}
      </div>
    </div>
    <div className="self-center mt-8 w-full max-w-[1241px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={product.image[0]}
            className="w-full aspect-[1.11] max-md:mt-10 max-md:max-w-full"
            alt="product"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 mt-3.5 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl text-black max-md:max-w-full">
              Asgaard sofa
            </div>
            <div className="mt-3.5 text-2xl font-medium text-neutral-400 max-md:max-w-full">
              Rs. 250,000.00
            </div>
            <div className="flex gap-5 items-center self-start mt-4 text-sm text-neutral-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cb519968837ecbbf7790f3c128da597ab6c33dd10c0353875022f7f2dc3781?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[6.25] w-[124px]"
              />
              <div className="shrink-0 self-stretch w-px border border-solid bg-neutral-400 border-neutral-400 h-[30px]" />
              <div className="flex-auto self-stretch my-auto">
                5 Customer Review
              </div>
            </div>
            <div className="mt-5 text-sm text-black max-md:max-w-full">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
              <br />
              <br />
            </div>
            <div className="mt-8 text-sm text-neutral-400 max-md:max-w-full">
              Size
            </div>
            <div className="flex gap-4 self-start mt-5 text-sm text-black whitespace-nowrap">
              <div className="justify-center items-center px-3 text-white bg-yellow-600 rounded-md h-[30px] w-[30px]">
                L
              </div>
              <div className="justify-center items-center px-2 bg-orange-50 rounded-md h-[30px] w-[30px]">
                XL
              </div>
              <div className="justify-center items-center bg-orange-50 rounded-md h-[30px] w-[30px]">
                XS
              </div>
            </div>
            <div className="mt-6 text-sm text-neutral-400 max-md:max-w-full">
              Color
            </div>
            <div className="flex gap-4 self-start mt-5">
              <div className="shrink-0 bg-violet-500 h-[30px] rounded-[50px] w-[30px]" />
              <div className="shrink-0 bg-black h-[30px] rounded-[50px] w-[30px]" />
              <div className="shrink-0 bg-yellow-600 h-[30px] rounded-[50px] w-[30px]" />
            </div>
            <div className="flex gap-2.5 mt-8 text-black max-md:flex-wrap">
              <div className="flex gap-5 justify-between items-center px-4 py-7 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">
                <div className="self-stretch my-auto">-</div>
                <div className="self-stretch font-medium">1</div>
                <div className="self-stretch my-auto">+</div>
              </div>
              <div className="justify-center px-12 py-6 text-xl rounded-2xl border border-black border-solid max-md:px-5">
                Add To Cart
              </div>
              <div className="flex flex-col justify-center px-12 py-4 whitespace-nowrap rounded-2xl border border-black border-solid max-md:px-5">
                <div className="flex gap-2.5 justify-center">
                  <div className="text-2xl">+</div>
                  <div className="my-auto text-xl">Compare</div>
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-14 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:mt-10 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-12 max-w-full text-base whitespace-nowrap text-neutral-400 w-[149px] max-md:mt-10">
              <div>SKU</div>
              <div className="flex gap-3.5">
                <div className="font-medium">:</div>
                <div>SS001</div>
              </div>
            </div>
            <div className="flex gap-3.5 self-start mt-6 text-base whitespace-nowrap text-neutral-400">
              <div className="grow">Category</div>
              <div className="my-auto font-medium">:</div>
              <div>Sofas</div>
            </div>
            <div className="flex gap-5 justify-between mt-5 max-w-full text-base text-neutral-400 w-[295px]">
              <div>Tags</div>
              <div className="flex gap-3.5">
                <div className="my-auto font-medium">:</div>
                <div className="flex-auto">Sofa, Chair, Home, Shop</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between self-start mt-4 text-base whitespace-nowrap text-neutral-400">
              <div className="my-auto">Share</div>
              <div className="flex gap-3.5 justify-between items-center font-medium">
                <div className="self-stretch my-auto">:</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ac01271afe6862b8546d72f42ea8500ba3e3812903383b4efc513704b58303?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                  className="shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1304e89195f140217c617f720574e7bde1945d20d19e0f04d8963db6fcb0430?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                  className="shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                  className="shrink-0 self-stretch aspect-square w-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 w-full border border-solid bg-zinc-300 border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    <div className="flex flex-col items-center px-5 pt-14 w-full bg-white max-md:max-w-full">
      <div className="flex gap-5 max-w-full text-2xl text-neutral-400 w-[644px] max-md:flex-wrap">
        <div className="font-medium text-black">Description</div>
        <div className="flex-auto my-auto">Additional Information</div>
        <div className="flex-auto">Reviews [5]</div>
      </div>
      <div className="mt-12 text-base text-justify text-neutral-400 max-md:mt-10 max-md:max-w-full">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
        portable active stereo speaker takes the unmistakable look and sound
        of Marshall, unplugs the chords, and takes the show on the road.
      </div>
      <div className="mt-10 text-base text-justify text-neutral-400 max-md:max-w-full">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero
        with a well-balanced audio which boasts a clear midrange and extended
        highs for a sound that is both articulate and pronounced. The analogue
        knobs allow you to fine tune the controls to your personal preferences
        while the guitar-influenced leather strap enables easy and stylish
        travel.
      </div>
      <div className="mt-10 w-full max-w-[1239px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82861d9edb52c081b8fe343825376212b2b7b49228a54c926a7a4f2f5eed012c?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
              className="grow w-full aspect-[1.72] max-md:mt-7 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4841ac75de8076d1e3c14a0b20020fc9bb8f68b30a8f449575dcff9311a55b8f?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
              className="grow w-full aspect-[1.72] max-md:mt-7 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch mt-16 w-full border border-solid bg-zinc-300 border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    </div>
    <div className="self-center mt-16 text-4xl font-medium text-black max-md:mt-10">
      Related Products
    </div>
    <div className="self-center px-5 mt-10 w-full max-w-[1236px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow leading-[150%] max-md:mt-8">
            <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.95] max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd17225cb918d7a4845277e3c54bdaec48a3591bdd76431bbea94a1721295fcd?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative justify-center items-center px-1 mb-24 w-12 h-12 bg-red-400 rounded-full max-md:mb-10">
                -30%
              </div>
            </div>
            <div className="flex flex-col px-4 py-6 w-full bg-gray-100">
              <div className="text-2xl font-semibold leading-7 text-neutral-700">
                Syltherine
              </div>
              <div className="mt-3.5 text-base font-medium text-zinc-500">
                Stylish cafe chair
              </div>
              <div className="flex gap-4 mt-2.5">
                <div className="text-xl font-semibold text-neutral-700">
                  Rp 2.500.000
                </div>
                <div className="my-auto text-base text-zinc-400">
                  Rp 3.500.000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-8">
            <div className="flex overflow-hidden relative flex-col justify-center px-px w-full aspect-[0.95]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e2f6522579a76b3cb02892a6dcc3f057273e0871e87c8393734c7a5ba401c2b?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="w-full aspect-[0.94]"
              />
            </div>
            <div className="flex flex-col items-start py-6 pr-20 pl-4 font-semibold bg-gray-100 leading-[150%] text-neutral-700 max-md:pr-5">
              <div className="text-2xl leading-7">Leviosa</div>
              <div className="mt-5 text-base font-medium text-zinc-500">
                Stylish cafe chair
              </div>
              <div className="mt-2.5 text-xl">Rp 2.500.000</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow leading-[150%] max-md:mt-8">
            <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.95] max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12f3f6266c2fa6ce6058e30e34d0abca4d150cdcbbddb3838f1f5e4ccafd4f5?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative justify-center items-center px-1 mb-24 w-12 h-12 bg-red-400 rounded-full max-md:mb-10">
                -50%
              </div>
            </div>
            <div className="flex flex-col px-4 py-6 w-full bg-gray-100">
              <div className="text-2xl font-semibold leading-7 text-neutral-700">
                Lolito
              </div>
              <div className="mt-5 text-base font-medium text-zinc-500">
                Luxury big sofa
              </div>
              <div className="flex gap-4 mt-2.5">
                <div className="text-xl font-semibold text-neutral-700">
                  Rp 7.000.000
                </div>
                <div className="my-auto text-base text-zinc-400">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow leading-[150%] max-md:mt-8">
            <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.95] max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1938d4f2b108a6b5923fc0b0c1542880c7dcccdb49676bfa7d3ee351001915a0?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative justify-center items-center px-2 mb-24 w-12 h-12 bg-emerald-400 rounded-full max-md:mb-10">
                New
              </div>
            </div>
            <div className="flex flex-col items-start py-6 pr-12 pl-4 font-semibold bg-gray-100 text-neutral-700 max-md:pr-5">
              <div className="text-2xl leading-7">Respira</div>
              <div className="mt-3.5 text-base font-medium text-zinc-500">
                Outdoor bar table and stool
              </div>
              <div className="mt-3.5 text-xl">Rp 500.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="justify-center items-center self-center px-16 py-5 mt-11 max-w-full text-base font-semibold leading-6 text-yellow-600 bg-white border border-yellow-600 border-solid w-[245px] max-md:px-5 max-md:mt-10">
      Show More
    </div>
   
   
  </div>
);
}

