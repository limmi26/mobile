import Logo from "./logo"
import Button from "../Button"
import Navbar from "../Navbar";
import './main.css'

export default function Header() {
    const clickRegister = () => window.alert('ini register');
    const clickLogin = () => window.alert('ini login');

  return (
   <header className="header">
       {/* logo */}
       <Logo />

       {/* navbar */}
       <Navbar />

       {/* button */}
       <Button test="Register" click={clickRegister} />
       <Button test="Login" click={clickLogin} />
   </header>
  )
}
