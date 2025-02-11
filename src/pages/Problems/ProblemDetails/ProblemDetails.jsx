import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";


import { NavLink, Outlet } from "react-router-dom";
import { CODE_SNIPPETS } from "../Components/Constants";
const SolvingProblemNav = React.lazy(() =>
  import("../Components/SolvingProblemNav")
);
const LanguageSelector = React.lazy(() =>
  import("../Components/LanguageSelector")
);
const OutPut = React.lazy(() =>
  import("../Components/OutPut")
);

function ProblemDetails() {
  const [value, setValue] = useState('')
  const editorRef = useRef()
  const [language, setLanguage] = useState('javascript')
  const onSelectLanguage = (language)=>{
    setLanguage(language)
    setValue(CODE_SNIPPETS[language])
  }
  const editorFocus = (editor)=>{
    editorRef.current = editor
    editor.focus()
  }

  return (
    <div className="flex flex-col h-screen gap-y-1">
      <SolvingProblemNav language={language} editorRef={editorRef} />
      <div className="flex-grow grid grid-cols-2 ">
        <div className="bg-[#262626] w-full rounded-xl overflow-hidden   border ">
          <div className="flex bg-[#333333] py-1 px-1">
            <NavLink  to={`description`} className={(({isActive})=>`${isActive?"text-whiteText":"text-textColor"}`)}>
              <button className="btn btn-ghost btn-sm  capitalize border ">
                  <FontAwesomeIcon icon={faReadme} className=""/>
                  description
              </button>
            </NavLink>

            <NavLink  to={`solutions`} className={(({isActive})=>`${isActive?"text-whiteText":"text-textColor"}`)}>
              <button className="btn btn-ghost btn-sm relative capitalize border before:absolute before:w-[2px] before:h-5 before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2">
                  <FontAwesomeIcon icon={faReadme} className=""/>
                  solutions
              </button>
            </NavLink>
            
          </div>

          <Outlet/>
        </div>

        
        <div className="flex flex-col">
          <LanguageSelector language={language} onSelectLanguage={onSelectLanguage}  />
          <Editor 
            theme="vs-dark" 
            className="h-[55vh]"
            value={value}
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onChange={(value)=>setValue(value)}
            onMount={editorFocus}
          />
          <OutPut/>
        </div>

      
      </div>
    </div>
  );
}

export default ProblemDetails;


{/* <div role="tablist" className="tabs tabs-lifted ">
<input
  type="radio"
  name="my_tabs_2"
  role="tab"
  className="tab"
  aria-label="Tab 1"
  id="tab1"
  onChange={handleTabChange}
  defaultChecked
/>

<input
  type="radio"
  name="my_tabs_2"
  role="tab"
  className="tab"
  aria-label="Tab 2"
  
  id="tab2"
/>

<input
  type="radio"
  name="my_tabs_2"
  role="tab"
  className="tab"
  aria-label="Tab 3"
/>
<div
  role="tabpanel"
  className="tab-content bg-base-700 border-base-300 rounded-box p-6"
  aria-labelledby="tab1"
  id="content1"
>
  <ProblemDescription />
</div>
<div
  role="tabpanel"
  className="tab-content bg-base-100 border-base-300 rounded-box p-6"
>
  Tab content 2
</div>
<div
  role="tabpanel"
  className="tab-content bg-base-100 border-base-300 rounded-box p-6"
>
  Tab content 3
</div>

</div> */}