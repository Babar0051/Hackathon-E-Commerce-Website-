import Image from "next/image";

const FilterBar = () => (
  <div className="w-[1440px] h-[100px] top-[463px] bg-gray-100 pt-[350px] py-4 px-8">
    <div className="flex justify-between items-center">
      {/* Left Side Icons */}
      <div className="flex items-center space-x-6">
        {/* Filter Icon */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Filter.png" // Replace with the actual path in your public folder
            alt="Filter Icon"
            width={20} // Adjust width based on Figma design
            height={20} // Adjust height based on Figma design
          />
        </div>

        {/* Other Icons */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Filterrr.png" // Replace with the actual path in your public folder
            alt="Icon 2"
            width={40} // Adjust width based on Figma design
            height={40} // Adjust height based on Figma design
          />
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/Fourdot.png" // Replace with the actual path in your public folder
            alt="Icon 3"
            width={20} // Adjust width based on Figma design
            height={20} // Adjust height based on Figma design
          />
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/Vec.png" // Replace with the actual path in your public folder
            alt="Icon 4"
            width={20} // Adjust width based on Figma design
            height={20} // Adjust height based on Figma design
          />
        </div>
      </div>

      {/* Separator */}
      <div className="border-l-2 border-gray-300 h-6 mx-4"></div>

      {/* Showing results, Show, and Short by */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Showing 1–16 of 32 results</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Show</span>
          <select className="border rounded px-2 py-1">
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Short by</span>
          <select className="border rounded px-2 py-1">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Additional Separator */}
      <div className="border-l-2 border-gray-300 h-6 mx-4"></div>

      {/* Grid Toggle Icon */}
      <div className="flex items-center">
        <Image
          src="/grid-icon.png" // Replace with the actual path in your public folder
          alt="Grid Icon"
          width={20} // Adjust width based on Figma design
          height={20} // Adjust height based on Figma design
        />
      </div>
    </div>
  </div>
);

export default FilterBar;
