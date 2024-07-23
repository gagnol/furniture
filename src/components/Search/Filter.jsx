'use client';
import { Button, DropdownMenu} from '@radix-ui/themes';
import { useState } from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="md:inline-flex ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="3">
            {selectedCategory}
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content style={{ width: 'full' }}>
          {categories.map((category) => (
            <DropdownMenu.Item key={category} onSelect={() => handleCategoryChange(category)}>
              {category}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Filter;
