import './ProductList.scss';
import { Phone } from '../../types/phone';
import { PhoneCard } from '../PhoneCard';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { getPhones } from '../../api/phones';

export const ProductList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  const totalCount = phones.length;
  const pages = Math.ceil(totalCount / pageSize);
  const isLastPage = pages === currentPage;

  const totalPages = Math.ceil(phones.length / pageSize);

  const currentPhones = useMemo(() => {
    if (pageSize === phones.length) {
      return phones;
    }

    const firstPageIndex = currentPage * pageSize - pageSize + 1;
    const lastPageIndex = isLastPage ? totalCount : currentPage * pageSize + 1; 

    return phones.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, phones, isLastPage, totalCount]);
  
  return (
    <main>
      <section className="products">
        {currentPhones.map(phone => (
            <PhoneCard 
              key={phone.id}
              phone={phone}
            />
        ))}
      </section>
    
      <div>
      <Pagination
        currentPage={currentPage}
        totalCount={phones.length}
        totalPages={totalPages}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onPageChange={setCurrentPage}
        isLastPage={isLastPage}
      />
      </div>
  </main >
  )
}