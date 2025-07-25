import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { setUser, setshowUserLogin, navigate, setSearchQuery,
        getCartCount,getCartAmount,searchQuery} = useAppContext();
    
    const {openSignIn} = useClerk()
    const {user} = useUser()

    const logout = async ()=>{
        setUser(null);
        navigate('/');
    }

    useEffect(()=>{
        if(searchQuery.length > 0){
            navigate("/products")
        }
    },[searchQuery])

  return (
     <nav className="flex items-center justify-between md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 relative transition-all bg-primary/10"> {/* px-6 */}

            <NavLink to='/' onClick={()=> setOpen(false)}>
                <img className="h-16" src={assets.logo1} alt="logo1"/>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products' onClick={()=>setOpen(false)}>All Product</NavLink>
                <NavLink to='/contact' onClick={()=>setOpen(false)}>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e)=>setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search" className='w-4 h-4'/>
                </div>

                <div onClick={()=>navigate("cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart" className='w-6 opacity-80'/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

            { user ? ( <UserButton></UserButton>) : 
            ( 
            <button 
            onClick={openSignIn} 
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                Login
            </button>
                // <div className='relative group'>
                //     <img src={assets.profile_icon} alt="profile" className='w-10'/>
                //     <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border
                //     border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                //         <li onClick={()=>navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                //         <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                //     </ul>
                // </div>
            )}
            </div>

            {/* Mobile Search */}
            <div className="flex pr-4 lg:hidden items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                className="py-1.5 w-22 sm:w-40 bg-transparent outline-none placeholder-gray-500 text-sm"
                type="text"
                placeholder="Search..."
                />
                <img src={assets.search_icon} alt="search" className="w-4 h-4 pr-2" />
            </div>

            {/* Mobile Cart and Menu icon */}
            <div className='sm:hidden pl-4 pr-1 pt-1'>   {/*flex items-center */}
                {/* <div onClick={()=>navigate("cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart" className='w-6 opacity-80'/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div> */}
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt="menu" />
                </button>
            </div>

            {/* Mobile Menu */}

         { open && (
            <div className={`${open ? 'flex' : 'hidden'} z-50 absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to='/' onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to='/products' onClick={()=>setOpen(false)}>All Product</NavLink>
                <NavLink to='/cart' onClick={()=>setOpen(false)}>My Cart</NavLink>
                { user && 
                    <NavLink to='/my-orders' onClick={()=>setOpen(false)}>My Orders</NavLink>
                }
                <NavLink to='/contact' onClick={()=>setOpen(false)}>Contact</NavLink>

                {user ? (
                    <UserButton></UserButton>
                ):(
                    <button onClick={openSignIn}
                    className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                      Login
                    </button>
                )}
                
            </div>
          )}

        </nav>
  )
}

export default Navbar