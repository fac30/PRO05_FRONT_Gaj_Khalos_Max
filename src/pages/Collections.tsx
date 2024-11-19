import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; 
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
    <main className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-pure-white p-8 transition-colors duration-300 min-h-screen flex flex-col">
      <h2 className="text-3xl font-bold text-center">Your Collections</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className="bg-white dark:bg-slate-gray p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">{collection.name}</h3>
            <p className="text-sm text-slate-gray dark:text-soft-white">{collection.description}</p> 
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-auto mb-8">
        <button
          className="text-white bg-electric-yellow dark:bg-electric-yellow py-2 px-6 rounded-lg font-semibold hover:bg-midnight-blue hover:text-soft-white transition-all"
          onClick={() => setModalOpen(true)}
          aria-label="Create a new collection"
        >
          <FaPlus size={20} className="inline-block mr-2" />
          Make a new collection
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <CollectionForm onSubmit={handleCreateCollection} onClose={() => setModalOpen(false)} />
      </Modal>
    </main>
  );
}