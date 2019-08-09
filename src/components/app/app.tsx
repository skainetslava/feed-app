import * as React from "react";
import { Navbar } from "src/components/organisms/navbar";

import "./app.scss";

const App: React.FC = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            {children}
        </div>
    )
};

export default App;
