import { countries } from "../../data/countries";

const StaggeredFlags = () => {
  const allCountries = [...countries, ...countries];

  const getRandomStyle = (index) => {
    const rotations = [-6, -7, -4, 1, 23, 9, -4, -2, 2, 4, -10, 2];
    const verticalOffsets = [0, 19, -3, 8, -5, 3, -9, 4, -2, 6, -4, 2];

    return {
      transform: `rotate(${rotations[index % rotations.length]}deg)`,
      marginTop: `${verticalOffsets[index % verticalOffsets.length]}px`,
      marginBottom: `${Math.abs(
        verticalOffsets[index % verticalOffsets.length]
      )}px`,
    };
  };

  return (
    <div className="w-full relative mt-30">
      <div className="grid grid-cols-4 grid-rows-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 justify-items-center">
        {allCountries.map((country, index) => (
          <div
            key={`${country.name}-${index}`}
            className="transform transition-all cursor-pointer duration-300 hover:scale-110 hover:z-10 relative"
            style={getRandomStyle(index)}
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-lg border border-gray-200 whitespace-nowrap">
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm font-medium text-gray-700">
                {country.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaggeredFlags;
