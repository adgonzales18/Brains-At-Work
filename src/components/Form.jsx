import React from 'react';

function Form({ toggleForm }) {
  return (
    <div className="p-6 bg-white shadow-lg">
      <button 
        className="absolute top-4 right-4 text-red-500"
        onClick={toggleForm}
      >
        X
      </button>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">School</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;