// Función para obtener productos de la API

export const fetchProducts = async () => {
    const response = await fetch("https://teststoreapi.onrender.com/productos");
    const data = await response.json();
    return data;
  };
  