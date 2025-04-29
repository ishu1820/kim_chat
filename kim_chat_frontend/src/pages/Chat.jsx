import React, { useState, useEffect } from "react";
import { fetchProfile } from '../api/chatApi';
import Footer from "../components/Footer";


function Chat() {

    useEffect(() => {
        const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
        if (!token) {
            Error("No token found. Please log in.");
            return;
        }

        fetchProfile(token)
            
    }, []);



    return (
        <div className="flex flex-col h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl">KIM Chat</h1>
            </header>
            <main className="flex-grow p-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl mb-4">Chat Interface</h2>
                </div>

                {localStorage.getItem('userId')}
            </main>
            <Footer/>
        </div>
    );
}

export default Chat;