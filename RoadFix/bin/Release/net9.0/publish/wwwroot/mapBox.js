window.mapBox = {
    initialize: function (elementId, lat, lng) {
        var map = L.map(elementId).setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a sample marker for a reported pothole
        L.marker([lat, lng]).addTo(map)
            .bindPopup('Pothole Reported Here')
            .openPopup();
    }
};