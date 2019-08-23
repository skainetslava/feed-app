import * as React from "react";
import { UserProvider } from "src/context"

import { Navbar } from "src/components/organisms/navbar";
import { PlayerContainer } from "src/containers/player";

import "./app.scss";

const App: React.FC = ({ children }) => {
    return (
        <UserProvider value="699056262">
            <div className="app">
                <Navbar />
                <PlayerContainer />
                {children}
            </div>
        </UserProvider>
    )
};

export default App;
