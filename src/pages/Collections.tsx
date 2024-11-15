// src/pages/Collections.tsx
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the + icon from react-icons
import Modal from '../components/Modal/Modal';
import CollectionForm from '../components/Form/CollectionForm';

export default function Collections() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [collections, setCollections] = useState<{ name: string; description: string }[]>([]); 

  const handleCreateCollection = (name: string, description: string) => {
    setCollections([...collections, { name, description }]); 
    setModalOpen(false); 
  };

  return (
    <main className="bg-soft-white text-midnight-blue p-8">
      <h2 className="text-3xl font-bold text-center">Your Collections</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">{collection.name}</h3>
            <p className="text-sm text-slate-gray">{collection.description}</p> 
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-8 right-8 bg-electric-yellow text-white rounded-full p-4 shadow-lg z-50"
        onClick={() => setModalOpen(true)}
        aria-label="Make your own collection"
      >
        <FaPlus size={24} />
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <CollectionForm onSubmit={handleCreateCollection} onClose={() => setModalOpen(false)} />
      </Modal>
    </main>
  );
}