"use client"; // components/Menu/page.js
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import Menus from "@/components/Menu/page";
export default function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(null); // Track which menu has Read More open

  useEffect(() => {
    const storedMenu = localStorage.getItem("newProduct");
    if (storedMenu) {
      const parsedMenu = JSON.parse(storedMenu);
      const filteredMenu = parsedMenu
        .map(menu => ({
          inpName: menu.inpName,
          inpPrice: menu.inpPrice,
          inpDescription: menu.inpDescription || "ไม่มีรายละเอียดเพิ่มเติม", // Default description if not found
          items: menu.items || [

          ], // Ensure that 'items' field is available
        }))
        .filter(menu => menu.inpName && menu.inpPrice); // Ensure name and price are present
      setMenuData(filteredMenu);
      // Store the filtered data in localStorage for use in Profit page
      localStorage.setItem("menuData", JSON.stringify(filteredMenu));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedMenuData = [...menuData];
    updatedMenuData.splice(index, 1); // Remove the item at the specified index
    setMenuData(updatedMenuData); // Update state
    // Update localStorage with the new data
    localStorage.setItem("menuData", JSON.stringify(updatedMenuData));
  };

  const toggleReadMore = (index) => {
    setIsReadMoreOpen(isReadMoreOpen === index ? null : index); // Toggle Read More visibility
  };

  return (
    <>
      <Navbar />
      <div className="mt-10">
        <Menus />
      </div>
      <div className="w-11/12 mx-auto">
        <h1>เมนูของฉัน</h1>
        {menuData.map((menu, index) => (
          <div key={index} className="mt-4 rounded-xl p-4 shadow-lg shadow-gray-500/40 relative">
            <h2>{menu.inpName || "ไม่ระบุชื่อเมนู"}</h2>
            <p>{menu.inpPrice ? `${menu.inpPrice} บาท` : "ไม่ระบุราคา"}</p>

            {/* Read More */}
            <div className="text-sm text-gray-700 mt-2">
              <div
                className={`overflow-hidden transition-all duration-300 ${isReadMoreOpen === index ? "max-h-[500px] overflow-y-auto" : "max-h-0"}`}
              >
                {/* Display items if available */}
                {menu.items && menu.items.length > 0 && (
                  <div>
                    <h3 className="font-semibold">รายการเพิ่มเติม:</h3>
                    <ul className="list-disc pl-5">
                      {menu.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} - {item.price} บาท
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-500 hover:underline mt-2"
              >
                {isReadMoreOpen === index ? "อ่านน้อยลง" : "อ่านเพิ่มเติม"}
              </button>
            </div>

            {/* Delete button */}
            <button
              onClick={() => handleDelete(index)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              ลบ
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
