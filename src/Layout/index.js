import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Layout({children}) {
  return (
    <div className="Layout">
    {/* header */}
    <Header />

    {/* main */}
    <main>
        {children}
    </main>

    {/* footer */}
    <Footer />
    
    </div>

  )
}
