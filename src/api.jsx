// URL base de la API
const API_BASE_URL = "https://teststoreapi.onrender.com";

import localProducts from "../src/assets/products.json";

// Función para obtener productos de la API
export const fetchProducts = async () => {

  try {

    let products = [...localProducts];


    const response = await fetch(`${API_BASE_URL}/productos`);
    if (!response.ok) throw new Error("Error al traer productos");

    const data = await response.json();

    products = data

    return products;
  } catch (error) {
    console.error("Error obteniendo productos, usando fallback local:", error);
    // 4) si falla la API, devolvemos locales
    return localProducts;
  }
};