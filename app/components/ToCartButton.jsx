'use client';

const ToCartButton = () => {
  return (
    <>
      {items.length > 0 && (
        <NavLink
          to="/cart"
          className="w-auto h-10 px-2 flex justify-around items-center animate-pulse rounded-md text-white bg-lightSlate-gray shadow-xl bg-cover bg-center fixed bottom-main-btn left-6">
          <span className="text-white font-bold">{totalCount}</span>
          <Image className="h-6 mx-2" src={cartIcon} alt="icon" />
          <span className="font-bold">{totalPrice} ₽</span>
        </NavLink>
      )}
    </>
  );
};

export default ToCartButton;
