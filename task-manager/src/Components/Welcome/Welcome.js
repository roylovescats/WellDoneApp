import React from "react";
import { useState } from "react";

import { Clock } from "../Clock/Clock";

export default function Welcome() {
    return (
        <div>

            {/* <!-- Start of upper part: Welcome --> */}
            <div className="row h-50">
                <div className="col-12 mt-4">
                    <h1 >What're you gonna do?</h1>
                </div>
            </div>
            {/* <!-- End of upper part: Welcome --> */}

            {/* <!-- Start of lower part: Date & Time --> */}
            <div className="row h-50">
                <div className="col-12 pt-5">
                    <h2><Clock />2022 FEB 11 09:09am</h2>
                </div>
            </div>
        {/* <!-- End of lower part: Date & Time --> */}
        </div>
    )
}