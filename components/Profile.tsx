import React from 'react';
import { ProfileSectionData } from '../types';
import SectionTitle from './SectionTitle';

interface ProfileProps {
  data: ProfileSectionData;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className="mb-5">
      <SectionTitle title={data.title} />
      <p className="text-sm text-neutral-600">
        {data.description}
      </p>
    </div>
  );
};

export default Profile;
