import React, {useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretUp, faCaretDown, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {genUUID} from '../../functions/Crypto';
import './InfiniteScrollTable.scss';

/**
 * A table component which will attempt to fetch more data when the bottom of the table is scrolled into view
 * @param headers {Array}
 * @param loadMoreData {Function}
 * @param loadingComponent {JSX.Element}
 * @param noDataMessage {String}
 * @param initialMarker {String}
 * @param initialSortKey {String}
 * @param initialSortAsc {Boolean}
 * @param autoLoad {Boolean} If false, the component will show a "Load More" button instead of automatically
 * loading more data. Default true
 * @param loadMoreButtonText {String} Text used for the "Load More" button. Default 'Load More Data'
 * @returns {JSX.Element}
 * @constructor
 */
export const InfiniteScrollTable = ({headers, loadMoreData, loadingComponent=(<FontAwesomeIcon icon={faSpinner} />),
                                     noDataMessage='No data could be found.', initialMarker=null, initialSortKey=null,
                                     initialSortAsc=true, autoLoad=true, loadMoreButtonText='Load More Data'
}) => {
  const tBodyRef = useRef(null);
  const [showLoading, setShowLoading] = useState(true);
  const [dataRows, setDataRows] = useState([]);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [noFurtherData, setNoFurtherData] = useState(false);
  const [sortValue, setSortValue] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(initialSortAsc);
  const [marker, setMarker] = useState(initialMarker);
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) { return; }
    fetchData();
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortData();
    reTargetObserver();
  }, [dataRows, initialFetchComplete]);

  useEffect(() => {
    sortData();
  }, [sortValue, sortAsc]);

  const fetchData = () => {
    if (noFurtherData) {
      observer.disconnect();
      return;
    }

    setShowLoading(true);
    loadMoreData(marker).then((results) => {
      setShowLoading(false);
      setDataRows(dataRows.concat(results.data));
      setMarker(results.marker);
      setInitialFetchComplete(true);
      setNoFurtherData(!results?.marker || results.data.length === 0);
    });
  };

  const makeHeader = () => {
    const headerColumns = headers.map((column) => {
      let sortArrow = null;
      if (sortValue === column.key) {
        if (sortAsc) {
          sortArrow = <FontAwesomeIcon icon={faCaretUp} />;
        } else {
          sortArrow = <FontAwesomeIcon icon={faCaretDown} />;
        }
      }

      let clickFunc = () => updateSortOrder(column.key);
      let sortClass = 'is-sortable';
      let centerClass = '';
      if (typeof (column.sortable) !== 'undefined' && column.sortable === false) {
        clickFunc = null; sortClass = null;
      }

      if (typeof (column.center) !== 'undefined' && column.center) {
        centerClass = 'is-centered';
      }

      return (
        <th onClick={clickFunc} key={column.key} className={`${sortClass} ${centerClass}`}>
          {column.name}&nbsp;{sortArrow}
        </th>
      );
    });

    return <tr key={genUUID()}>{headerColumns}</tr>;
  };

  const makeBody = () => {
    return dataRows.map((row) => {
      // Loop over each of the specified headers we are to include
      const displayedColumns = headers.map((column) => {
        if (typeof (row[column.key]) === 'undefined') {
          throw new Error(`Attempted to access row key which does not exist: ${column.key}`);
        }

        // Possibly center the column
        const centerClass = (typeof (column.center) !== 'undefined' && column.center) ? 'is-centered' : '';

        // If an overrides object is provided, print the value in there
        let printVal;
        if (row.hasOwnProperty('overrides') && row.overrides.hasOwnProperty(column.key)) {
          printVal = row.overrides[column.key];
        } else {
          printVal = row[column.key] || '\u2013';
        }

        // Attempt to auto-format phone numbers
        if (column.key.toLowerCase().search('phone') > -1 && printVal.match(/^\d{10}$/) !== null) {
          printVal = `(${printVal.substring(0, 3)}) ${printVal.substring(3, 6)}-${printVal.substring(6)}`;
        }

        // Add the column to the row
        return <td key={genUUID()} className={centerClass}>{printVal}</td>;
      });

      return <tr key={genUUID()}>{displayedColumns}</tr>;
    });
  };

  const updateSortOrder = (newSortValue) => {
    setSortValue(newSortValue);
    if (sortValue === newSortValue) {
      setSortAsc(!sortAsc);
    } else {
      setSortAsc(true);
    }
  };

  const sortData = () => {
    if (!sortValue) { return; }

    const sortedArray = dataRows;
    sortedArray.sort((a, b) => {
      const aVal = (a[sortValue] === null) ?
        null :
        a[sortValue].toString().toLowerCase();
      const bVal = (b[sortValue] === null) ?
        null :
        b[sortValue].toString().toLowerCase();

      // Null values and empty strings are always sorted to be last
      if (aVal === null || aVal === '') { return sortAsc ? 1 : 0; }
      if (bVal === null || bVal === '') { return sortAsc ? -1 : 0; }
      if (aVal > bVal) { return sortAsc ? 1 : -1; }
      if (aVal < bVal) { return sortAsc ? -1 : 1; }
      return 0;
    });
    setDataRows(sortedArray);
  };

  const reTargetObserver = () => {
    observer.disconnect();
    if (noFurtherData || !autoLoad) { return; }

    const lastRow = tBodyRef?.current?.lastElementChild;
    if (lastRow) {
      observer.observe(lastRow);
    }
  };

  return (
    <div className="infinite-scroll-table-container">
      {
        (initialFetchComplete && dataRows.length === 0) ? (
          <div className="no-data">
            {noDataMessage}
          </div>
        ) : (
          <>
            <table className="infinite-scroll-table">
              <thead>{makeHeader()}</thead>
              <tbody ref={tBodyRef}>{makeBody()}</tbody>
            </table>
            <div className="infinite-scroll-table-footer">
              {
                showLoading ?
                  loadingComponent :
                  !autoLoad ?
                    <button onClick={() => fetchData()}>{loadMoreButtonText}</button> :
                    null
              }
            </div>
          </>
        )
      }
    </div>
  );
}