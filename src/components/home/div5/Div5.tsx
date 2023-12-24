import { CiFilter } from "react-icons/ci";
import { TbDots } from "react-icons/tb";

const DynamicTable = ({ columns, data }) => {
  return (
    <table>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* Checkbox cell */}
            <td key={`cell-checkbox-${rowIndex}`}>
              <input type="checkbox" />
            </td>
            {/* Data cells */}
            {row.map((cell, cellIndex) => (
              <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage
const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7'];
const sampleData = [
  ['Row 1 Data 1', 'Row 1 Data 2', 'Row 1 Data 3', 'Row 1 Data 4', 'Row 1 Data 5', 'Row 1 Data 6', 'Row 1 Data 7'],
  ['Row 2 Data 1', 'Row 2 Data 2', 'Row 2 Data 3', 'Row 2 Data 4', 'Row 2 Data 5', 'Row 2 Data 6', 'Row 2 Data 7'],
  // Add more rows as needed
];

const Div5 = () => {
  return (
    <div className="flex flex-col">
      <div className='flex justify-between border-b border-gray-300 items-center'>
        <div className='p-4'>
        UPCOMING SCHEDULE
        </div>
            <div className="flex text-sm text-white items-center">
                 <CiFilter size={24} style={{ color: 'black' }} />
        <button className='bg-gray-600  m-2 p-2 rounded-xl w-24'>All</button>
        <button className='bg-gray-400 m-2 p-2 rounded-xl w-24'>Classes</button>
        <button className='bg-gray-400 m-2 p-2 rounded-xl w-24'>Meetings</button>
        <button className='bg-gray-400 m-2 p-2 rounded-xl w-24'>Events</button>
        </div>
        <div className='m-2 mx-4'>
            <TbDots size={32} /> 
        </div>
      </div>
      <DynamicTable columns={columns} data={sampleData} />
    </div>
  );
};

export default Div5;
