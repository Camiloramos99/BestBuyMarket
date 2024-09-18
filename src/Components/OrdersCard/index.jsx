

const OrdersCard = ({ totalPrice, totalProducts }) => {
    return (
        <article className="flex flex-col p-4 w-80 h-16 items-center mb-3 border-2 border-purple-500 rounded-xl bg-white shadow-lg">
            <header className="flex items-center justify-between w-full px-4 h-full text-purple-700 font-semibold">
                <section className="flex flex-col">
                    <span className="font-light mr-2">10.09.2024</span>
                    <span className="font-light mr-2">{totalProducts} products</span>
                </section>
                <section className="flex items-center gap-2">
                    <span className="font-medium text-2xl ">$ {totalPrice}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </section>
            </header>
        </article>
    );
};

export default OrdersCard;



