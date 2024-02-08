import React, { useState, useEffect } from "react";

const Dropdown = ({ title, items, isVisible, toggleDropdown }) => (
  <div className="relative inline-block text-left">
    <button
      onClick={toggleDropdown}
      className="hover:text-gray-300 focus:outline-none"
    >
      {title}
    </button>
    {isVisible && (
      <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
        <div className="py-1">
          {items.map((item, index) => (
            <a key={item} href="#" className="block px-4 py-2 text-sm text-white">
              {item}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function Topbar() {
  // Estado para el control de visibilidad de los menús desplegables
  const [dropdowns, setDropdowns] = useState([false, false, false, false, false]);

  // Función para alternar la visibilidad de un menú desplegable y establecer un temporizador para ocultarlo después
  const toggleDropdown = (index) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setDropdowns(updatedDropdowns);
  };

  // Efecto para restablecer automáticamente la visibilidad de los menús desplegables después de un cierto tiempo
  useEffect(() => {
    const timeoutIds = dropdowns.map((isVisible, index) => {
      if (isVisible) {
        return setTimeout(() => {
          const updatedDropdowns = [...dropdowns];
          updatedDropdowns[index] = false;
          setDropdowns(updatedDropdowns);
        }, 1000);
      }
      return null;
    });

    return () => {
      timeoutIds.forEach((timeoutId) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      });
    };
  }, [dropdowns]);

  // Datos de los menús desplegables
  const dropdownData = [
    { title: "Servicios1", items: ["Servicio1", "Servicio2", "Servicio3"] },
    { title: "Servicios2", items: ["Opción1", "Opción2", "Opción3"] },
    { title: "Servicios3", items: ["Servicio1", "Servicio2", "Servicio3"] },
    { title: "Servicios4", items: ["Servicio1", "Servicio2", "Servicio3"] },
    { title: "Servicios5", items: ["Servicio1", "Servicio2", "Servicio3"] },
  ];

  return (
    <div className="navbar">
      <div className="bg-green-800">
        <div className="container mx-auto flex items-center justify-between py-5">
          <nav className="flex-1 space-x-9 text-center text-gray-100">
            {dropdownData.map(({ title, items }, index) => (
              <Dropdown
                key={title}
                title={title}
                items={items}
                isVisible={dropdowns[index]}
                toggleDropdown={() => toggleDropdown(index)}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
