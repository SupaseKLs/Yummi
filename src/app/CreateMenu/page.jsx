"use client"
import Navbar from "@/components/Navbar/page"
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Add this line for Swiper navigation styles

import './styles.css';

// Import required modules
import { Navigation, Pagination, History } from 'swiper/modules';
import Image from "next/image"
import Chicken from "@/assets/image/chicken.jpg"
import Add from "@/assets/svg/Add.svg"
import Delete from "@/assets/svg/Trash.svg"

export default function CreateMenu() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);  // ใช้ array เพื่อเก็บสินค้า

    const handleAddClick = (product) => {
        setSelectedProducts((prev) => [...prev, product]);  // เพิ่มสินค้าลงใน array
    };

    const handleCreateClick = () => {
        setShowModal(true);  // เปิด modal เมื่อกด Create
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleDeleteClick = (index) => {
        setSelectedProducts((prev) => prev.filter((_, i) => i !== index));  // ลบสินค้าที่เลือก
    };

    return (
        <>
            <div className="fixed z-30 bottom-0 right-0 mr-10 mb-10">
                <button className="p-4 bg-red-600 rounded-full" onClick={handleCreateClick}>
                    <Image src={Add} alt="Add" />
                </button>
            </div>

            {showModal && selectedProducts.length > 0 && (
                <div className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 flex justify-end pb-24 pr-20 items-end">
                    <div className="bg-white w-11/12 p-8 rounded-lg max-h-96 overflow-y-auto"> {/* เพิ่ม max-height และ overflow-y-auto */}
                        <h2 className="text-xl mb-4">Modal Content</h2>
                        <div>
                            {selectedProducts.map((product, index) => (
                                <div key={index} className="mt-2 py-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src={Chicken} alt={product.name} width={50} height={50} className="mr-4" />
                                        <div>
                                            <p>Product {index + 1}:</p>
                                            <p>Product Name: {product.name}</p>
                                            <p>Size: {product.size}</p>
                                            <p>Price: {product.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteClick(index)} className="text-red-500">
                                        <Image src={Delete} width={20} alt="delete" />
                                    </button> {/* ปุ่มลบ */}
                                </div>
                            ))}
                        </div>
                        <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
                    </div>
                </div>
            )}

            <header>
                <Navbar />
            </header>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col mt-8">
                            <label htmlFor="">ชื่อเมนู</label>
                            <input type="text" name="" id="" className="border p-2 w-80" />
                        </div>
                        <div className="flex flex-col mt-8">
                            <label htmlFor="">ราคาขาย</label>
                            <input type="text" name="" id="" className="border p-2 w-80" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex justify-between">
                        <div>
                            <h1>สินค้าแนะนำ</h1>
                        </div>
                        <div>
                            <h1>ดูเพิ่มเติม</h1>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="py-2">
                            <h1>เนื้อสัตว์</h1>
                        </div>
                        <Swiper
                            slidesPerView={3.5}
                            spaceBetween={30}
                            navigation={true}  // This enables the default navigation arrows
                            modules={[Navigation, Pagination, History]}
                            history={{
                                key: 'slide',
                            }}
                            className="mySwiper"
                        >
                            {[...Array(5)].map((_, index) => (
                                <SwiperSlide key={index} data-history={index + 1}>
                                    <div className="relative">
                                        <Image src={Chicken} alt="chicken" width={300} height={300} className="w-full h-full object-cover" />
                                        <div className="text-sm flex flex-col pl-4">
                                            <h1>ไก่</h1>
                                            <h1>ขนาด</h1>
                                            <h1>ราคา</h1>
                                        </div>
                                        <div className="absolute top-[0] mt-[-30px] mr-[-10px] right-[0] bg-red-700 p-1 rounded-full">
                                            <button onClick={() => handleAddClick({ name: 'ไก่', size: 'ขนาด', price: 'ราคา', image: Chicken })}>
                                                <Image src={Add} width={20} height={20} alt="add" />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center my-10">
                            <button className="bg-green-500 py-3 rounded-xl px-12 text-white">Create</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
