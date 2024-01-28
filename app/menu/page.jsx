import MenuCards from "../components/MenuCards";


export default function Menu() {
  return (
    <div className="w-full flex flex-col justify-start lg:px-[15%]">
      <h1 className="px-5 text-title font-bold font-comfortaa my-6">Меню</h1>
      <div>
        <MenuCards />
      </div>
    </div>
  )
}