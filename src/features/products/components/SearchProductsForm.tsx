'use client';

import Input from '@/components/Input';
import { Search } from 'lucide-react';
import { type FormEvent } from 'react';
import { useSearchQueryParams } from '../hooks/useSearchQueryParams';

function SearchProductsForm() {
  const { setQuery } = useSearchQueryParams('query');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { query } = Object.fromEntries(formData.entries()) as {
      query: string;
    };

    if (!query) return setQuery(null);

    setQuery(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={<Search className='szie-5' />}
        placeholder='Search products...'
        name='query'
      />
    </form>
  );
}

export default SearchProductsForm;
