
import React from 'react'
import { Box, Button, Card, DropdownMenu, Flex, Inset, Separator, Strong, Text } from "@radix-ui/themes"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';


const Cardgrid = ({ product }) => {


    return (
        <Box maxWidth="240px" key={product.slug} >
            <Card size="2" className="border-gray-300 ">
                <Inset clip="padding-box" side="top" pb="current">
                    <Link href={`/product/${product.id}`} >
                        <div className="relative w-full">
                            {product.discount > 0 ? (
                                <>
                                    <Image
                                        src="/corner3.png"
                                        alt="Bold typography"
                                        className=" absolute left-0 top-0 
                                        max-h-[85px] min-h-[85px] max-w-[75px] min-w-[75px]"
                                        width={50} height={50}
                                    />
                                    <div className=" absolute right-2 top-1 
                                        max-h-[85px] min-h-[85px] max-w-[75px] min-w-[75px]">
                                        <Button variant='classic' size="2" color='red' >
                                            {product.discount}%&nbsp;OFF
                                        </Button>
                                    </div>
                                </>
                            ) :
                                (<></>)}

                            <Image
                                src={product.image[0]}
                                alt="Bold typography"
                                className="image max-h-[240px] min-h-[240px]
                                 max-w-[240px] min-w-[240px]"
                                width={240} height={240}
                            />
                            <Box                                                              
                                className="image absolute top-20 left-20 
                                opacity-0 hover:opacity-100 text-center
                                transition-opacity duration-300 
                                cursor-pointer max-h-[240px] min-h-[240px]
                                max-w-[240px] min-w-[240px] "
                                
                            >
                                
                                <Flex >
                                <Button size="4" 
                                variant="surface" color='red' >
                                <FaHeart/>
                                <Text size="4" > Favorite</Text>  
                                </Button>
                                </Flex>
                                
                                </Box>
                        </div>
                    </Link>
                </Inset>
                {product.discount > 0 ? (
                    <>
                        <div className='flex justify-between'>
                            <Text as="p" size="4">
                                <Strong>
                                    <span className="text-[14px] align-top">$</span>
                                    {(product.price - (product.price * (product.discount / 100))).toFixed(2)}
                                </Strong>
                            </Text>
                            <Text as="p" size="4" color='gray' className='line-through'>
                                <Strong>
                                    <span className="text-[14px] align-top">$</span>
                                    {product.price}
                                </Strong>
                            </Text>
                        </div>
                    </>) : (
                    <Text as="p" size="4">
                        <Strong>
            <span className="text-[14px] align-top">$</span>{product.price}</Strong>
                    </Text>
                )
                }
                <Separator orientation="horizontal" size="4" my="1" />
                <Text as="p" size="2" className="mb-2">
                 <Strong> {product.name.substring(0, 25)}</Strong>  
                </Text>
                <Flex className="justify-between" >
                   <Flex gap="3" align="center">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button color="gray" variant="surface" size="2">
                                    Sizes
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content size="2">
                                {product.sizes?.map((item) => (
                                    <DropdownMenu.Item shortcut="⌘" key={item}>
                                        {item}
                                    </DropdownMenu.Item>
                                ))}
                            </DropdownMenu.Content>

                        </DropdownMenu.Root>
                    </Flex>
                    <Button variant="surface" mx="2" asChild>
                        <Link href={`/products/${product.slug}`} >
                            <AiOutlineShoppingCart />
                            Order Now
                        </Link>
                    </Button>
                </Flex>
            </Card>
        </Box>

    );
};

export default Cardgrid