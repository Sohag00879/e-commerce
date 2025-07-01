import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

const Summary = () => {
    const { cartItems } = useAppSelector((state: RootState) => state.cart);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalProductPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const [coupon, setCoupon] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
    const [isAgreed, setIsAgreed] = useState(true);
    const shippingFee = cartItems[0]?.shippingFee || "৳0";

    const handleApplyCoupon = () => {
        if (discountedPrice !== null) {
            toast.error("Coupon already applied");
            return;
        }

        if (coupon.trim().toLowerCase() === "steadfast") {
            const discount = totalProductPrice * 0.15;
            setDiscountedPrice(totalProductPrice - discount);
            toast.success("Coupon applied successfully!");
        } else {
            toast.error("Coupon is not correct");
            setDiscountedPrice(null);
        }
    };

    return (
        <section>
            <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow">
                <h2 className="text-gray-600 font-semibold text-xl mb-6">Order summary</h2>
                <div className="mb-4">
                    <div className="flex justify-between text-sm text-[#0D9488] cursor-pointer font-semibold mb-2">
                        <span className="text-gray-600">Price ({totalItems} items)</span>
                        <span className="text-gray-600">৳{totalProductPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#0D9488] cursor-pointer font-semibold mb-2">
                        <span className="text-gray-600">Shipping fee</span>
                        <span>{shippingFee}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-semibold">Coupon Code: <span className="text-[#0D9488]">Steadfast</span></span>
                    <div className="flex mt-3">
                        <input
                            type="text"
                            placeholder="Write Coupon Here"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className="flex-1 px-3 py-2 border border-[#0D9488] rounded-l-lg text-sm focus:outline-none"
                        />
                        <button
                            onClick={handleApplyCoupon}
                            className="bg-[#0D9488] text-white px-4 rounded-r-lg text-sm font-semibold hover:bg-[#0a6d6a] transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                </div>

                <div className="flex justify-between font-semibold text-lg text-[#0B173B] border-t border-[#ECEEF6] pt-6">
                    <span className="text-gray-600">Sub Total</span>
                    <span className="text-gray-800 font-semibold">
                        ৳{((discountedPrice !== null ? discountedPrice : totalProductPrice) + Number(shippingFee)).toLocaleString()}
                    </span>
                </div>

                <button
                    disabled={cartItems.length === 0 || !isAgreed}
                    className="w-full mt-8 bg-[#0D9488] text-white py-3 rounded-lg font-semibold hover:bg-[#0a6d6a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Proceed to Checkout
                </button>
            </div>

            <div className="w-full max-w-sm">
                <label className="flex items-start mt-6 space-x-2 text-md text-[#4D5761]">
                    <input
                        type="checkbox"
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                        className="mt-1 w-8 h-8 accent-[#0D9488] rounded-md"
                    />
                    <span className="mt-1">
                        I have read and agree to the{" "}
                        <a href="#">Terms and Conditions,</a>{" "}
                        <a href="#">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="#">Refund and Return Policy</a>
                    </span>
                </label>
            </div>
        </section>
    );
};

export default Summary;
