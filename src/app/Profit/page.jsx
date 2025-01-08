"use client";
import Navbar from "@/components/Navbar/page";
import Menu from "@/components/Menu/page";
import { useState } from "react";

export default function Profit() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header>
                <Navbar />
                <div className="mt-10">
                    <Menu />
                </div>
            </header>

            <section>
                <div className="p-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Lorem</h1>
                        {/* Dropdown Component */}
                        <div className="flex justify-center items-center">
                            <div className="relative inline-block w-80 text-left">
                                <button
                                    onClick={toggleDropdown}
                                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Dropdown
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    >
                                        <div
                                            className="py-1"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="dropdown-button"
                                        >
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Option 1
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Option 2
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Option 3
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <h1 className="my-4">Lorem</h1>
                                <input className="rounded-md border w-80 border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <div>
                                <h1>วัตถุดิบแนะนำ</h1>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div className="w-20 h-20 bg-gray-200">1</div>
                                <div className="w-20 h-20 bg-gray-200">2</div>
                                <div className="w-20 h-20 bg-gray-200">3</div>
                                <div className="w-20 h-20 bg-gray-200">4</div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div className="w-20 h-20 bg-gray-200">1</div>
                                <div className="w-20 h-20 bg-gray-200">2</div>
                                <div className="w-20 h-20 bg-gray-200">3</div>
                                <div className="w-20 h-20 bg-gray-200">4</div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div className="w-20 h-20 bg-gray-200">1</div>
                                <div className="w-20 h-20 bg-gray-200">2</div>
                                <div className="w-20 h-20 bg-gray-200">3</div>
                                <div className="w-20 h-20 bg-gray-200">4</div>
                            </div>

                            <div className="my-4 flex justify-center">
                                <button
                                    className="bg-red-700 rounded-xl text-white py-3 px-4"
                                    onClick={toggleModal}
                                >
                                    คำนวณกำไร
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg mx-4 w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                        <p className="mb-4">This is the content inside the modal.</p>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 rounded-md px-4 py-2"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                            <button
                                className="bg-blue-500 text-white rounded-md px-4 py-2"
                                onClick={() => alert("Button inside modal clicked!")}
                            >
                                Action Button
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
