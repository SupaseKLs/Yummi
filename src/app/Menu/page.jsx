import Navbar from "@/components/Navbar/page"
import Food from "@/assets/image/Food.png"
import Image from "next/image"
export default function HomePage() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <section className="mt-10">
                <div className="w-11/12 mx-auto">

                    <div className="flex justify-between">
                        <h1>Menu</h1>
                        <h1>See all</h1>
                    </div>

                    <div className="flex justify-between mt-6">
                        <div className="w-16 h-16 bg-gray-200">
                            1
                        </div>
                        <div className="w-16 h-16 bg-gray-200">
                            2
                        </div>
                        <div className="w-16 h-16 bg-gray-200">
                            3
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-96 mt-8">
                <div className="opacity-35 h-full flex flex-col justify-center items-center">
                    <Image src={Food} width={250} height={250} alt="Food"></Image>
                    <h1>Empty</h1>
                </div>
            </section>
        </>
    )
} 