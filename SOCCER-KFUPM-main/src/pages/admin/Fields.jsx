// src/pages/admin/Fields.jsx
import React, { useState } from 'react';

const Fields = () => {
  // Sample fields data
  const [fields, setFields] = useState([
    { id: 1, name: 'Main Stadium', number: 'F001', description: 'Main competition field with seating for 500 spectators', status: 'Active' },
    { id: 2, name: 'Training Field A', number: 'F002', description: 'Practice field with artificial turf', status: 'Active' },
    { id: 3, name: 'Training Field B', number: 'F003', description: 'Secondary practice field', status: 'Inactive' },
    { id: 4, name: 'Indoor Arena', number: 'F004', description: 'Indoor field for bad weather conditions', status: 'Active' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newField, setNewField] = useState({
    name: '',
    number: '',
    description: '',
    status: 'Active'
  });

  const handleAddField = (e) => {
    e.preventDefault();
    const id = fields.length > 0 ? Math.max(...fields.map(f => f.id)) + 1 : 1;
    setFields([...fields, { ...newField, id }]);
    setNewField({ name: '', number: '', description: '', status: 'Active' });
    setShowAddForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField({ ...newField, [name]: value });
  };

  const toggleFieldStatus = (id) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, status: field.status === 'Active' ? 'Inactive' : 'Active' } : field
    ));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Fields Management</h2>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <span className="mr-2">+</span> Add Field
        </button>
      </div>
      
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Field</h3>
          <form onSubmit={handleAddField}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field Name</label>
                <input
                  type="text"
                  name="name"
                  value={newField.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field Number</label>
                <input
                  type="text"
                  name="number"
                  value={newField.number}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={newField.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={newField.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Add Field
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fields.map((field) => (
              <tr key={field.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{field.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{field.number}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{field.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${field.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {field.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => toggleFieldStatus(field.id)}
                    className={`mr-3 ${field.status === 'Active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                  >
                    {field.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fields;