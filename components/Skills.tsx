import React from 'react';
import { SkillsSectionData } from '../types';
import SectionTitle from './SectionTitle';

interface SkillsProps {
  data: SkillsSectionData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <div className="mb-5">
      <SectionTitle title={data.title} />
      {data.groups.map((group, index) => (
        <div key={index} className="mb-3">
          <div className="text-sm font-semibold mb-1">{group.label}</div>
          <ul className="list-none text-sm text-neutral-600 space-y-0.5">
            {group.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
