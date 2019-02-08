import React from 'react';

const App = ({ children }) => (
    <div typeof="schema:WebPage">     
        <main property="schema:mainContentOfPage">
            {children}
        </main>
    </div>
);

export default App;

