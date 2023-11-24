import { FaYoutube } from 'react-icons/fa';

import SearchBar from './searchbar';

export default function Header() {
  return (
    <header className="p-2 flex justify-between items-center bg-menuDark">
      <div className="flex items-center">
        <FaYoutube className="text-4xl text-brandRed" />
        <h1 className="text-2xl">Youtube</h1>
      </div>
      <SearchBar />
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </header>
  );
}
