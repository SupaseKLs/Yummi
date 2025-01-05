"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar/page"
import Image from "next/image"
import Food from "@/assets/image/Food.png"
export default function HomePage() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };
    return (
        <>
            <header>
                <Navbar cart={cart} setCart={setCart} currentPage="หน้าแรก" />
            </header>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center">
                        <div>
                            <Image src={Food} alt="Food"></Image>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-red-600 rounded-xl text-white" onClick={() => addToCart('ปลากระโห้')}>เพิ่มสินค้าเข้าตะกร้า</button>
                        </div>
                        <div className="w-80">
                            <h1>ปลากระโห้</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div>
                            <h1>วัตถุดิบแนะนำ</h1>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-20 h-20 bg-gray-200">
                                1
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                2
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                3
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                4
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-20 h-20 bg-gray-200">
                                1
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                2
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                3
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                4
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-20 h-20 bg-gray-200">
                                1
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                2
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                3
                            </div>
                            <div className="w-20 h-20 bg-gray-200">
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 