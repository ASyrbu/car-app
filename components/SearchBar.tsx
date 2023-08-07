'use client'

import React from 'react'
import SearchManuFacturer from './SearchManufacturer'
import { useState } from 'react'

const SearchBar = () => {
    const [manufacturer, setmanuFacturer] = useState('');

    const handleSearch = () => { }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManuFacturer
                    manufacturer={manufacturer}
                    setManuFacturer={setmanuFacturer}

                />
            </div>
        </form>
    )
}

export default SearchBar