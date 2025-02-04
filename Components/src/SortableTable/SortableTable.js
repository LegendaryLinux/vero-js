import React, {useState, useEffect} from 'react';
import './SortableTable.scss';

/**
 * @param headers {Array<{key: String, name: String, sortable: Boolean, center: Boolean}>}
 * [{key: 'foo', name: 'Foo'}]
 * @param data {Array<{[key: String]: {value: String|Number, }}>}
 * [{foo: {value: 1}}]
 * @param initialSortKey {String} Default null
 * @param initialSortAsc {Boolean} Default true
 * @param props
 * @constructor
 */
export const SortableTable = ({headers, data, initialSortKey=null, initialSortAsc=true, ...props}) => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(initialSortAsc);

  const className = `sortable-table ${props.className}`;
  delete props.className;

  return (
    <table className={className} {...props}>
      <thead>
        <tr>
          {headers.map((header) => (
            <td key={header.key}>{header.name}</td>
          ))}
        </tr>
      </thead>
    </table>
  );
};
