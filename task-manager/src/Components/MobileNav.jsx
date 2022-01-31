import React from 'react';

import Hamburger from './Hamburger/Hamburger'

export default function Components (){

    return(
        <div className='row d-md-none px-3 pt-4 fixed-top' style={{alignItems: 'space-between'}}>
            <div className="col">
                {/* <Hamburger /> */}
                ☰
            </div>
            <div className="col text-end">
                +
            </div>

        </div>

    )

}