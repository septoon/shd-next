'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from 'primereact/dialog';

import { useSelector, useDispatch } from 'react-redux';
import { setNavVisible } from '../GlobalRedux/Features/navVisible/navVisibleSlice';
import { setItem } from '../GlobalRedux/Features/item/itemSlice';
import { setCatalogName } from '../GlobalRedux/Features/catalogName/catalogNameSlice';

import { icons } from '../api/icons';
import { data } from '../api/data';

const MenuNav = () => {
  const navVisible = useSelector((state) => state.navVisible.navVisible);
  const position = useSelector((state) => state.position.position);
  const dispatch = useDispatch();

  return (
    <Dialog
      header="Меню"
      visible={navVisible}
      position={position}
      className="w-[90vw] h-[70vh] lg:w-[40vw]"
      onHide={() => dispatch(setNavVisible(false))}
      draggable={false}
      resizable={false}>
      <div className="w-full flex justify-start relative bg-white font-comfortaa font-bold items-start rounded-t-lg h-half-screen pb-10">
        <div className="w-[22px] mr-2.5 pt-1">
          {icons.map((item, index) => (
            <Image
              src={item.icon}
              alt="icon"
              width={20}
              height={20}
              className="w-auto mb-4"
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col items-start">
          {Object.keys(data).map((category, index) => (
            <Link href="/menu/item" key={index} className="mb-2">
              <button
                className="text-dark text-xl font-semibold w-full"
                onClick={(e) => {
                  dispatch(setNavVisible(false));
                  dispatch(setItem(data[category]));
                  dispatch(setCatalogName(category));
                }}>
                {category}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default MenuNav;
