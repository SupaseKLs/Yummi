import Image from "next/image"
import Search from '../ui/SearchBar'
import Cart from "@/assets/svg/cart.svg"
import Logo from "@/assets/image/Logo.png"
export default function Navbar() {
    const data = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
        'Strawberry',
    ];
    return (
        <nav className="bg-white w-full h-24">
            <div className="w-11/12 mx-auto">
                <div className="pt-2 flex items-center justify-between">
                    <div>
                        <Image src={Logo} alt="" />
                    </div>
                    <div>
                        <h1>หน้าแรก</h1>
                    </div>
                    <div>
                        <Image src={Cart} alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Search data={data} />

            </div>
        </nav>
    )
} 