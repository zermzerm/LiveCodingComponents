import {useState} from "react";

//Create a tabs component where each tab displays different content when selected.
export default function ITC({tabs}) {
  const [activeTab, setActiveTab] = useState(<div>선택된게 없음</div>);

  return (
    <div>
      {tabs.map((el,idx)=>(
        <button onClick={()=>setActiveTab(tabs[idx].content)}>
          {el.name}
        </button>
      ))}
      <div>
        {activeTab}
      </div>
    </div>
  );
}

export default function App(){
  const tabs = [
    {name : '탭1', content : <div>tab1</div>},
    {name : '탭1', content : <div>tab2</div>},
    {name : '탭1', content : <div>tab3</div>}
  ];

  return <ITC tabs={tabs}/>
}