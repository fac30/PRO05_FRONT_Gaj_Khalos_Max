import React from 'react';

interface Item {
  title: string;
  description: string;
}

interface SectionWithItemsProps {
  title: string;
  items: Item[];
}

const SectionWithItems: React.FC<SectionWithItemsProps> = ({ title, items }) => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-midnight-blue dark:text-soft-white">{title}</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-soft-white dark:bg-slate-gray shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-midnight-blue dark:text-soft-white">{item.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-soft-gray">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWithItems;