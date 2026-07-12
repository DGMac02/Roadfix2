let map;

function initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement || map) return;

    // Initialize map centered on Johannesburg area
    map = L.map('map').setView([-26.2041, 28.0473], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Load potholes from Supabase
    loadPotholesOnMap();
}

async function loadPotholesOnMap() {
    if (!map) return;

    try {
        const { data, error } = await supabase
            .from('potholes')
            .select('*');

        if (error) throw error;

        data.forEach(pothole => {
            L.circleMarker([pothole.latitude, pothole.longitude], {
                radius: 8,
                fillColor: '#ff7800',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).bindPopup(`<b>${pothole.location}</b><br>Status: ${pothole.status}`)
            .addTo(map);
        });
    } catch (error) {
        console.error('Failed to load potholes:', error);
    }
}
