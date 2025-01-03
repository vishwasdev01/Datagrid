import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import StatusDot from './StatusDot';
import Header from './Header';

const Datagrid = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleRowSelection = (name) => {
    const newSelectedRows = selectedRows.includes(name)
      ? selectedRows.filter((row) => row !== name)
      : [...selectedRows, name];
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.filter(row => row.status === 'Available').map(row => row.name));
    }
    setIsAllSelected(!isAllSelected);
  };

  const isDownloadEnabled = selectedRows.length > 0 && selectedRows.every(name => {
    const row = data.find((row) => row.name === name);
    return row.status === 'Available';
  });

  useEffect(() => {
    if (selectedRows.length === data.filter(row => row.status === 'Available').length) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }
  }, [selectedRows]);

  return (
    <div>
      <Header
        data={data}
        selectedRows={selectedRows}
        handleSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
        isDownloadEnabled={isDownloadEnabled}
      />
      <table className="datagrid">
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.name}>
              <td>
                <Checkbox
                  isChecked={selectedRows.includes(row.name)}
                  onChange={() => handleRowSelection(row.name)}
                />
              </td>
              <td>{row.name}</td>
              <td>{row.device}</td>
              <td>{row.path}</td>
              <td>
                {row.status === 'Available' && <StatusDot />}
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datagrid;
