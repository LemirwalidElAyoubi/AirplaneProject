
import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdTableRows } from 'react-icons/md';
import Tables from './Tables';
//import {connect} from "react-redux" //connecting to the store (redux)


const SheetsList = ({ aircraft }) => {
  
  const [selectedSheet, setSelectedSheet] = useState(null);

  const handleSheetClick = (sheet) => {
    setSelectedSheet(sheet);
  };

  const renderSheetContent = () => {
    if (aircraft === 'A318-100 CFM56-5') {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A319-100 CFM56-5A4") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A220-100 PW1500G") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A220-300 PW1500G") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    }else if (aircraft === "A320-200 CFM56-5A3") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A320-200 IAE V2527-A5") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A321-200 CFM56-5B3") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A321-200 LEAP-1A32") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet}/>;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A330-200 CF6-80E1A3") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A330-300 PW4168") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A340-300 CFM56-5C4") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "A350-900 TRENT XWB") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "ATR 42-320 PW121") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "ATR 42-500 PW127E") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "ATR 72-500 PW127F") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B737-700 CFM56-7B24") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B737-800 CFM56-7B26") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B737-800 CFM56-7B27") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B737-900ER CFM56-7B26") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B747-400 CF6-80C2B1F") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B757-200 RB211-535E4B") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B767-300ER CF6-80C2B6F") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B777-200ER GE90-94B") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B777-200LR GE90-115BL") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B777-300ER GE90-115BL") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B787-8 TRENT 1000-AE") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B787-9 GENX-1B-74-75") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "B787-10 GENX-1B-76A") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "C510 PW615F") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "C680 PW306C") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "C750 AE3007C1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "DHC 8-400 PW150A") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "<E145LR AE3007A1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "E170 CF34-8E") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "E175 CF34-8E5A1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "E175-E2 PW1715G") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "E190AR CF34-10E") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "CRJ200 CF34-3B1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "CRJ700 CF34-8C5B1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "CRJ900 CF34-8C5") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else if (aircraft === "CRJ1000 CF34-8C5A1") {
      if (selectedSheet === 'TAKEOFF DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'TAKEOFF WET') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING DRY') {
        return <Tables selectedSheet={selectedSheet} />;
      } else if (selectedSheet === 'LANDING WET') {
        return <Tables selectedSheet={selectedSheet} />;
      }
    } else {
    
    return <div>Aircraft not found</div>;
    
  }
};

  return (
    <div className="sheets-list">
      <h2 className="sheets-list-title">
        <Icon as={MdTableRows} boxSize={4} style={{ marginRight: '5px' }} />
        {aircraft} Sheets List:
      </h2>
      <div className="sheets">
        <div
          onClick={() => handleSheetClick('TAKEOFF DRY')}
          className={`sheet-tab ${selectedSheet === 'TAKEOFF DRY' ? 'active-tab' : ''}`}
        >
          {/* <Icon as={MdTableRows} boxSize={4} style={{ marginRight: '5px' }} /> */}
          TAKEOFF DRY
        </div>
        <div
          onClick={() => handleSheetClick('TAKEOFF WET')}
          className={`sheet-tab ${selectedSheet === 'TAKEOFF WET' ? 'active-tab' : ''}`}
        >
          {/* <Icon as={MdTableRows} boxSize={4} style={{ marginRight: '5px' }} /> */}
          TAKEOFF WET
        </div>
        <div
          onClick={() => handleSheetClick('LANDING DRY')}
          className={`sheet-tab ${selectedSheet === 'LANDING DRY' ? 'active-tab' : ''}`}
        >
          {/* <Icon as={MdTableRows} boxSize={4} style={{ marginRight: '5px' }} /> */}
          LANDING DRY
        </div>
        <div
          onClick={() => handleSheetClick('LANDING WET')}
          className={`sheet-tab ${selectedSheet === 'LANDING WET' ? 'active-tab' : ''}`}
        >
          {/* <Icon as={MdTableRows} boxSize={4} style={{ marginRight: '5px' }} /> */}
          LANDING WET
        </div>
      </div>
      {renderSheetContent()}
    </div>
  );
};

export default SheetsList;

