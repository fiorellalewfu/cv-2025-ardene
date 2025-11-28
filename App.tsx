import React from 'react';
import { cvData } from './constants';
import CVHeader from './components/CVHeader';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';

const App: React.FC = () => {
  const { header, profile, skills, experience, professionalEducation, academicEducation, interests } = cvData;

  return (
    <div className="flex justify-center p-6 sm:p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        <CVHeader data={header} />

        <main className="grid grid-cols-1 md:grid-cols-[1.2fr_1.6fr] gap-6 p-6 md:p-8">
          {/* Left Column */}
          <section>
            <Profile data={profile} />
            <Skills data={skills} />
            <Interests data={interests} />
          </section>

          {/* Right Column */}
          <section>
            <Experience data={experience} />
            <Education data={professionalEducation} />
            <Education data={academicEducation} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
