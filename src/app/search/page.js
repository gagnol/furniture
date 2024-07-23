'use client';
import React, { useState } from 'react';
import GridList from "@/components/Search/GridList";
import { RECOMMENDED_PRODUCTS } from "@/constant/products";
import SearchBox from '@/components/Search/SearchBox';
import Filter from '@/components/Search/Filter';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { Button, Text } from '@radix-ui/themes';
import * as Checkbox from '@radix-ui/react-checkbox';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Categories');
  const [isNewChecked, setIsNewChecked] = useState(false);
  const [isDiscountChecked, setIsDiscountChecked] = useState(false); // Track the discount checkbox state
  const [page, setPage] = useState(1);
  const perPage = 8;

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
    setPage(1); // Reset to first page on new filter
  };

  const handleNewCheckboxChange = (checked) => {
    setIsNewChecked(checked);
    setPage(1); // Reset to first page on checkbox change
  };

  const handleDiscountCheckboxChange = (checked) => {
    setIsDiscountChecked(checked);
    setPage(1); // Reset to first page on checkbox change
  };

  const clearFilters = () => {
    setQuery('');
    setFilterCategory(null);
    setSelectedCategory('Categories');
    setIsNewChecked(false);
    setIsDiscountChecked(false);
    setPage(1); // Reset to first page on clearing filters
  };

  const categories = Array.from(new Set(RECOMMENDED_PRODUCTS.map(product => product.category)));

  const filteredProducts = RECOMMENDED_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) &&
    (filterCategory ? product.category === filterCategory : true) &&
    (!isNewChecked || product.new) && // Filter by best seller
    (!isDiscountChecked || product.discount > 0) // Filter by discount
  );

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / perPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * perPage, page * perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1 <= totalPages ? page + 1 : totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Other page elements */}
      <div className="flex justify-center items-center flex-grow">
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center flex-grow flex-wrap">
        <div className="flex items-center mx-4 mb-4 md:mb-0">
          <FaFilter />
          <Text size="4" className='mr-4'>Filter by</Text>
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="flex items-center mx-4 mb-4 md:mb-0">
          <Checkbox.Root
            className={`
              flex h-[18px] w-[18px] appearance-none items-center 
              justify-center rounded-[4px] border-gray-300 border-2
              outline-none ${isNewChecked ? 'bg-yellow-600' : 'bg-white'}
            `}
            checked={isNewChecked}
            onCheckedChange={handleNewCheckboxChange}
          >
            <Checkbox.Indicator>
              <FaCheck width="14px" className="text-gray-600 font-bold rounded-[4px]" />
            </Checkbox.Indicator>
          </Checkbox.Root>  
          <Text size="4" className='ml-2'>New Arrival</Text>
        </div>
        <div className="flex items-center mx-4 mb-4 md:mb-0">
          <Checkbox.Root
            className={`
              flex h-[18px] w-[18px] appearance-none items-center 
              justify-center rounded-[4px] border-gray-300 border-2
              outline-none ${isDiscountChecked ? 'bg-yellow-600' : 'bg-white'}
            `}
            checked={isDiscountChecked}
            onCheckedChange={handleDiscountCheckboxChange}
          >
            <Checkbox.Indicator>
              <FaCheck width="14px" className="text-gray-600 font-bold rounded-[4px]" />
            </Checkbox.Indicator>
          </Checkbox.Root>  
          <Text size="4" className='ml-2'>Sales</Text>
        </div>
        <button
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
      <div className="flex flex-col items-center px-20 pt-4 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {paginatedProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <GridList products={paginatedProducts} />
        )}
        <div className="flex justify-center items-center my-5 w-[415px] mx-auto h-[36px] mb-[16px] min-w-[216px] max-w-[216px]">
          <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green">
            {page === 1 ? (
              <button size="1" variant="surface" color="gray" aria-disabled="true">
                {"<<"}
              </button>
            ) : (
              <button size="1" variant="surface" onClick={() => setPage(prevPage)}>
                {"<<"}
              </button>
            )}
            {pageNumbers.map((pageNumber, index) => (
              <button
                className={`w-[24px] h-[24px] rounded-full 
                  ${page === pageNumber ? "bg-yellow-600 text-white" 
                    : "bg-gray-300 text-black"}`}
                key={index}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            {page === totalPages ? (
              <Button size="1" variant="surface" color="gray" aria-disabled="true">
                {">>"}
              </Button>
            ) : (
              <Button size="1" variant="surface" onClick={() => setPage(nextPage)}>
                {">>"}
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Other page elements */}
    </div>
  );
};

export default SearchPage;
