import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout(children){
    return(
        <div className="Layout">

            <Navbar/>

            <main>
                {children}
            </main>

            <Footer/>

        </div>
    );
};

export default Layout;