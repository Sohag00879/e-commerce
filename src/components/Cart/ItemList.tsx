import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import shopIcon from "../../assets/store-01.png";
import {
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
} from "../../redux/features/addToCart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

export interface CartItem {
    id: string | number;
    thumbnail: string;
    name: string;
    color?: string;
    size?: string;
    quantity: number;
    price: number;
    discountPrice: number;
    shopName: string;
}

const ItemList = () => {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector((state: RootState) => state.cart);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSingleSelect = (itemId: string | number) => {
        setSelectedItems((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
        );
    };

    useEffect(() => {
        setSelectAll(selectedItems.length === cartItems.length && cartItems.length > 0);
    }, [selectedItems, cartItems]);

    const handleSelectAll = () => {
        if (selectedItems.length === cartItems.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map((item: CartItem) => item.id));
        }
    };

    const groupedItems = cartItems.reduce<Record<string, CartItem[]>>((acc, item) => {
        const shop = item.shopName || "Unknown Shop";
        if (!acc[shop]) acc[shop] = [];
        acc[shop].push(item);
        return acc;
    }, {});

    return (
        <section className="flex-1 bg-white rounded-xl p-4 sm:p-6 shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-[#ECEEF6] pb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0B173B] mb-3 sm:mb-0">
                    My Cart ({totalItems})
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-[#6D7A99] select-none">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                            className="w-4 h-4 accent-[#0D9488] rounded-sm"
                        />
                        <span className="ml-2 whitespace-nowrap">Select All</span>
                    </label>
                    <button
                        onClick={() => {
                            selectedItems.forEach((id) => dispatch(removeFromCart(id)));
                            setSelectedItems([]);
                        }}
                        className="hover:text-[#0D9488] transition-colors whitespace-nowrap"
                    >
                        Clear Selected
                    </button>
                </div>
            </div>

            {cartItems.length === 0 && (
                <p className="text-center text-gray-400">Your cart is empty.</p>
            )}

            {Object.entries(groupedItems).map(([shopName, items]) => (
                <div key={shopName} className="mb-8 last:mb-0">
                    <div className="flex items-center gap-3 text-[#6D7A99] font-semibold text-sm mb-2 bg-[#F1F5F9] ps-2 py-1 sm:py-0.5">
                        <input
                            type="checkbox"
                            className="w-5 h-5 accent-[#0D9488] rounded-sm mr-2"
                            checked={items.every((item) => selectedItems.includes(item.id))}
                            onChange={() => {
                                const ids = items.map((item) => item.id);
                                const allSelected = ids.every((id) => selectedItems.includes(id));
                                setSelectedItems((prev) =>
                                    allSelected
                                        ? prev.filter((id) => !ids.includes(id))
                                        : [...prev, ...ids.filter((id) => !prev.includes(id))]
                                );
                            }}
                        />
                        <span className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                            <img src={shopIcon} alt="shop-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-base sm:text-lg text-gray-800 uppercase font-medium">
                                {shopName}
                            </span>
                            <IoIosArrowForward className="text-[#9BA4B5] w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                    </div>

                    {items.map((item: CartItem) => (
                        <div key={item.id} className="mb-6 last:mb-0">
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4">
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#0D9488] rounded-sm mt-2 sm:mt-4"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSingleSelect(item.id)}
                                    />
                                    <div className="w-28 h-28 sm:w-36 sm:h-36 ml-3 sm:ml-4 flex-shrink-0">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-between w-full">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                                        <div className="mb-3 sm:mb-0">
                                            <h3 className="text-[#0B173B] font-semibold text-base sm:text-lg leading-snug mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">
                                                Color: <span>{item.color}</span>; Size: <span>{item.size}</span>
                                            </p>
                                        </div>
                                        <div className="ml-auto flex gap-x-2 whitespace-nowrap price-section self-start mt-1">
                                            <div className="text-[#0B173B] font-semibold text-base sm:text-lg">
                                                ৳{(item.price * item.quantity).toLocaleString()}
                                            </div>
                                            <div className="text-[#9BA4B5] line-through text-xs sm:text-sm">
                                                ৳{(item.discountPrice * item.quantity).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-x-4 w-full mt-2">
                                        <div className="flex items-center space-x-2 bg-white border border-[#F1F5F9] rounded-full px-2 py-1 select-none">
                                            <button
                                                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E2E8F0] text-gray-600 font-bold bg-[#F5F7FA]"
                                                onClick={() => dispatch(decrementQuantity(item.id))}
                                                aria-label="Decrease quantity"
                                            >
                                                –
                                            </button>
                                            <span className="w-8 text-center text-[#0B173B] font-semibold text-sm sm:text-base">
                                                {item.quantity.toString().padStart(2, "0")}
                                            </span>
                                            <button
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-gray-600 font-bold"
                                                onClick={() => dispatch(incrementQuantity(item.id))}
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className="text-[#9BA4B5] hover:text-[#0D9488] transition-colors ml-4"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            aria-label="Remove item"
                                        >
                                            <BsTrash size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default ItemList;
