import React from 'react';

const DownloadButton = ({ isEnabled, selectedRows, data }) => {
  const handleDownload = () => {
    if (selectedRows.length === 0) return; // Prevent download if no items are selected
    const selectedData = selectedRows.map((id) => {
      return data.find((row) => row.name === id);
    });
    alert(JSON.stringify(selectedData, null, 2));
  };

  return (
    <button onClick={handleDownload} disabled={!isEnabled || selectedRows.length === 0} className="download-button">
      <span className="download-icon">⬇️</span> Download Selected
    </button>
  );
};

export default DownloadButton;
