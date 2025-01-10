import Image from "next/image"
import Link from "next/link"
import Coupon from "@/assets/image/Coupon.png"
export default function Menu() {
    return (
        <div className="w-full text-center h-full flex justify-center items-center mt-6">
            <Link className="flex flex-col justify-center items-center w-16 text-sm h-full rounded-sm" href="/Menu">
                <Image src={Coupon} width={50} alt="Menu" />
                <h1>รายการอาหาร</h1>
            </Link>
            <Link className="flex flex-col justify-center items-center w-16 mx-12 text-sm h-full rounded-sm" href="/CreateMenu">
                <Image src={Coupon} width={50} alt="Menu" />
                <h1>สร้างเมนูของฉัน</h1>
            </Link>
            <Link className="flex flex-col justify-center items-center w-16 text-sm h-full rounded-sm" href="/Profit">
                <Image src={Coupon} width={50} alt="Menu" />
                <h1>คำนวณต้นทุนกำไร</h1>
            </Link>
        </div>
    )
}