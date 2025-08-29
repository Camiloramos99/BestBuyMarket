/**
 * This function calculates total prices of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {Number} total price
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {

        const quantity = product.cantidad || 1;
        sum += product.price * quantity;
    });
    return sum;
}