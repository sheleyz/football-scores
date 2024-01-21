import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="mt-5 py-4 bg-light">{children}</main>
            <Footer />
        </div>
    );
}
