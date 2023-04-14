import { useState } from 'react';
import { Navigation } from '../Navigation';
import './style.css';

export const Burger = ()=> {
    const [open, setOpen] = useState(false);

  const styleFirst = {
    transform: open ? 'rotate(45deg)' : 'rotate(0)',
    translate: open ? '0 8px' : '0',
  };
  const styleSecond = {
    opacity: open ? '0' : '1',
  };
  const styleThird = {
    transform: open ? 'rotate(-45deg)' : 'rotate(0)',
    translate: open ? '0 -8px' : '0',
  };

  return (
    <>
        <div onClick={() => setOpen(!open)}>
            <div className="burger" style={{ ...styleFirst }}/>
            <div className="burger" style={{ ...styleSecond }}/>
            <div className="burger" style={{ ...styleThird }}/>
        </div>

        {open ? <div className='open-menu'> <Navigation open={open}/></div>: null}
    </>
  );
}