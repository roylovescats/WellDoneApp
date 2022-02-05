import { useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    height: 20px;
    background: lightgrey;
    border-radius: 12px
`

const Progress = styled.div`
    transition: 0.8s ease-out;
    width: 0;
    background: linear-gradient(270deg, #A5D9B7 -12.42%, #70bbae 31.44%);
    height: 100%;
    display: flex;
    align-items: center;
    align-contents: center;

`


export default function ProgressBar (){

    const [style, setStyle] = useState({})

    setTimeout(() => {

        const newStyle = {
            opacity: 1,
            width: '70%',
            borderRadius: 12,
        }

        setStyle(newStyle)
    }, 300)

    return(
        <div>
            <h4 className='mb-3 ms-2'>All Tasks</h4>
            <Bar className="col-12"
            >
                <Progress style={style}>
                    <p className='text-center w-100' style={{fontSize: 15, lineHeight: 0, color: 'white'}}> 70%</p>
                </Progress>
            </Bar>
        </div>

    )

}