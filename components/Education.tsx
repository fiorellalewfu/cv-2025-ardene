import React from 'react';
import { EducationSectionData } from '../types';
import SectionTitle from './SectionTitle';

interface EducationProps {
  data: EducationSectionData;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <div className="mb-5">
      <SectionTitle title={data.title} />
      {data.items.map((item, index) => (
        <div key={index} className="mb-2.5">
          <div className="text-base font-semibold">{item.title}</div>
          <div className="text-sm text-neutral-600">{item.meta}</div>
          {item.tasks && item.tasks.length > 0 && (
            <ul className="mt-1.5 pl-4 list-disc space-y-0.5">
              {item.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-sm text-neutral-600">
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
