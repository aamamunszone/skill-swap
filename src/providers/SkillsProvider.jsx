import React, { useEffect, useState } from 'react';
import { SkillsContext } from '../contexts/SkillsContext';

const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data) => {
        const allSkills = data;
        setSkills(allSkills);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading skills:', error);
        setLoading(false);
      });
  }, []);

  return (
    <SkillsContext.Provider value={{ skills, loading }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;
