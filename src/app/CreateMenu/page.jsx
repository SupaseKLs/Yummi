import Navbar from "@/components/Navbar/page"
import Image from "next/image"
import Food from "@/assets/image/Food.png"
import Add from "@/assets/svg/Add.svg"
export default function HomePage() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col mt-8">
                            <label htmlFor="">Lorem</label>
                            <input type="text" name="" id="" className="border p-2 w-80" />
                        </div>
                        <div className="flex flex-col mt-8">
                            <label htmlFor="">Lorem</label>
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
                            <h1>lorem</h1>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div>
                            <h1>วัตถุแนะนำ</h1>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="relative w-20 h-20 bg-gray-200">
                                1
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                2
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                3
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                4
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="relative w-20 h-20 bg-gray-200">
                                1
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                2
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                3
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                4
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="relative w-20 h-20 bg-gray-200">
                                1
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                2
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                3
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                            <div className="relative w-20 h-20 bg-gray-200">
                                4
                                <div className="absolute top-[-8px] right-[-12px] w-fit p-2 rounded-full bg-red-600">
                                    <Image src={Add} width={12} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <button className="bg-green-500 py-3 rounded-xl px-12 text-white">Create</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
} 