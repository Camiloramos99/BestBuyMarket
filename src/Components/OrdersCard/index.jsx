

const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className="flex flex-col justify-between items-center mb-3 border border-black">
            <p>
                <span>10.09.2024</span>
                <span> {totalProducts} </span>
                <span> {totalPrice} </span>
            </p>
        </div>
    );
};

export default OrdersCard;
