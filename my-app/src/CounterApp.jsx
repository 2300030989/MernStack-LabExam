// Filename - App.js

import React, { useState } from "react";

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Counter App</h2>

            <div style={styles.counterValue}>{counter}</div>

            <div style={styles.buttons}>
                <button style={{ ...styles.button, backgroundColor: "#28a745" }} onClick={increment}>
                    Increment
                </button>

                <button style={{ ...styles.button, backgroundColor: "#dc3545" }} onClick={decrement}>
                    Decrement
                </button>

                <button style={{ ...styles.button, backgroundColor: "#007bff" }} onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f8f8f8",
    },
    header: {
        fontSize: "1.4rem",
        margin: "1rem 0",
        color: "#333",
        textTransform: "uppercase",
    },
    counterValue: {
        fontSize: "3rem",
        fontWeight: "bold",
        margin: "1rem 0",
        color: "#007bff",
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        fontSize: "1rem",
        padding: "1rem 1.5rem",
        margin: "0.5rem",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#fff",
        border: "none",
        outline: "none",
        transition: "background 0.3s",
        boxShadow: "0px 0px 10px 0px grey",
    },
};

export default CounterApp;
