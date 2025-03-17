import { createContext, useContext, useReducer } from 'react';

const CategoryContext = createContext();

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return { categories: [...state.categories, action.payload] };
    case 'DELETE_CATEGORY':
      return { categories: state.categories.filter(cat => cat.id !== action.payload) };
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, { categories: [] });

  const addCategory = (category) => dispatch({ type: 'ADD_CATEGORY', payload: category });
  const deleteCategory = (id) => dispatch({ type: 'DELETE_CATEGORY', payload: id });

  return (
    <CategoryContext.Provider value={{ categories: state.categories, addCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);