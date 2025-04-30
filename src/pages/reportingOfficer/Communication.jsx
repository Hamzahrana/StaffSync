import React, { useState } from 'react';

const mockEmployeeData = [
  { employeeID: '101', name: 'Alice Johnson' },
  { employeeID: '102', name: 'Bob Smith' },
  { employeeID: '103', name: 'Charlie Davis' },
];

const CommunicationPage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [message, setMessage] = useState('');

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (selectedEmployee && message) {
      alert(`Message sent to ${selectedEmployee}:\n${message}`);
      // Here you would typically send the message to the backend
      setMessage('');
    } else {
      alert('Please select an employee and write a message.');
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">💬 Communication</h1>

      <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-blue-800 font-semibold mb-2" htmlFor="employee">
            Select Employee
          </label>
          <select
            id="employee"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={selectedEmployee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {mockEmployeeData.map((employee) => (
              <option key={employee.employeeID} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-blue-800 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPage;
