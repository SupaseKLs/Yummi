import Navbar from "@/components/Navbar/page"
import Menu from "@/components/Menu/page"
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
                    </div>

                    <Menu />

                    <div className="mt-8">
                        <div>
                            <h1>วัตถุดิบแนะนำ</h1>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-28 h-28 bg-gray-200">
                                1
                            </div>
                            <div className="w-28 h-28 bg-gray-200">
                                2
                            </div>
                            <div className="w-28 h-28 bg-gray-200">
                                3
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="w-28 h-28 bg-gray-200">
                                1
                            </div>
                            <div className="w-28 h-28 bg-gray-200">
                                2
                            </div>
                            <div className="w-28 h-28 bg-gray-200">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 