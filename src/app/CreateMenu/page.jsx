"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, History } from "swiper/modules";
import Image from "next/image";
import Chicken from "@/assets/image/chicken.jpg";
import Add from "@/assets/svg/Add.svg";
import Delete from "@/assets/svg/Trash.svg";

export default function CreateMenu() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [menuData, setMenuData] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await fetch("/data/menu.json");
        const data = await res.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleAddClick = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteClick = (index) => {
    setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddToMenuClick = () => {
    if (!inputName || !inputPrice) {
      setConfirmationMessage("Please fill in both the menu name and price.");
      setMessageColor("bg-red-500 text-white");
      setTimeout(() => setConfirmationMessage(""), 3000);
      return;
    }

    const updatedSelectedProducts = [...selectedProducts]; // Move this line up

    const newProduct = {
      inpName: inputName, // Use inputName for inpName
      inpPrice: inputPrice, // Use inputPrice for inpPrice
      items: updatedSelectedProducts.map((product) => ({
        menu_id: product.menu_id,
        price: product.price,
        name: product.name,
      })),
    };

    updatedSelectedProducts.push(newProduct); // Now you can safely push the new product

    console.log("Updated Selected Products:", newProduct);

    localStorage.setItem("newProduct", JSON.stringify(updatedSelectedProducts));

    setSelectedProducts(updatedSelectedProducts);

    const menuJSON = {
      inpName: inputName, // Use inputName for inpName
      inpPrice: inputPrice, // Use inputPrice for inpPrice
      items: updatedSelectedProducts.map((product) => ({
        menu_id: product.menu_id,
        price: product.price,
        name: product.name,
      })),
    };

    console.log("Menu JSON:", JSON.stringify(menuJSON));

    setConfirmationMessage("Products added to your menu successfully!");
    setMessageColor("bg-green-500 text-white");

    setShowModal(false);
    setTimeout(() => setConfirmationMessage(""), 3000);
  };

  if (!menuData) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="fixed z-30 bottom-0 right-0 mr-10 mb-10">
        <button className="p-4 bg-red-600 rounded-full" onClick={handleCreateClick}>
          <Image src={Add} alt="Add" />
        </button>
      </div>

      {confirmationMessage && (
        <div className={`fixed top-10 right-10 ${messageColor} p-4 rounded-lg`}>
          {confirmationMessage}
        </div>
      )}

      {showModal && selectedProducts.length > 0 && (
        <div className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 flex justify-end pb-24 pr-20 items-end">
          <div className="bg-white w-11/12 p-8 rounded-lg max-h-96 overflow-y-auto">
            <h2 className="text-xl mb-4">Selected Products</h2>
            <div>
              {selectedProducts.map((product, index) => (
                <div key={index} className="mt-2 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={product.picture || Chicken}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p>{product.price} บาท</p>
                    </div>
                  </div>
                  <button onClick={() => handleDeleteClick(index)} className="text-red-500">
                    <Image src={Delete} width={20} alt="delete" />
                  </button>
                </div>
              ))}
            </div>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      <header>
        <Navbar />
      </header>

      <section className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-col mt-8 w-full">
              <label htmlFor="menuName">ชื่อเมนู</label>
              <input
                type="text"
                id="menuName"
                required
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="border p-2 w-full md:w-80"
              />
            </div>
            <div className="flex flex-col mt-8 w-full">
              <label htmlFor="menuPrice">ราคาขาย</label>
              <input
                type="text"
                id="menuPrice"
                required
                value={inputPrice}
                onChange={(e) => setInputPrice(e.target.value)}
                className="border p-2 w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between">
            <h1>สินค้าแนะนำ</h1>
          </div>

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

          <div className="flex justify-center my-10">
            <button onClick={handleAddToMenuClick} className="bg-red-600 py-3 rounded-xl px-12 text-white">
              เพิ่มไปยังเมนูของฉัน
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
