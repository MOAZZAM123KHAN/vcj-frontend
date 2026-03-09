'use client';

import React from 'react';

interface Option {
    label: string;
    value: string;
}

interface FilterSelectProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
    label,
    options,
    value,
    onChange,
}) => {
    return (
        <div className="flex flex-col gap-2 min-w-[200px]">
            <label className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-slate-400">
                {label}
            </label>
            <div className="relative group">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-6 appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-700/50 focus:border-yellow-700/50 transition-all font-serif text-[15px] cursor-pointer group-hover:bg-white"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-[-40%]">
                    <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-yellow-700" fill="none" viewBox="0 0 10 6">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
