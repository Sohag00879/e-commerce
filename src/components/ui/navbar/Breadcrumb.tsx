import { ChevronRight } from "lucide-react"

const Breadcrumb = () => {
    return (
        <div className="bg-[#f0f4f7] py-3 px-4 sm:px-6 md:px-8 lg:px-10 flex items-center text-gray-500 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="#" className="hover:underline">Electronics</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-700">Mobile</span>
        </div>
    )
}

export default Breadcrumb