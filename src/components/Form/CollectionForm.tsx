import React, { useState } from 'react';
import Button from '../Button/Button';  

interface CollectionFormProps {
  onSubmit: (name: string, description: string) => void;
  onClose: () => void;
}

const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized_name = name.trim();  
    const sanitized_description = description.trim();

    if (!sanitized_name) {
      setError('Collection name is required!');
      return;
    }

    if (sanitized_name.length < 3) {
      setError('Collection name must be at least 3 characters long.');
      return;
    }

    if (sanitized_description.length > 500) {
      setError('Description must not exceed 500 characters.');
      return;
    }

    setError('');
    onSubmit(sanitized_name, sanitized_description);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-soft-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Collection</h3>
      
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}  
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold">Collection Name</label>
        <input
          id="name"
          type="text"
          className="w-full p-2 mt-1 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={3}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold">Description</label>
        <textarea
          id="description"
          className="w-full p-2 mt-1 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
        ></textarea>
      </div>
      
      <div className="flex justify-between items-center">
        <Button
          type="button"
          onClick={onClose}
          className="text-sm text-gray-500"
        >
          Cancel
        </Button>
        
        <Button
          type="submit"
          className="bg-electric-yellow text-white py-2 px-4 rounded"
        >
          Create Collection
        </Button>
      </div>
    </form>
  );
};

export default CollectionForm;