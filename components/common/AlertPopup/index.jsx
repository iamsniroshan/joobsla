import { useState } from 'react';

const AlertPopup = ({ title, message, onAccept, onReject }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    setIsOpen(false);
    onAccept();
  };

  const handleReject = () => {
    setIsOpen(false);
    onReject();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? '' : 'hidden'}`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative z-50 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="text-xl font-medium mb-2">{title}</div>
          <div className="mb-6">{message}</div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
