"use client"; // pages/Profit.js
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import Menu from "@/components/Menu/page";

export default function Profit() {
  const [menuData, setMenuData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuCost, setSelectedMenuCost] = useState(0); // ต้นทุนวัสดุ
  const [laborCost, setLaborCost] = useState(0); // ค่าจ้างแรงงาน
  const [energyCost, setEnergyCost] = useState(0); // ค่าพลังงาน
  const [otherCost, setOtherCost] = useState(0); // ค่าใช้จ่ายอื่นๆ
  const [profitPercentage, setProfitPercentage] = useState(0); // เปอร์เซ็นต์กำไร
  const [totalCost, setTotalCost] = useState(0); // ต้นทุนรวม (A6)
  const [desiredProfit, setDesiredProfit] = useState(0); // กำไรที่ต้องการ (A7)
  const [sellingPrice, setSellingPrice] = useState(0); // ราคาขาย (A8)

  const [isModalOpen, setIsModalOpen] = useState(false); // เปิดปิด Modal
  const [selectedMenuName, setSelectedMenuName] = useState('เลือกเมนู'); // ชื่อเมนูที่เลือก

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (menu) => {
    const totalPrice = calculatePrice(menu);
    setSelectedMenuCost(totalPrice);
    setSelectedMenuName(menu.inpName || "ไม่ระบุชื่อเมนู"); // อัพเดตชื่อเมนูที่เลือก
    setIsDropdownOpen(false);
  };

  const calculatePrice = (menu) => {
    if (menu.items && Array.isArray(menu.items)) {
      const totalPrice = menu.items.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0;
        return sum + price;
      }, 0);
      return totalPrice;
    }
    return 0;
  };

  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (storedMenuData) {
      const parsedMenuData = JSON.parse(storedMenuData);
      setMenuData(parsedMenuData);
    }
  }, []);

  const handleCalculateSellingPrice = () => {
    // คำนวณต้นทุนรวม (A6)
    const totalCost = selectedMenuCost + laborCost + energyCost + otherCost;
    setTotalCost(totalCost);

    // คำนวณกำไรที่ต้องการ (A7)
    const profit = (profitPercentage / 100) * totalCost;
    setDesiredProfit(profit);

    // คำนวณราคาขาย (A8)
    const calculatedPrice = totalCost + profit;
    setSellingPrice(calculatedPrice);

    // เปิด modal เมื่อคำนวณเสร็จ
    setIsModalOpen(true);

    // Log the calculated values for debugging
    console.log("Total Cost :", totalCost);
    console.log("Desired Profit :", profit);
    console.log("Selling Price :", calculatedPrice);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // ปิด modal
  };

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


          <div className="flex justify-center items-center">
            <div className="relative inline-block w-80 text-left">
              <h1 className="text-2xl font-bold mb-4">Profit Page</h1>
              <h2>ข้อมูลจากเมนู</h2>
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {selectedMenuName} {/* แสดงชื่อเมนูที่เลือก */}
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
                        <button
                          key={index}
                          onClick={() => handleMenuClick(menu)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        >
                          {menu.inpName || "ไม่ระบุชื่อเมนู"}
                        </button>
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

      <section className="mb-10">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col items-center">
            {/* Input container */}
            <div className="flex flex-col items-center w-full space-y-8">
              {/* Input for Menu Cost */}
              <div className="flex flex-col w-80">
                <label htmlFor="menuCost">ต้นทุนวัตถุดิบ</label>
                <input
                  type="number"
                  id="menuCost"
                  value={selectedMenuCost}
                  readOnly
                  className="p-2 rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700"
                />
              </div>

              {/* Input for Labor Cost */}
              <div className="flex flex-col w-80">
                <label htmlFor="laborCost">ต้นทุนแรงงาน</label>
                <input
                  type="number"
                  id="laborCost"
                  value={laborCost}
                  onChange={(e) => setLaborCost(parseFloat(e.target.value))}
                  className="p-2 rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700"
                />
              </div>

              {/* Input for Energy Cost */}
              <div className="flex flex-col w-80">
                <label htmlFor="energyCost">ต้นทุนพลังงาน</label>
                <input
                  type="number"
                  id="energyCost"
                  value={energyCost}
                  onChange={(e) => setEnergyCost(parseFloat(e.target.value))}
                  className="p-2 rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700"
                />
              </div>

              {/* Input for Other Cost */}
              <div className="flex flex-col w-80">
                <label htmlFor="otherCost">ค่าใช้จ่ายอื่นๆ</label>
                <input
                  type="number"
                  id="otherCost"
                  value={otherCost}
                  onChange={(e) => setOtherCost(parseFloat(e.target.value))}
                  className="p-2 rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700"
                />
              </div>

              {/* Input for Profit Percentage */}
              <div className="flex flex-col w-80">
                <label htmlFor="profitPercentage">เปอร์เซ็นต์กำไร</label>
                <input
                  type="number"
                  id="profitPercentage"
                  value={profitPercentage}
                  onChange={(e) => setProfitPercentage(parseFloat(e.target.value))}
                  className="p-2 rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700"
                />
              </div>

              {/* Calculate Button */}
              <div className="flex flex-col w-80">
                <button
                  onClick={handleCalculateSellingPrice}
                  className="bg-red-500 text-white py-2 px-4 rounded-md w-full"
                >
                  คำนวณราคาขาย
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="px-6 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold">ผลการคำนวณ</h2>
            <div className="mt-4">
              <p>ต้นทุนรวม : {totalCost.toFixed(2)}</p>
              <p>กำไรที่ต้องการ : {desiredProfit.toFixed(2)}</p>
              <p>ราคาขาย : {sellingPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
