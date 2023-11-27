import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import Input from '../common/input';
import Wrapper from '../common/wrapper';

export default function Searchbar() {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    navigate({
      pathname: '/results',
      search: `?${createSearchParams({ search_query: text.trim() })}`,
    });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setText(value);
  };

  return (
    <Wrapper className="ml-10 flex flex-[0_1_732px]">
      <Input
        onSubmit={handleSubmitForm}
        className="flex flex-1 border border-gray-300 rounded-full overflow-hidden"
      >
        <Input.field
          value={text}
          placeholder="검색"
          onChange={handleChangeInput}
          className="py-2 ps-4 flex-1 rounded-l-full"
        />
        <Wrapper className="flex border-l-[1px] border-gray-300 bg-gray-100">
          <Input.button className="px-4" type="submit">버튼</Input.button>
        </Wrapper>
      </Input>
    </Wrapper>
  );
}
