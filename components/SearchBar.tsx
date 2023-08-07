'use client'

import React from 'react'
import { SearchManufacturer } from '.'
import { useState } from 'react'

const SearchBar = () => {
    const [manufacturer, setmanuFacturer] = useState('');

    const handleSearch = () => { }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManuFacturer={setmanuFacturer}

                />
            </div>
        </form>
    )
}

export default SearchBar