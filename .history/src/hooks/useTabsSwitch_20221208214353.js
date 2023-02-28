import { useState, useEffect } from 'react';

function useTabsSwitch({ tabs, defaultTab }) {
  const [currentTab, setCurrentTab] = useState(defaultTab);
  console.log(currentTab);
  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };

  return [currentTab, handleTabSwitch];
}

export default useTabsSwitch;
