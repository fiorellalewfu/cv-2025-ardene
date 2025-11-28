import React from 'react';
import { ExperienceSectionData } from '../types';
import SectionTitle from './SectionTitle';

interface ExperienceProps {
  data: ExperienceSectionData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="mb-5">
      <SectionTitle title={data.title} />
      {data.items.map((item, index) => (
        <article
          key={index}
          className={`mb-4 pb-3.5 ${
            index < data.items.length - 1 ? 'border-b border-dashed border-gray-200' : ''
          }`}
        >
          <div className="flex justify-between gap-2 items-baseline">
            <div>
              <div className="font-semibold text-base">{item.role}</div>
              <div className="text-sm text-neutral-600 mt-0.5">{item.company} · {item.location}</div>
            </div>
            <div className="text-sm text-neutral-600 whitespace-nowrap">{item.dates}</div>
          </div>
          <ul className="mt-1.5 pl-4 list-disc space-y-0.5">
            {item.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-sm text-neutral-600">
                {task}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Experience;
