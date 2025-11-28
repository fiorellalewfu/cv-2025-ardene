import React from 'react';
import { InterestsSectionData } from '../types';
import SectionTitle from './SectionTitle';

interface InterestsProps {
  data: InterestsSectionData;
}

const Interests: React.FC<InterestsProps> = ({ data }) => {
  return (
    <div className="mb-5">
      <SectionTitle title={data.title} />
      <p className="text-sm text-neutral-600">{data.description}</p>
    </div>
  );
};

export default Interests;
