import React from 'react';

function Form({ toggleForm }) {
  return (
      <div className="m-2 p-2 align-middle justify-center p-6 bg-white shadow-lg">
      <h1 className='text-center text-gray-700 p-3'>Enrollment Form</h1>
      <button 
        className="absolute top-10 right-10 text-2xl text-black hover:text-red-500"
        onClick={toggleForm}
      >
        <ion-icon name="close-circle-outline"></ion-icon>
      </button>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border border-black rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" className="w-full px-4 py-2 border border-black rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">School</label>
          <input type="text" className="w-full px-4 py-2 border border-black rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Grade Level</label>
          <input type="text" className="w-full px-4 py-2 border border-black rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>    
  );
}

export default Form;