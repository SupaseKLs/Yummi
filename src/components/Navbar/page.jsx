"use client"; // components/Navbar/page.js
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Search from '../ui/SearchBar';
import Cart from "@/assets/svg/cart.svg";
import Logo from "@/assets/image/Logo.png";
import Close from "@/assets/svg/Close.svg";
import Trash from "@/assets/svg/Trash.svg";
import up_chevron from "@/assets/svg/up_chevron.svg";
import down_chevron from "@/assets/svg/down_chevron.svg";
import Qr from "@/assets/image/qr.png";

export default function Navbar({ cart, setCart, currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    // สถานะของการเปิด/ปิดแต่ละรายการในตะกร้า
    const [openItems, setOpenItems] = useState({});

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const toggleCart = () => {
        setIsOpen((prev) => !prev);
    };

    const closeCart = () => {
        setIsOpen(false);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index)); // ใช้ฟังก์ชันในการอัปเดตสถานะของตะกร้า
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const toggleItemDetails = (index) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index], // เปลี่ยนสถานะของรายการที่ถูกเลือก
        }));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.inpPrice * (item.quantity || 1), 0);
    };

    return (
        <nav className="bg-gradient-to-r from-[#F22643] to-[#db0324] w-full h-24">
            <div className="w-11/12 mx-auto">
                <div className="pt-2 flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="text-white">
                        <h1>{currentPage}</h1>
                    </div>
                    <div>
                        <div className="relative">
                            <div onClick={toggleCart} className="cursor-pointer">
                                <Image src={Cart} alt="Cart" />
                                {cart.length > 0 && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                                        {cart.length}
                                    </div>
                                )}
                            </div>

                            <div className={`z-20 fixed top-0 right-0 w-11/12 md:w-1/3 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "transform translate-x-0" : "transform translate-x-full"}`}>
                                <div className="p-4 flex justify-between">
                                    <h2>Your Cart</h2>
                                    <button onClick={closeCart} className="mt-4 p-2 bg-red-500 text-white rounded">
                                        <Image src={Close} alt="Close" width={24} height={24} />
                                    </button>
                                </div>
                                <div className="p-4">
                                    {Array.isArray(cart) && cart.length > 0 ? (
                                        cart.map((item, index) => (
                                            <div key={index} className="mb-4 flex flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center">
                                                        <button onClick={() => toggleItemDetails(index)} className="pr-2 mt-2">
                                                            <Image
                                                                src={openItems[index] ? up_chevron : down_chevron}
                                                                alt="Toggle Details"
                                                                width={12}
                                                                height={12}
                                                            />
                                                        </button>
                                                        {item.inpName} x {item.quantity || 1}
                                                    </div>
                                                    <button onClick={() => removeFromCart(index)} className="text-red-500">
                                                        <Image src={Trash} width={25} alt="trash" />
                                                    </button>
                                                </div>

                                                {openItems[index] && (
                                                    <div className="mt-2 flex flex-col pl-4">
                                                        <p className="font-semibold">รายการในเมนู:</p>
                                                        <div className="space-y-2">
                                                            {item.items && item.items.length > 0 ? (
                                                                item.items.map((subItem, subIndex) => (
                                                                    <div key={subIndex} className="flex justify-between">
                                                                        <p>{subItem.name}</p>
                                                                        <p>{subItem.price} บาท</p>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <p>ไม่มีรายการเพิ่มเติม</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No items in cart.</p>
                                    )}
                                </div>
                            </div>

                            {isOpen && (
                                <div onClick={closeCart} className="fixed inset-0 bg-black opacity-50 z-10"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Search data={['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Mango', 'Orange', 'Peach', 'Strawberry']} />
            </div>
        </nav>
    );
}
