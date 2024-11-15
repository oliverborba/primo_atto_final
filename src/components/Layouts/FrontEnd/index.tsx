import React from "react";
import "./styles.css";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Dev from "../../Common/DevFooter";


type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <div className="frontend-container">
            <Header />
            <main className="frontend-main">
                {children}
            </main>
            <Footer />
            <Dev />
        </div>
    );
};

export default Frontend;
