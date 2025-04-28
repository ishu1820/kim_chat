import React from 'react';
import { useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

function Signup() {

    return (
        <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-80 text-center">
            Signup
        </div>
    );
}

function Login() {
    return (
        <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-80 text-center">
            Login
        </div>
    );
}

function Home() {
    return (
        <>
            <div className='bg-gray-900 min-h-screen flex flex-col'>
                <Navbar />
                <div className="flex-grow flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="flex flex-wrap  justify-center gap-6">
                        <Signup />
                        <Login />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;