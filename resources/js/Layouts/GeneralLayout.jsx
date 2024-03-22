import Footer from "@/Components/Footer";
import NavBar from "@/Components/Nav/NavBar";

export default function GeneralLayout({ auth, children }) {
    return (
        <>
            <NavBar auth={auth} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
