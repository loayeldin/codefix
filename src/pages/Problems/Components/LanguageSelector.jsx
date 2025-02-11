import React from "react";
import { LANGUAGE_VERSION } from "./Constants";
const languages = Object.entries(LANGUAGE_VERSION)
function LanguageSelector({language,onSelectLanguage}) {
  return (
    <div className="relative">
    <select
        className="block w-full bg-[#333333] text-whiteText border border-gray-600 rounded-md 
        px-4 py-2 appearance-none focus:outline-none  "
        name="language"
        value={language}
        onChange={(e) => onSelectLanguage(e.target.value)}
    >
        
        {languages.map(([lang, version]) => (
        <option key={lang} value={lang} className={`${lang ===language ? 'text-whiteText': 'text-gray-400'}`}>
            {lang} &nbsp; {version}
        </option>
        ))}
    </select>
    
    {/* Dropdown arrow icon */}
    <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
    <svg
      className="w-4 h-4 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
    </div>
    </div>

  );
}

export default LanguageSelector;
{/* <div className="bg-[#333333]  px-1">
<select
  className="select select-secondary select-difficulty  select-md text-whiteText"
  name="language"
  value={language}
  onChange={(e) => onSelectLanguage(e.target.value)}
>
    {
        languages.map(([lang,version])=>(
           <option className="mb-2 text-gray-400" key={lang} value={lang}>{lang} &nbsp; {version}</option>
        ))
    }

</select>
</div> */}
