import React from 'react';
import { HeaderData } from '../types';

interface CVHeaderProps {
  data: HeaderData;
}

const CVHeader: React.FC<CVHeaderProps> = ({ data }) => {
  return (
    <header className="bg-neutral-900 text-white p-6 md:p-8 lg:px-10 lg:py-6 flex flex-wrap items-end gap-4 md:gap-8">
      <div className="flex-grow md:flex-1 min-w-[220px]">
        <h1 className="text-3xl lg:text-4xl tracking-wide uppercase whitespace-nowrap">
          <span className="font-light text-ardene-pink">{data.firstName}</span> {data.lastName}
        </h1>
        <h2 className="text-base uppercase mt-1 tracking-widest font-medium">
          {data.title}
        </h2>
        <p className="mt-2 text-sm max-w-lg opacity-95">
          {data.tagline}
        </p>
        <div className="inline-block bg-transparent rounded-full border border-ardene-pink px-2.5 py-0.5 text-xs uppercase tracking-wide mt-2">
          {data.pill}
        </div>
      </div>
      <div className="md:flex-1 min-w-[220px] text-sm mt-4 md:mt-0">
        <div className="uppercase text-xs tracking-wider opacity-80 mb-2">Contact</div>
        <ul className="list-none">
          <li className="flex items-center gap-2 mb-1">
            <strong>Tél.</strong>{' '}
            <a href={`tel:${data.contact.phone}`} className="hover:underline">
              {data.contact.phone}
            </a>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <strong>Email</strong>{' '}
            <a href={`mailto:${data.contact.email}`} className="hover:underline">
              {data.contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <strong>LinkedIn</strong>{' '}
            <a href={data.contact.linkedin.url} target="_blank" rel="noreferrer" className="hover:underline">
              {data.contact.linkedin.display}
            </a>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <strong>Portfolio</strong>{' '}
            <a href={data.contact.portfolio.url} target="_blank" rel="noreferrer" className="hover:underline">
              {data.contact.portfolio.display}
            </a>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <strong>Localisation</strong> {data.contact.location}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default CVHeader;