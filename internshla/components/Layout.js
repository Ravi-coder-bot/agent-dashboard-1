"use client";
import React from 'react';
import "./styles.css";

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            <header className="bg-blue-500 text-white p-4 text-center">
                <h1>Agent Management</h1>
            </header>
            <main>{children}</main>
            <footer className="bg-gray-800 text-white p-4 text-center mt-4">
                <p>&copy; 2024 Agent Management</p>
            </footer>
        </div>
    );
};

export default Layout;
