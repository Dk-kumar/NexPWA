import { useState } from "react";
import React, { createContext, ReactNode } from "react";

interface BookContextValue {
	currentPage: number
	paginateNextPage: () => void
	paginatePreviousPage: () => void
  }

const BookContext = createContext<BookContextValue>({
	currentPage: 1,
	paginateNextPage() {},
	paginatePreviousPage() {}
});

interface Props {
  children?: ReactNode;
}

export const BooksProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginateNextPage = () => setCurrentPage(currentPage + 1);

  const paginatePreviousPage = () => setCurrentPage(currentPage - 1);

  return (
    <BookContext.Provider
      value={{ currentPage, paginateNextPage, paginatePreviousPage }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
