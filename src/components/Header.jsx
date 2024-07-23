"use client";
import { Button, DropdownMenu, Strong } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegUser, FaSearch, FaShoppingCart, FaMapPin, FaPaintBrush, FaCircle } from "react-icons/fa";
import { THEME } from "@/constant/products";

const Header = ({ accentColor, setAccentColor }) => {
  return (
    <div className="self-stretch px-16 py-4 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-1.5 justify-center text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
            <Link href={"/"}>
              <Image
                loading="lazy"
                src="/logo1.png"
                className="shrink-0 my-auto  w-[200px] h-auto"
                width={150}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <Button variant="ghost" size="3"><Strong>Home</Strong></Button>
            <Button variant="ghost" size="3"><Strong>Shop</Strong></Button>
            <Button variant="ghost" size="3"><Strong>About</Strong></Button>
            {/* Colors Theme */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost" size="3">
                  Colors
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="2">
                {THEME.map((item) => (
                  <DropdownMenu.Item
                    key={item.accent}
                    onSelect={() => setAccentColor(item.accent)}
                  >
                    <FaCircle className={`inline mr-2 text-${item.color}`} />
                    {item.accent}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between self-stretch my-auto max-md:mt-10">
            <Button variant="ghost" size="3">
              <FaRegUser className="shrink-0 w-10 aspect-square" />
            </Button>
            <Button variant="ghost" size="3" asChild>
              <Link href="/search">
                <FaSearch className="shrink-0 w-10 aspect-square" />
              </Link>
            </Button>
            <Button variant="ghost" size="3">
              <FaHeart className="shrink-0 w-10 aspect-square" />
            </Button>
            <Button variant="ghost" size="3">
              <FaShoppingCart className="shrink-0 w-10 aspect-square" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
