import { useState } from 'react';
import TabItem from './TabItem';

function Tabs({ list, activeTab, onTabSwitch }) {
  let active = activeTab === '' ? list[0] : activeTab;
  // console.log(activeTab);
  return (
    <div className="sticky z-1900 bg-white">
      <div className="container mx-auto flex align-center py-2 border-gray-400 border-b-1 overflow-auto">
        {list.map((item, index) => (
          <TabItem
            key={index}
            title={item}
            index={index}
            active={active === item}
            setActive={onTabSwitch}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
