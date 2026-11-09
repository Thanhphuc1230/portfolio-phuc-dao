import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 inline-block text-center cursor-pointer select-none ${className}`}
    >
      Live Project
    </a>
  );
};
