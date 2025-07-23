export const ScrollingFlags = () => {
  const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Columbia', flag: '🇨🇴' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Japan', flag: '🇯🇵' },
  ];

  const CountryBadge = ({ country, isTopRow }) => (
    <div className={`
      flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm
      border border-gray-200 whitespace-nowrap mx-2
      ${isTopRow ? 'mb-3' : 'mt-3'}
    `}>
      <span className="text-lg">{country.flag}</span>
      <span className="text-sm font-medium text-gray-700">{country.name}</span>
    </div>
  );

  return (
    <div className="w-full bg-gray-800 py-8 overflow-hidden relative">
      {/* Blue accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-blue-500"></div>
      
      {/* Top row - scrolling left */}
      <div className="flex animate-scroll-left mb-2">
        {[...countries, ...countries].map((country, index) => (
          <CountryBadge 
            key={`top-${index}`} 
            country={country} 
            isTopRow={true}
          />
        ))}
      </div>
      
      {/* Bottom row - scrolling right */}
      <div className="flex animate-scroll-right">
        {[...countries.slice().reverse(), ...countries.slice().reverse()].map((country, index) => (
          <CountryBadge 
            key={`bottom-${index}`} 
            country={country} 
            isTopRow={false}
          />
        ))}
      </div>
      </div>
    )
    }