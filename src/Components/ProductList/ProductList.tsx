import './ProductList.scss';
import { Phone } from '../../types/phone';
import { PhoneCard } from '../PhoneCard';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { getPhones } from '../../api/phones';
import { SortType } from '../../types/SortType';

export const ProductList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [sortingType, setSortingType] = useState(SortType.Newest);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  const totalCount = phones.length;
  const pages = Math.ceil(totalCount / pageSize);
  const isLastPage = pages === currentPage;

  const totalPages = Math.ceil(phones.length / pageSize);

  const handleSortTypeChange = (value: SortType) => {
    setSortingType(value);
  }

  const sortPhones = (sortingType: SortType, phones: Phone[]) => {
    switch (sortingType) {
      case SortType.Newest: 
      return [...phones].sort(
        (phoneA: Phone, phoneB: Phone) => phoneB.year - phoneA.year,
        );
      case SortType.Cheapest:
        return [...phones].sort(
          (phoneA: Phone, phoneB: Phone) => phoneA.price - phoneB.price,
        );
      case SortType.Alphabetically:
        return [...phones].sort(
          (phoneA: Phone, phoneB: Phone) => phoneA.name.localeCompare(phoneB.name),
        );
    }
  };

  const handleSelectChange = (value: number) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const currentPhones = useMemo(() => {
    let sortedPhones = sortPhones(sortingType, phones);

    if (pageSize === sortedPhones.length) {
      return sortedPhones;
    }

    const firstPageIndex = currentPage * pageSize - pageSize + 1;
    const lastPageIndex = isLastPage ? totalCount : currentPage * pageSize + 1; 

    return sortedPhones.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, phones, isLastPage, totalCount, sortingType]);

  return (
    <main>

      <section className="sorter">
        <div className="sorter__container">

          <label className="sorter_label--select">Sort by</label>
          <select
            title="Items on page"
            id="select"
            className="sorter__items-selector"
            defaultValue="Newest"
            onChange={(event) => handleSortTypeChange(event.target.value as SortType)}
          >
            <option value={SortType.Newest}>Newest</option>
            <option value={SortType.Alphabetically}>Alphabetically</option>
            <option value={SortType.Cheapest}>Cheapest</option>
          </select>
        </div>

        <div className="sorter__container">
          <label className="sorter_label--select">Items on page</label>

          <select
            title="Items on page"
            id="select"
            className="sorter__items-selector"
            defaultValue="8"
            onChange={(event) => handleSelectChange(Number(event.target.value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value={totalCount}>all</option>
          </select>
        </div>
      </section>

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
        handleSelectChange={handleSelectChange}
        isLastPage={isLastPage}
      />
      </div>
  </main >
  )
}