'use client';

import AfricaMap from "./AfricaMap";


export default function AfricaMapWrapper() {
  const handleCountryClick = (id) => {
    console.log('Pays cliqué:', id);
  };

  return (
    
  <AfricaMap onCountryClick={handleCountryClick} />
);
}
