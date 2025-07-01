import ItemList from "../../components/Cart/ItemList";
import CartBreadcrumb from "../../components/ui/navbar/CartBreadcrumb";
import Summary from "./Summary";

export default function Cart() {
  return (
    <>
      <CartBreadcrumb />
      <div className="bg-[#F1F5F9] pb-16">
        <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 max-w-7xl mx-auto font-sans">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <ItemList />
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}
