type MenuLabel={
    label:string
}

const MenuBar = ({label}:MenuLabel) => {
  return (
    <button className="px-8 py-4 bg-white border-2 border-gray-50 shadow-lg rounded-lg">{label}</button>
  )
}

export default MenuBar;