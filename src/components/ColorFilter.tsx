import React from 'react';

interface ColorFilterProps {
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
}

const colors = [
  { name: 'RED PASTEL', color: '#FF6B6B', code: 'red' },
  { name: 'LIME GREEN', color: '#51CF66', code: 'green' },
  { name: 'NAVY BLUE', color: '#364FC7', code: 'navy' },
  { name: 'CLEAN WHITE', color: '#FFFFFF', code: 'white' },
  { name: 'BLUE SKY', color: '#74C0FC', code: 'blue' },
  { name: 'PURPLE', color: '#9775FA', code: 'purple' },
  { name: 'PINK', color: '#F783AC', code: 'pink' },
  { name: 'YELLOW', color: '#FFD43B', code: 'yellow' },
  { name: 'DARK GREEN', color: '#2B8A3E', code: 'darkgreen' }
];

const firstRowColors = colors.slice(0, 4);
const secondRowColors = colors.slice(4);

const ColorFilter: React.FC<ColorFilterProps> = ({ selectedColors, onColorChange }) => {
  const handleColorClick = (colorCode: string) => {
    const newColors = selectedColors.includes(colorCode)
      ? selectedColors.filter(c => c !== colorCode)
      : [...selectedColors, colorCode];
    onColorChange(newColors);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-20 mb-2">
      <div className="flex flex-col mb-0 md:mb-0">
        <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
          Explore
        </h2>
        <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
          By <span className="text-black-500">Colours</span>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {firstRowColors.map((color) => (
            <button
              key={color.code}
              onClick={() => handleColorClick(color.code)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all border ${
                selectedColors.includes(color.code)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-400 hover:border-black hover:text-black'
              }`}
            >
              <div
                className={`h-4 w-4 rounded-full ${
                  color.color === '#FFFFFF' ? 'border border-gray-300' : ''
                }`}
                style={{ backgroundColor: color.color }}
              />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {secondRowColors.map((color) => (
            <button
              key={color.code}
              onClick={() => handleColorClick(color.code)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all border ${
                selectedColors.includes(color.code)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-400 hover:border-black hover:text-black'
              }`}
            >
              <div
                className={`h-4 w-4 rounded-full ${
                  color.color === '#FFFFFF' ? 'border border-gray-300' : ''
                }`}
                style={{ backgroundColor: color.color }}
              />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
