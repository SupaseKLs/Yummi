import Navbar from "@/components/Navbar/page"
import Image from "next/image"
import Food from "@/assets/image/Food.png"
export default function HomePage() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center">
                        <div>
                            <Image src={Food} alt="Food"></Image>

                        </div>
                        <div className="w-80">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div>
                            <h1>วัตถุแนะนำ</h1>
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