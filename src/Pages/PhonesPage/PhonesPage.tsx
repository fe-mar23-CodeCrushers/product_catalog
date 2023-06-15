import './PhonesPage.scss';
import { ProductList } from '../../Components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { Phone } from '../../types/phone';
import { getPhones } from '../../api/phones';
import { Pagination } from '../../Components/Pagination';

function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const totalCount = phones.length;
  const pages = Math.ceil(totalCount / pageSize);
  const isLastPage = pages === currentPage;
  const firstElement = currentPage * pageSize - pageSize + 1;
  const lastElement = isLastPage ? totalCount : currentPage * pageSize;
  const pageElements = getNumbers(firstElement, lastElement);

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSelectedPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, [phones]);

  return (
    <>
      <ProductList phones={phones} />
      <Pagination
        totalCount={totalCount} 
        currentPage={currentPage}
        isLastPage={isLastPage}
        firstElement={firstElement}
        lastElement={lastElement}
        pageElements={pageElements} 
        handlePageSizeChange={handlePageSizeChange}
        handleSelectedPageChange={handleSelectedPageChange}
        />
    </>
  )
}