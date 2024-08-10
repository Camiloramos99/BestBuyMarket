// Función para obtener productos de la API

export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const data = await response.json();
    return data;
  };
  