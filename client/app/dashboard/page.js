"use client"
import Map1 from '@/components/Map'
import React, { useEffect, useState } from 'react'
import Synchronize from "ol-ext/interaction/Synchronize";

function page() {

    const [map1Object, setMap1Object] = useState(null);

    useEffect(() => {
      if (!map1Object) return;

      // Define the synchronization interaction for map1Object
      const synchronizeInteraction = new Synchronize({ maps: [map1Object] });
      map1Object.addInteraction(synchronizeInteraction);

      // Cleanup function
      return () => {
        if (map1Object) map1Object.removeInteraction(synchronizeInteraction);
      };
    }, [map1Object]);

  return (
    <div>
      <Map1 setMap1Object={setMap1Object} />
    </div>
  );
}

export default page