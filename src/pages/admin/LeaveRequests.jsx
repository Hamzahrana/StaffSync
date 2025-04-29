import { useState } from 'react';

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'John Doe', reason: 'Medical leave for 3 days.', status: 'pending' },
    { id: 2, name: 'Jane Smith', reason: 'Family event, need 2 days off.', status: 'pending' },
    { id: 3, name: 'Alice Johnson', reason: 'Vacation planned for next week.', status: 'pending' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleApprove = () => {
    updateStatus('approved');
  };

  const handleReject = () => {
    updateStatus('rejected');
  };

  const updateStatus = (newStatus) => {
    const updatedRequests = leaveRequests.map((req, index) =>
      index === currentIndex ? { ...req, status: newStatus } : req
    );
    setLeaveRequests(updatedRequests);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : leaveRequests.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < leaveRequests.length - 1 ? prev + 1 : 0));
  };

  const currentRequest = leaveRequests[currentIndex];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      {/* Top Heading Bar */}
      <div className="w-full bg-blue-100 p-4 flex justify-center shadow-md">
        <h1 className="text-3xl font-bold text-center">Leave Requests</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-blue-100 p-10 rounded-xl shadow-lg max-w-xl w-full text-center mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md mb-6 relative">
            <div className="text-left">
              <p className="text-lg font-semibold mb-2">Employee ID: {currentRequest.id}</p>
              <p className="text-lg font-semibold mb-4">Name: {currentRequest.name}</p>
              <hr className="mb-4" />
              <p className="text-md text-gray-700">Leave Reason:</p>
              <p className="text-md font-medium mb-4">{currentRequest.reason}</p>

              <p className="text-sm mt-2">
                Status:{" "}
                <span className={`font-bold ${currentRequest.status === 'approved' ? 'text-green-600' : currentRequest.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {currentRequest.status.toUpperCase()}
                </span>
              </p>
            </div>

            {/* Approve / Reject Buttons */}
            {currentRequest.status === 'pending' && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleApprove}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequests;
