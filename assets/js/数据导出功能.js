function exportData() {
    const dataStr = JSON.stringify(battleData);
    const blob = new Blob([dataStr], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `battle_data_${new Date().toISOString()}.json`;
    link.click();
}
