import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

import SearchBar from './searchbar';

export default function Header() {
  return (
    <header className="fixed h-[60px] w-full p-2 flex justify-between items-center bg-menuDark">
      <Link to={{ pathname: '/' }} className="flex items-center cursor-pointer">
        <FaYoutube className="text-4xl text-brandRed" />
        <h1 className="text-2xl">Youtube</h1>
      </Link>
      <SearchBar />
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </header>
  );
}
