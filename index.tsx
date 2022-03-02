import React, { useRef } from 'react'
import InteractiveMap from 'react-map-gl'
import maplibregl from 'maplibre-gl'

const Map = () => {
	const mapRef = useRef(null)
	return (
		<InteractiveMap
			mapLib={maplibregl}
			ref={mapRef}>
		</InteractiveMap>
	)
}

export default Map