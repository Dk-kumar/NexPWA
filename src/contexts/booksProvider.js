import { useState } from 'react';
import React, { createContext } from "react";
const BookContext = createContext();

export const BooksProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginateNextPage = () => setCurrentPage(currentPage + 1);
    
    const paginatePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <BookContext.Provider value={{ currentPage, paginateNextPage, paginatePreviousPage }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContext;