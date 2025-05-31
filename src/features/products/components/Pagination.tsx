'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useSearchQueryParams } from '../hooks/useSearchQueryParams';
import { RESULT_PER_PAGE } from '../config';
import Button from '@/components/Button';

function Pagination({ count }: { count: number }) {
  const { readQuery: currentPage, setQuery } = useSearchQueryParams('page');

  const page = Number(currentPage) || 1;
  const totalPages = Math.ceil(count / RESULT_PER_PAGE);

  function handlePrevious() {
    if (page > 1 && page !== 0) setQuery(String(page - 1));
  }

  function handleNext() {
    if (page < totalPages) setQuery(String(page + 1));
  }

  return (
    <div className='flex justify-between items-center mt-5'>
      <Button
        disabled={page === 1}
        onClick={handlePrevious}
        variant='ghost'
        icon={<ChevronLeft />}
      >
        Previous
      </Button>

      <span className='text-zinc-400 text-xs md:text-sm font-semibold ring-2 ring-zinc-400 px-3 py-2 rounded-lg shadow'>
        Page {page} / {totalPages}
      </span>

      <Button
        disabled={page === totalPages}
        onClick={handleNext}
        variant='ghost'
        className='flex-row-reverse'
        icon={<ChevronRight />}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
