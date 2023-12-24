
import { FaChartBar, FaGraduationCap, FaUsers, FaMoneyBillAlt, FaSearch, FaUsersCog, FaCalendarAlt } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white p-6">
      <div className="mb-6 text-left font-bold">Main Menu</div>
      <div className="flex items-center mb-6">
        <FaChartBar className="mr-2" /> {/* Chart icon */}
        <a href="#" className="py-2">Dashboard</a>
      </div>
      <div className="flex items-center mb-16">
        <FaGraduationCap className="mr-2" /> {/* Graduation cap icon */}
        <a href="#" className="py-2">Academy Management</a>
      </div>
      <div className="mb-6 text-left font-bold">More</div>
      <div className="flex items-center mb-6">
        <input type="text" className="mr-2 border-b-2 border-gray-400 px-2 py-1 focus:outline-none focus:border-gray-500 rounded-full" placeholder="Enter student name" />
      </div>
      <div className="flex items-center mb-6">
        <FaUsers className="mr-2" /> {/* Users icon */}
        <a href="#" className="py-2">Students</a>
      </div>
      <div className="flex items-center mb-6">
        <FaMoneyBillAlt className="mr-2" /> {/* Money bill icon */}
        <a href="#" className="py-2">Fee Payments</a>
      </div>
      <div className="flex items-center mb-6">
        <FaSearch className="mr-2" /> {/* Search icon */}
        <a href="#" className="py-2">Enquiries</a>
      </div>
      <div className="flex items-center mb-6">
        <FaUsersCog className="mr-2" /> {/* Users cog icon */}
        <a href="#" className="py-2">Coaches</a>
      </div>
      <div className="flex items-center mb-6">
        <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
        <a href="#" className="py-2">Schedule</a>
      </div>
    </div>
  );
}

export default Menu;
