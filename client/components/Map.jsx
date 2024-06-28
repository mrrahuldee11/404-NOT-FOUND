import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style"; // Import Style class
import Icon from "ol/style/Icon"; // Import Icon class

const Map1 = ({ setMap1Object }) => {
  const map1Container = useRef();

  useEffect(() => {
    const map1 = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([85.46575, 21.37169]),
        zoom: 6,
      }),
    });
    map1.setTarget(map1Container.current);

    // Example markers (pins) at specific locations
    const markers = [
      { lon: 85.46575, lat: 21.37169, label: "Marker 1" },
      { lon: 85.455, lat: 21.38, label: "Marker 2" },
      { lon: 85.47, lat: 21.36, label: "Marker 3" },
    ];

    // Create a vector layer to hold the markers
    const vectorLayer = new VectorLayer({
      source: new VectorSource(),
    });
    map1.addLayer(vectorLayer);

    // Add markers to the vector layer with custom style
    markers.forEach((marker) => {
      const markerFeature = new Feature({
        geometry: new Point(fromLonLat([marker.lon, marker.lat])),
        name: marker.label,
      });

      // Define a custom style for the marker
      const markerStyle = new Style({
        image: new Icon({
          src: "custom-marker.png", // Path to your custom marker image
          anchor: [0.5, 1], // Center of the bottom edge of the marker
          scale: 0.5, // Adjust the scale of the marker image
        }),
      });

      markerFeature.setStyle(markerStyle); // Apply the custom style to the marker feature

      vectorLayer.getSource().addFeature(markerFeature); // Add the marker to the vector layer
    });

    setMap1Object(map1);

    return () => {
      map1.setTarget(undefined);
      setMap1Object(null);
    };
  }, [setMap1Object]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div ref={map1Container} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Map1;
