import React from 'react';

interface StepItemProps {
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({ title, description }) => {
  return (
    <div className="bg-soft-white shadow-lg p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-midnight-blue">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default StepItem;