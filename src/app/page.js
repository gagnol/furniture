
import GridList from "@/components/GridList";
import Mansory from "@/components/Mansory";
import { Button, Strong } from "@radix-ui/themes";
import Image from "next/image";
import { FaHeart, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { RECOMMENDED_PRODUCTS } from '@/constant/products';
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
const products =RECOMMENDED_PRODUCTS

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col items-center px-5 w-full max-md:max-w-full">
      
      <div className="flex overflow-hidden relative z-10 flex-col justify-center items-end self-stretch px-16 py-2 -mt-1 w-full text-base font-bold max-h-[500px] text-zinc-800 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b833dc0a5ff556ee5f9ca1083e1aa9490036337ecfcd31ddf9ca24dbbf968e4?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col pt-8 pr-20 pb-9 pl-10 mt-20 mb-3.5 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mt-10">
          <div className="font-semibold tracking-[3px] max-md:max-w-full">
            New Arrival
          </div>
          <div className="mt-5 text-5xl text-yellow-600 leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
            Discover Our New Collection
          </div>
          <div className="mt-8 text-lg font-medium leading-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <div className="justify-center items-center px-16 py-6 mt-12 max-w-full text-white uppercase bg-yellow-600 w-[222px] max-md:px-5 max-md:mt-10">
            
           <Button variant="classic" style={{width:"158px"}} asChild >
           <Link href="/search">BUY NOW</Link>
            
            </Button> 
          </div>
        </div>
      </div>
      <div className="mt-16 text-3xl font-bold text-zinc-800 max-md:mt-10">
        Browse The Range
      </div>
      <div className="mt-3 text-xl text-center text-stone-500 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="mt-16 w-full max-w-[1183px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4ac05fa11e7a3521e41e02915a07ae4401a868bb6dd334e4c98493615585776?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="w-full aspect-[0.79]"
              />
              <div className="self-center mt-9">Dining</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8b89108f48976c5caf1c76520afdd1c358050e8099507aa5d70fc8507040f9a?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="w-full aspect-[0.79]"
              />
              <div className="self-center mt-9">Living</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb3569a8181f8367e05d3c50a80cd83a7bc4cd498c328e35e241f1670c20fc5c?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
                className="w-full aspect-[0.79]"
              />
              <div className="self-center mt-10">Bedroom</div>
            </div>
          </div>
        </div>
      </div>
      
      <GridList products={products}/>
      <div className="justify-center items-center px-16
       py-5 mt-8 max-w-full text-base font-semibold leading-6 
        w-[245px] max-md:px-5">
        <Button variant="classic" size="4" style={{width:"200px"}}>Show More</Button>
      </div>
      <HeroBanner/>
      <div className="self-stretch py-11 pl-20 mt-16 w-full bg-red-50 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-10 text-neutral-700 max-md:max-w-full">
                50+ Beautiful rooms <br />
                inspiration
              </div>
              <div className="mt-3 font-medium leading-6 text-zinc-600 max-md:max-w-full">
                Our designer already made a lot of beautiful prototipe of
                rooms that inspire you
              </div>
              <div className="justify-center self-start px-9 py-4 mt-7 font-semibold text-white bg-yellow-600 leading-[150%] max-md:px-5">
                Explore More
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76d8715b0fca43bd3d7e8aa7390d2acce8276f1390df0a8eace20f8025827231?apiKey=9a71d7eb557844cead52a1b061fb84c6&"
              className="grow w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-20 text-xl font-semibold leading-8 text-center text-zinc-600 max-md:mt-10">
        Share your setup with
      </div>
    </div>
   <Mansory/>
    
  </div>
    );
    }
    
    
  

