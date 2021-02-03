import React from "react";
import Header from "./Header";

const Home = () => {
    return (
        <div className="flex-1 max-w-7xl w-full pb-12 px-4 sm:px-6 lg:px-8">
            <Header title={`Welcome`} />
        </div>
    );
};

export default Home;
