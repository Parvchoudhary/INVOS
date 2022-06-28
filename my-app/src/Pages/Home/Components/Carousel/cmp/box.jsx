import React from 'react';
import "./box.css";
function Box({text,name,year}) {
  return (
    <div className='box_cont'>
      <div className='desc_cont'>
              <div className='icon'></div>
              <div className='desc'>
                  <p>{text}</p>
              </div>
              <div className='stars'></div>
        </div>
        <div className='info_cont'>
            <div className='name'>{name}</div>
            <div className='year'>{year}</div>
        </div>
    </div>
  )
}
export default Box;

