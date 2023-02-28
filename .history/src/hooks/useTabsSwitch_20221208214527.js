import { useState, useEffect } from 'react';

function useTabsSwitch(tabs, defaultTab) {
  const [currentTab, setCurrentTab] = useState(defaultTab);
  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);
  console.log(currentTab);
  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };

  return [currentTab, handleTabSwitch];
}

export default useTabsSwitch;
