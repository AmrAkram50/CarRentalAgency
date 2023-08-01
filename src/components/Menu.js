
const Menu = () => {
    return(
        <div className="flex justify-between bg-white">
            <div className=" px-4 mx-16 text-black font-semibold">
              <span className="text-[40px] text-yellow-400">VIP</span>
              <span className="text-2xl mx-2">Limousine</span>
            </div>
            <ul className="flex gap-6 text-lg font-semibold text-black h-full mx-16 py-6">
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>Home</button></li>
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>Inventory</button></li>
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>Blog</button></li>
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>About</button></li>
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>Pages</button></li>
                <li className='px-4 border-b-2 border-b-transparent hover:border-b-red-600'><button>Contact</button></li>
            </ul>
        </div>
    )   
}
export default Menu;