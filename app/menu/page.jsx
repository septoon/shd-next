import MenuCards from "../components/MenuCards";

export const metadata = {
  title: 'Шашлычный дом | Меню',
  description: 'Меню',
}

export default function Menu() {
  return (
<<<<<<< HEAD
    <div className="w-full flex flex-col justify-start lg:px-[15%]">
      <h1 className="px-5 text-title font-bold font-comfortaa my-6">Меню</h1>
      <div>
        <MenuCards />
      </div>
    </div>
  )
}
=======
    <div className="page-section">
      <div className="section-headline">
        <h1 className="section-title">Меню</h1>
        <p className="section-subtitle">Горячий гриль, прохладные напитки и салаты для компании.</p>
      </div>
      <MenuCards />
    </div>
  )
}
>>>>>>> 806ff73 (update)
