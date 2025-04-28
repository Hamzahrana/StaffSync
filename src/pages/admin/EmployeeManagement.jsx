import { useState } from 'react';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: '', age: '' });
  const [editableEmployeeId, setEditableEmployeeId] = useState(null); // Track which employee is editable

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.age) {
      const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
      setEmployees([...employees, { id: newId, ...newEmployee }]);
      setNewEmployee({ name: '', age: '' }); // Reset the form
    }
  };

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleUpdateEmployee = (id, field, value) => {
    setEmployees(
      employees.map(emp =>
        emp.id === id ? { ...emp, [field]: value } : emp
      )
    );
  };

  const handleEditToggle = (id) => {
    if (editableEmployeeId === id) {
      setEditableEmployeeId(null); // If already editable, disable editing
    } else {
      setEditableEmployeeId(id);   // Make selected employee editable
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-full bg-blue-100 p-4 flex justify-center shadow-md">
        <h1 className="text-3xl font-bold text-center">Employee Management</h1>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        {/* Add New Employee Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg mb-8 max-w-md mx-auto">
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
          <button
            onClick={handleAddEmployee}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Add Employee
          </button>
        </div>

        {/* Employees List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {employees.map((emp) => (
            <div key={emp.id} className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              {/* Update Button */}
              <button
                onClick={() => handleEditToggle(emp.id)}
                className="absolute top-2 right-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 text-sm rounded transition"
              >
                {editableEmployeeId === emp.id ? 'Save' : 'Update'}
              </button>

              <h3 className="text-lg font-semibold mb-2">Employee ID: {emp.id}</h3>
              <input
                type="text"
                value={emp.name}
                readOnly={editableEmployeeId !== emp.id}
                onChange={(e) => handleUpdateEmployee(emp.id, 'name', e.target.value)}
                className={`w-full p-2 mb-2 border rounded text-center ${editableEmployeeId === emp.id ? '' : 'bg-gray-100'}`}
              />
              <input
                type="number"
                value={emp.age}
                readOnly={editableEmployeeId !== emp.id}
                onChange={(e) => handleUpdateEmployee(emp.id, 'age', e.target.value)}
                className={`w-full p-2 mb-4 border rounded text-center ${editableEmployeeId === emp.id ? '' : 'bg-gray-100'}`}
              />
              <button
                onClick={() => handleRemoveEmployee(emp.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
