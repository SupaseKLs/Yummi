
"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import MenuProduct from "@/components/Menu/page"
export default function Menu() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [expandedProductIndex, setExpandedProductIndex] = useState(null);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    const storedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];

    if (storedProduct) {
      setSelectedProducts([storedProduct]);
    } else {
      setSelectedProducts(storedProducts);
    }
  }, []);

  const handleReadMore = (index) => {
    setExpandedProductIndex(expandedProductIndex === index ? null : index);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedProducts);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="mt-10">
        <MenuProduct />
      </div>

      <div className="w-full p-10">
        <h1 className="text-2xl mb-6">Your Menu</h1>
        {selectedProducts.length === 0 ? (
          <p>Your menu is empty. Please add items.</p>
        ) : (
          <div className="mt-4 bg-white shadow-md p-4 rounded-md">
              {selectedProducts.length > 0 && (

                <div key={selectedProducts.length + 1} className="shadow-lg shadow-gray-500/40 p-12 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2>{selectedProducts[selectedProducts.length - 1].name}</h2>
                      <p>{selectedProducts[selectedProducts.length - 1].price} บาท</p>
                    </div>
                    <button
                      onClick={() => handleDeleteProduct(selectedProducts.length - 1)}
                      className="text-red-500"
                    >
                      ลบ
                    </button>
                  </div>

                  <button
                    onClick={() => handleReadMore(selectedProducts.length - 1)}
                    className="text-blue-500 text-sm mt-2"
                  >
                    {expandedProductIndex === selectedProducts.length - 1 ? "Read Less" : "Read More"}
                  </button>

                  {expandedProductIndex === selectedProducts.length - 1 && (
                    <div className="mt-2">
                      <h3 className="font-semibold text-lg">Product Details</h3>
                      <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
                        <ul>
                          {selectedProducts.slice(0, selectedProducts.length - 1).map((product, index) => (
                            <div key={index}>
                              <li>{product.name}</li>
                              <li>{product.price} บาท</li>
                            </div>
                          ))}
                        </ul>

                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
        )}
      </div>
    </>
  );
}
