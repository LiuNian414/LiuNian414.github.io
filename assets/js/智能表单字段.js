function toggleSpecialFields() {
    const selectedClass = document.getElementById('playerClass').value;
    document.querySelectorAll('.special-field').forEach(field => {
        field.style.display = field.dataset.class === selectedClass ? 'grid' : 'none';
    });
}
