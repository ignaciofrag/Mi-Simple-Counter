import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter'; // Actualiza la ruta si es necesario según tu estructura de carpetas

function App() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <SecondsCounter seconds={seconds} />
        </div>
    );
}

export default App;

