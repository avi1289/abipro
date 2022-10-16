import Link from "next/link"
import {useRouter}  from "next/router"
const NavBar=()=>{
    const router=useRouter
    function isActive(route){
        if(route==router.pathname){
            return "active"
        }
        else{
            return
        }
    }

    return(
        <nav className="black-text">
        <div className="nav-wrapper #1a237e #fafafa grey lighten-5 ">
          <a href="#" className="brand-logo left black-text">Logo</a>
          <ul id="nav-mobile" className="left_1">
            <li className={isActive('/login')}><Link href="/login"><a className="black-text">login</a></Link></li>
            <li className={isActive('/signup')}><Link href="/signup"><a className="black-text">signup</a></Link></li>
            <li className={isActive('/create')}><Link href="/create"><a className="black-text">create</a></Link></li>
            
          </ul>
        </div>
        
      </nav>
      
    )
}

export default NavBar