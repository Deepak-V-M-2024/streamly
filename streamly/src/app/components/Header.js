import React from 'react'
import HeaderItems from './HeaderItems'
import { HomeIcon } from '@heroicons/react/24/outline'


function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems Icon={HomeIcon} Title="Home" />
        <HeaderItems Icon={HomeIcon} Title="Home" />
        <HeaderItems Icon={HomeIcon} Title="Home" />
        </div>

    </header>
  );
}

export default Header
