"use client"; // pages/Profit.js
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import Chicken from "@/assets/image/chicken.jpg";
import Add from "@/assets/svg/Add.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, History } from "swiper/modules";
import Image from "next/image";
import Menu from "@/components/Menu/page";

export default function Profit() {
  const [menuData, setMenuData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddClick = (item) => {
    // Add your click handling logic here
    console.log("Item added: ", item);
  };

  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (storedMenuData) {
      const parsedMenuData = JSON.parse(storedMenuData);
      setMenuData(parsedMenuData);
      console.log("Stored Menu Data: ", parsedMenuData);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <div className="mt-10">
          <Menu />
        </div>
      </header>

      <section>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Profit Page</h1>
          <h2>ข้อมูลจากเมนู</h2>

          <div className="flex justify-center items-center">
            <div className="relative inline-block w-80 text-left">
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                เลือกเมนู
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {menuData.length > 0 ? (
                      menuData.map((menu, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {menu.inpName || "ไม่ระบุชื่อเมนู"}
                        </a>
                      ))
                    ) : (
                      <p className="block px-4 py-2 text-sm text-gray-700">
                        ไม่มีเมนู
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <div className="py-2">
          <h1>เนื้อสัตว์</h1>
        </div>
        <Swiper
                      slidesPerView={3.3}
                      spaceBetween={30}
                      navigation={true}
                      modules={[Navigation, Pagination, History]}
                      history={{
                        key: "slide",
                      }}
                      className="mySwiper"
                    >
                      {menuData.slice(0, 10).map((item, index) => (
                        <SwiperSlide className="relative" key={index} data-history={index + 1}>
                          <div>
                            <Image
                              src={item.picture || Chicken}
                              alt="chicken"
                              width={300}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                            <div className="text-sm flex flex-col pl-4">
                              <h1>{item.name}</h1>
                              <h1>{item.scale}</h1>
                              <h1>{item.price} บาท</h1>
                            </div>
                            <div className="absolute top-0 mt-[10px] mr-[10px] right-0 bg-red-700 p-1 rounded-full">
                              <button onClick={() => handleAddClick(item)}>
                                <Image src={Add} width={20} height={20} alt="add" />
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
      </div>
    </>
  );
}
