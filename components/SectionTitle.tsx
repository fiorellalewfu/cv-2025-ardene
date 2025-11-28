import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h3 className="uppercase text-sm tracking-widest text-neutral-600 mb-2 flex items-center">
      {title}
      <span className="inline-block w-7 h-0.5 bg-ardene-pink ml-2 rounded-full"></span>
    </h3>
  );
};

export default SectionTitle;
