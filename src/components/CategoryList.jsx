import React, { useState } from 'react';
import { useCategories } from '../services/CategoryService';

const CategoryList = () => {
  const { categories, addCategory, deleteCategory } = useCategories();
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory({ id: Date.now(), name: newCategory });
      setNewCategory('');
    }
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} <button onClick={() => deleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category"
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default CategoryList;