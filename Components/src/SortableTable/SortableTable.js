import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';
import './SortableTable.scss';

/**
 * @param headers {Array<{key: String, name: String, sortable: Boolean, center: Boolean}>}
 * Ex. [{key: 'name', name: 'Name'}, {key: 'address', name: 'Address'}]
 * @param data {Array<{[key: String]: String|Number, overrides: Object<{[key: String]: JSX.Element|String|Number}>}
 * Ex. [{name: 'Jim', address: '123 Somewhere St.', overrides: {name: 'Jimbo'}}]
 * @param initialSortKey {String} Default null
 * @param initialSortAsc {Boolean} Default true
 * @param tableClass {String} Class name to provide your own styling for the table
 * @param props {*} Component props passed to <table>
 * @constructor
 */
export const SortableTable = ({headers, data, initialSortKey=null, initialSortAsc=true,
                                tableClass=null, ...props}) => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(initialSortAsc);

  const handleHeaderClick = (header) => {
    if (header.sortable === false) {
      return;
    }

    // If this is a new header, sort it asc
    if (sortKey !== header.key) {
      setSortKey(header.key);
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
    if (sortKey) {
      data.sort((a, b) => sortAlgo(sortAsc ? a : b, sortAsc ? b : a));
    }

    return (
      data.map((row) => (
        <tr key={crypto.randomUUID()}>
          {
            headers.map((h) => (
              <td key={crypto.randomUUID()} className={h.center ? 'center' : null}>
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
    <table className={`sortable-table ${tableClass}`} {...props}>
      <thead>
      <tr>
        {
          headers.map((header) => {
            const fadedSortArrow = (header.sortable !== false) ?
              <FontAwesomeIcon icon={faSort} className="faded-sort-arrow" /> :
              null;

            let activeSortArrow = null;
            if (sortKey === header.key) {
              if (sortAsc) {
                activeSortArrow = <FontAwesomeIcon icon={faSortUp} className="active-sort-arrow" />;
              } else {
                activeSortArrow = <FontAwesomeIcon icon={faSortDown} className="active-sort-arrow" />;
              }
            }

            return (
              <th
                key={header.key}
                onClick={() => handleHeaderClick(header)}
                className={`${header.center ? 'center' : null} ${(header.sortable !== false) ? 'sortable' : null}`}
              >
                {header.name} {fadedSortArrow}{activeSortArrow}
              </th>
            )
          })
        }
        </tr>
      </thead>
      <tbody>
        {buildTableRows()}
      </tbody>
    </table>
  );
};
