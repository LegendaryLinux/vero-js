import React, {useState, useEffect} from 'react';
import './SortableTable.scss';

/**
 * @param headers {Array<{key: String, name: String, sortable: Boolean, center: Boolean}>}
 * Ex. [{key: 'name', name: 'Name'}, {key: 'address', name: 'Address'}]
 * @param data {Array<{[key: String]: JSX.Element, overrides: Object<{[key: String]: JSX.Element}>}
 * Ex. [{name: 'Jim', address: '123 Somewhere St.', overrides: {name: 'Jimbo'}}]
 * @param initialSortKey {String} Default null
 * @param initialSortAsc {Boolean} Default true
 * @param tableClass {String} Class name to provide your own styling for the table
 * @param props {*} Component props passed to <table>
 * @constructor
 */
export const SortableTable = ({headers, data, initialSortKey=null, initialSortAsc=true,
                                tableClass='sortable-table', ...props}) => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(initialSortAsc);

  const handleHeaderClick = (key) => {
    // If this is a new header, sort it asc
    if (sortKey !== key) {
      setSortKey(key);
      setSortAsc(true);
      return;
    }

    // If the user clicks the already sorted header, swap the sort order
    setSortAsc(!sortAsc);
  };

  const sortAlgo = (a, b) => (a[sortKey] === b[sortKey]) ?
    0 :
    (a[sortKey] < b[sortKey]) ?
      -1 :
      1;

  const buildTableRows = () => {
    const tableData = structuredClone(data);
    if (sortKey) {
      tableData.sort((a, b) => sortAlgo(sortAsc ? a : b, sortAsc ? b : a));
    }

    return (
      tableData.map((row) => (
        <tr key={crypto.randomUUID()}>
          {
            headers.map((h) => (
              <td className={h.center ? 'center' : null}>
                {
                  row.overrides && row.overrides?.[h.key] ?
                    row.overrides[h.key] :
                    row[h.key]
                }
              </td>
            ))
          }
        </tr>
      ))
    );
  };

  return (
    <table className={tableClass} {...props}>
      <thead>
      <tr>
        {headers.map((header) => (
          <th
            key={header.key}
            onClick={header.sortable ? (() => handleHeaderClick(header.key)) : null}
            className={`${header.center ? 'center' : null} ${header.sortable ? 'sortable' : null}`}
          >
            {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {buildTableRows()}
      </tbody>
    </table>
  );
};
