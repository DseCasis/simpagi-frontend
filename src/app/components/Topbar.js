import React from "react";
import { useState } from "react";


export default function Topbar(){

    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [dropdown3Visible, setDropdown3Visible] = useState(false);
    const [dropdown4Visible, setDropdown4Visible] = useState(false);
    const [dropdown5Visible, setDropdown5Visible] = useState(false);
    
  
    const toggleDropdown1 = () => {
      setDropdown1Visible(!dropdown1Visible);
      setTimeout(() => {
        setDropdown1Visible(false);
      }, 1000);
    };
    
  
    const toggleDropdown2 = () => {
      setDropdown2Visible(!dropdown2Visible);
      setTimeout(() => {
        setDropdown2Visible(false);
      }, 1000);
    };

    const toggleDropdown3 = () => {
        setDropdown3Visible(!dropdown3Visible);
        setTimeout(() => {
            setDropdown3Visible(false);
      }, 1000);
    };
    
    const toggleDropdown4 = () => {
        setDropdown4Visible(!dropdown4Visible);
        setTimeout(() => {
            setDropdown4Visible(false);
      }, 1000);
    };

    const toggleDropdown5 = () => {
        setDropdown5Visible(!dropdown5Visible);
        setTimeout(() => {
            setDropdown5Visible(false);
      }, 1000);
    };

    
  
    return (
      <div class="navbar">
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-5">
          <nav className="flex-1 space-x-9 text-center">
          
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown1}
                className="hover:text-gray-300 focus:outline-none"
              >
                Servicios1
              </button>
              {dropdown1Visible && (
                <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio3
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown2}
                className="hover:text-gray-300 focus:outline-none"
              >
                Servicios2
              </button>
              {dropdown2Visible && (
                <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Opción1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Opción2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Opción3
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown3}
                className="hover:text-gray-300 focus:outline-none"
              >
                Servicios3
              </button>
              {dropdown3Visible && (
                <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio3
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown4}
                className="hover:text-gray-300 focus:outline-none"
              >
                Servicios4
              </button>
              {dropdown4Visible && (
                <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio3
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown5}
                className="hover:text-gray-300 focus:outline-none"
              >
                Servicios5
              </button>
              {dropdown5Visible && (
                <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      Servicio3
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      </div>
    );
  }