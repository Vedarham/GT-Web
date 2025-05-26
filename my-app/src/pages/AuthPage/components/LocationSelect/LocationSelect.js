import React, { useState, useEffect } from 'react';
// import { Search } from 'lucide-react';
import { indianStates } from '../../../../utils/indianStates.js';
import { getDistricts } from '../../../../utils/districts.js';
import './LocationSelect.style.css';

function LocationSelect({ onStateChange, onDistrictChange }) {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [districts, setDistricts] = useState([]);
  const [stateSearch, setStateSearch] = useState('');
  const [districtSearch, setDistrictSearch] = useState('');
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  useEffect(() => {
    if (state) {
      const districtList = getDistricts(state);
      setDistricts(districtList);
    }
  }, [state]);

  const filteredStates = indianStates.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const filteredDistricts = districts.filter((d) =>
    d.toLowerCase().includes(districtSearch.toLowerCase())
  );

  return (
    <div className="location-select">
      <div className="select-group">
        <label>State</label>
        <div className="input-wrapper">
          <input
            type="text"
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
            onFocus={() => setShowStateDropdown(true)}
            placeholder="Search state..."
            className="search-input"
          />
          {/* <Search className="search-icon" /> */}
        </div>
        {showStateDropdown && (
          <div className="dropdown-menu">
            {filteredStates.map((s) => (
              <button
                key={s}
                className="dropdown-item"
                onClick={() => {
                  setState(s);
                  setStateSearch(s);
                  setShowStateDropdown(false);
                  onStateChange(s);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {state && (
        <div className="select-group">
          <label>District</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={districtSearch}
              onChange={(e) => setDistrictSearch(e.target.value)}
              onFocus={() => setShowDistrictDropdown(true)}
              placeholder="Search district..."
              className="search-input"
            />
            {/* <Search className="search-icon" /> */}
          </div>
          {showDistrictDropdown && (
            <div className="dropdown-menu">
              {filteredDistricts.map((d) => (
                <button
                  key={d}
                  className="dropdown-item"
                  onClick={() => {
                    setDistrict(d);
                    setDistrictSearch(d);
                    setShowDistrictDropdown(false);
                    onDistrictChange(d);
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LocationSelect