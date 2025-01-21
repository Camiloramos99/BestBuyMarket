// URL base de la API
const API_BASE_URL = "https://teststoreapi.onrender.com";

// Función para obtener productos de la API
export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/productos`);

  const data = await response.json();
  return data;
};