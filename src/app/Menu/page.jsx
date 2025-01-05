import Navbar from "@/components/Navbar/page"
import Food from "@/assets/image/Food.png"
import Coupon from "@/assets/image/Coupon.png"
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

                    <div className="h-full flex justify-between items-center mt-6">
                        <div className="w-16 text-sm h-full rounded-sm">
                            <Image src={Coupon} width={50} alt="" />
                            <h1>รายการอาหาร</h1>
                        </div>
                        <div className="w-16 text-sm h-full rounded-sm">
                            <Image src={Coupon} width={50} alt="" />
                            <h1>รายการวัตถุดิบ</h1>
                        </div>
                        <div className="w-16 text-sm h-full rounded-sm">
                            <Image src={Coupon} width={50} alt="" />
                            <h1>คำนวณต้นทุนกำไร</h1>
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