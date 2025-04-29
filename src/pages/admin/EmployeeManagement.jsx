import { useState } from 'react';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', age: 30, salary: 50000, rating: 8.5, bonus: 5000 },
    { id: 2, name: 'Jane Smith', age: 25, salary: 55000, rating: 9.2, bonus: 6000 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [newEmployee, setNewEmployee] = useState({ name: '', age: '', salary: '', rating: '', bonus: '' });
  const [editable, setEditable] = useState(false);

  const currentEmployee = employees[currentIndex];

  const handleAddEmployee = () => {
    const { name, age, salary, rating, bonus } = newEmployee;
    if (name && age && salary && rating && bonus) {
      const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
      setEmployees([
        ...employees,
        { id: newId, name, age: parseInt(age), salary: parseFloat(salary), rating: parseFloat(rating), bonus: parseFloat(bonus) },
      ]);
      setNewEmployee({ name: '', age: '', salary: '', rating: '', bonus: '' });
    }
  };

  const handleUpdateField = (field, value) => {
    const updated = [...employees];
    updated[currentIndex] = { ...updated[currentIndex], [field]: value };
    setEmployees(updated);
  };

  const handleRemoveEmployee = () => {
    const updated = employees.filter((_, index) => index !== currentIndex);
    setEmployees(updated);
    setCurrentIndex(0);
    setEditable(false);
  };

  const handlePrev = () => {
    setEditable(false);
    setCurrentIndex((prev) => (prev === 0 ? employees.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setEditable(false);
    setCurrentIndex((prev) => (prev === employees.length - 1 ? 0 : prev + 1));
  };

  const handleGrantBonus = (bonusAmount) => {
    const updated = [...employees];
    updated[currentIndex] = { ...updated[currentIndex], bonus: bonusAmount };
    setEmployees(updated);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-full bg-blue-100 p-4 shadow-md flex justify-center">
        <h1 className="text-3xl font-bold">Employee Management</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Employee Info Container */}
        <div className="lg:w-1/2 w-full bg-blue-100 p-6 py-8 min-h-[600px] ml-7 rounded-lg shadow-lg relative">
          <button
            onClick={() => setEditable(!editable)}
            className="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 text-sm rounded transition"
          >
            {editable ? 'Save' : 'Update'}
          </button>

          {currentEmployee ? (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Employee Profile</h2>

              <div className="w-full max-w-md">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={currentEmployee.name}
                  onChange={(e) => handleUpdateField('name', e.target.value)}
                  readOnly={!editable}
                  className={`w-full p-2 mb-4 border rounded ${!editable && 'bg-gray-100'}`}
                />

                <label className="block text-sm font-medium mb-1">Employee ID</label>
                <input
                  type="text"
                  value={currentEmployee.id}
                  readOnly
                  className="w-full p-2 mb-4 border rounded bg-gray-100"
                />

                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  value={currentEmployee.age}
                  onChange={(e) => handleUpdateField('age', e.target.value)}
                  readOnly={!editable}
                  className={`w-full p-2 mb-4 border rounded ${!editable && 'bg-gray-100'}`}
                />

                <label className="block text-sm font-medium mb-1">Salary($)</label>
                <input
                  type="number"
                  value={currentEmployee.salary}
                  onChange={(e) => handleUpdateField('salary', e.target.value)}
                  readOnly={!editable}
                  className={`w-full p-2 mb-4 border rounded ${!editable && 'bg-gray-100'}`}
                />

                <label className="block text-sm font-medium mb-1">Performance Rating</label>
                <input
                  type="number"
                  step="0.1"
                  value={currentEmployee.rating}
                  onChange={(e) => handleUpdateField('rating', e.target.value)}
                  readOnly={!editable}
                  className={`w-full p-2 mb-4 border rounded ${!editable && 'bg-gray-100'}`}
                />

                <label className="block text-sm font-medium mb-1">Bonus($)</label>
                <input
                  type="number"
                  value={currentEmployee.bonus}
                  onChange={(e) => handleUpdateField('bonus', e.target.value)}
                  readOnly={!editable}
                  className={`w-full p-2 mb-4 border rounded ${!editable && 'bg-gray-100'}`}
                />

                <button
                  onClick={handleRemoveEmployee}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full"
                >
                  Remove
                </button>

                {/* Grant Bonus Button */}
                <div className="mt-4">
                  <button
                    onClick={() => handleGrantBonus(1000)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full"
                  >
                    Grant $1000 Bonus
                  </button>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No employees found.</p>
          )}
        </div>

        {/* Add New Employee Container */}
        <div className="lg:w-1/3 w-full bg-blue-100 p-6 rounded-lg shadow-lg h-fit ml-[200px]">
          <h2 className="text-xl font-bold mb-4 text-center">Add New Employee</h2>
          <input
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            placeholder="Age"
            value={newEmployee.age}
            onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            placeholder="Salary"
            value={newEmployee.salary}
            onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            step="0.1"
            placeholder="Performance Rating (0-10)"
            value={newEmployee.rating}
            onChange={(e) => setNewEmployee({ ...newEmployee, rating: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            placeholder="Bonus"
            value={newEmployee.bonus}
            onChange={(e) => setNewEmployee({ ...newEmployee, bonus: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleAddEmployee}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;


