import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
      try {
        const fetchedData = await AssessmentService.getList();
        setAssessments(fetchedData);
      } catch (error) {
        console.error(`Failed to fetch assessments:`, error);
      }
    };
    fetchAssessments();
  }, []);
  const data = useMemo(() => assessments, [ assessments ]);

  const columns = useMemo(() => [
    {
      Header: `ID`,
      accessor: `id`, // accessor is the "key" in the data
    },
    {
      Header: `Title`,
      accessor: `title`,
    },
    {
      Header: `Date`,
      accessor: `date`,
    },
    {
      Header: `Status`,
      accessor: `status`,
    },

  ], []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data });

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell =>
                  <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
