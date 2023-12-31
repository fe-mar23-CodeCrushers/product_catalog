import React, { useMemo } from 'react';
import './Pagination.scss';
import classNames from 'classnames';
import { getNumbers } from '../../Helpers/getnumbers';

interface PaginationProps {
    onPageChange: (page: number) => void,
    pageSize: number,
    setPageSize: (numberOfPages: number) => void,
    totalCount: number,
    currentPage: number,
    totalPages: number,
    isLastPage: boolean,
    handleSelectChange: (value: number) => void,
};

export const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    onPageChange,
    currentPage,
    totalCount,
    pageSize,
    setPageSize,
    isLastPage,
}) => {
    const range = getNumbers(1, totalPages);

    const selectedRange: number[] = useMemo(() => {
        let newRange = range;
        let startIndex = currentPage - 1;
        let endIndex = currentPage + 3;

        if (totalPages > 4) {
        newRange = range.slice(startIndex, endIndex);
        }

        if (currentPage < 5) {
            newRange = range.slice(0, 4);
        }

        if (currentPage >= 5 && currentPage < 9) {
            newRange = range.slice(4, 8);
        }

        if (currentPage >= 9 && currentPage < 13) {
            newRange = range.slice(8, 12);
        }

        if (currentPage >= 13 && currentPage < 17) {
            newRange = range.slice(12, 16);
        }

        if (currentPage > totalPages - 3) {
            newRange = range.slice(-4);
        }
    
        return newRange;
    }, [range, currentPage, totalPages])
    

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    return (
        <div className="pagination">

            {pageSize !== totalCount && (
                <ul className="pagination__container" >

                <li
                    className={classNames('pagination__item', {
                    disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow__left"><img src={require(`../../assets/arrow-left.png`)} alt="arrow left"></img></div>
                </li>

                {selectedRange.map(pageNumber => {
                    return (
                    <li
                        className={classNames('pagination__item', {
                        selected: pageNumber === currentPage
                        })}
                            onClick={() => onPageChange(pageNumber)}
                            key={pageNumber}
                    >
                    {pageNumber}
                    </li>
                    );
                })}

                <li
                    className={classNames('pagination__item', {
                        disabled: isLastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow__right"><img src={require(`../../assets/arrow-right.png`)} alt="arrow right"></img></div>
                </li>
            </ul>
            )}
        </div>
    )
};