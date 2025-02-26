// Function to switch sections
function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Search functionality
function searchTours() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let tours = document.querySelectorAll('.tour');

    tours.forEach(tour => {
        let destination = tour.dataset.destination.toLowerCase();
        if (destination.includes(input)) {
            tour.style.display = "inline-block";
        } else {
            tour.style.display = "none";
        }
    });
}
