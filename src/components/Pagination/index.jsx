import { useMemo } from 'react';
import './index.css';

const Pagination = ({ total = 0, pageSize = 40, current = 1, onPageChange }) => {
  const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  let pages = new Array(totalPage).fill(true).map((_, index) => index + 1);
  const onPrevClick = () => {
    if (onPageChange && current > 1) {
      onPageChange(current - 1);
    }
  }
  const onNextClick = () => {
    if (onPageChange && current < totalPage) {
      onPageChange(current + 1);
    }
  }
  const onNumClick = page => {
    if (onPageChange && page !== current) {
      onPageChange(page);
    }
  }

  if (pages.length > 5) {
    pages = [...pages.slice(0, 3), '...', pages[pages.length - 1]];
  }

  if (total === 0) return null;

  return (
    <div className='pagination'>
      <span
        className={`pagination-btn pagination-btn--prev ${current <= 1 ? 'is-disabled' : ''}`}
        onClick={onPrevClick}
      >
        ＜
      </span>
      {pages.map(item => (
        <span
          className={`pagination-btn pagination-btn--text ${current === item ? 'is-active' : ''}`}
          key={item}
          onClick={() => onNumClick(item)}
        >
          {item}
        </span>
      ))}
      <span
        className={`pagination-btn pagination-btn--next ${current >= totalPage ? 'is-disabled' : ''}`}
        onClick={onNextClick}
      >
        ＞
      </span>
    </div>
  )
}

export default Pagination;
