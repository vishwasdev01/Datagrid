import React from 'react';
import Checkbox from './Checkbox';
import DownloadButton from './DownloadButton';

const Header = ({ data, selectedRows, handleSelectAll, isAllSelected, isDownloadEnabled }) => {
  return (
    <div className="table-header">
        <div>
      <Checkbox
        isChecked={isAllSelected}
        onChange={handleSelectAll}
        isIndeterminate={selectedRows.length > 0 && selectedRows.length !== data.filter(row => row.status === 'Available').length}
      />
      <label>{selectedRows.length > 0 ? `${selectedRows.length} Selected` : 'None Selected'}</label>
      </div>
      <DownloadButton
        isEnabled={isDownloadEnabled}
        selectedRows={selectedRows}
        data={data}
      />
    </div>
  );
};

export default Header;
