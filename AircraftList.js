// AircraftList.js
import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdAirplanemodeActive } from 'react-icons/md';

function AircraftList({ onAircraftSelect }) {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftClick = (aircraft) => {
    setSelectedAircraft(aircraft);
    onAircraftSelect(aircraft);
  };

  return (
    <div className="aircraft-list">
      <h2 className="aircraft-list-title">
        <Icon as={MdAirplanemodeActive} boxSize={5} style={{ marginRight: '3px' }} />
        Aircraft List:
      </h2>
      <div className="aircraft">
        <div onClick={() => handleAircraftClick("A318-100 CFM56-5")}>A318-100 CFM56-5</div>
        <div onClick={() => handleAircraftClick("A319-100 CFM56-5A4")}>A319-100 CFM56-5A4</div>
        <div onClick={() => handleAircraftClick('A220-100 PW1500G')}>A220-100 PW1500G</div>
        <div  onClick={() => handleAircraftClick("A220-300 PW1500G")}>A220-300   PW1500G</div>
        <div  onClick={() => handleAircraftClick("A320-200 CFM56-5A3")}>A320-200   CFM56-5A3</div>
        <div  onClick={() => handleAircraftClick("A320-200 IAE V2527-A5")}>A320-200   IAE V2527-A5</div>
        <div  onClick={() => handleAircraftClick("A321-200 CFM56-5B3")}>A321-200   CFM56-5B3</div>
        <div  onClick={() => handleAircraftClick("A321-200 LEAP-1A32")}>A321-200   LEAP-1A32</div>
        <div  onClick={() => handleAircraftClick("A330-200 CF6-80E1A3")}>A330-200   CF6-80E1A3</div>
        <div  onClick={() => handleAircraftClick("A330-300 PW4168")}>A330-300   PW4168</div>
        <div  onClick={() => handleAircraftClick("A340-300 CFM56-5C4")}>A340-300   CFM56-5C4</div>
        <div  onClick={() => handleAircraftClick("A350-900 TRENT XWB")}>A350-900   TRENT XWB</div>
        <div  onClick={() => handleAircraftClick("ATR 42-320 PW121")}>ATR 42-320   PW121</div>
        <div  onClick={() => handleAircraftClick("ATR 42-500 PW127E")}>ATR 42-500   PW127E</div>
        <div  onClick={() => handleAircraftClick("ATR 72-500 PW127F")}>ATR 72-500   PW127F</div>
        <div  onClick={() => handleAircraftClick("B737-700 CFM56-7B24")}>B737-700   CFM56-7B24</div>
        <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B26")}>B737-800   CFM56-7B26</div>
        <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B27")}>B737-800   CFM56-7B27</div>
        <div  onClick={() => handleAircraftClick("B737-900ER CFM56-7B26")}>B737-900ER   CFM56-7B26</div>
        <div  onClick={() => handleAircraftClick("B747-400 CF6-80C2B1F")}>B747-400   CF6-80C2B1F</div>
        <div  onClick={() => handleAircraftClick("B757-200 RB211-535E4B")}>B757-200   RB211-535E4B</div>
        <div  onClick={() => handleAircraftClick("B767-300ER CF6-80C2B6F")}>B767-300ER   CF6-80C2B6F</div>
        <div  onClick={() => handleAircraftClick("B777-200ER GE90-94B")}>B777-200ER   GE90-94B</div>
        <div  onClick={() => handleAircraftClick("B777-200LR GE90-115BL")}>B777-200LR   GE90-115BL</div>
        <div  onClick={() => handleAircraftClick("B777-300ER GE90-115BL")}>B777-300ER   GE90-115BL</div>
        <div  onClick={() => handleAircraftClick("B787-8 TRENT 1000-AE")}>B787-8   TRENT 1000-AE</div>
        <div  onClick={() => handleAircraftClick("B787-9 GENX-1B-74-75")}>B787-9   GENX-1B-74-75</div>
        <div  onClick={() => handleAircraftClick("B787-10 GENX-1B-76A")}>B787-10   GENX-1B-76A</div>
        <div  onClick={() => handleAircraftClick("C510 PW615F")}>C510   PW615F</div>
        <div  onClick={() => handleAircraftClick("C680 PW306C")}>C680   PW306C</div>
        <div  onClick={() => handleAircraftClick("C750 AE3007C1")}>C750   AE3007C1</div>
        <div  onClick={() => handleAircraftClick("DHC 8-400 PW150A")}>DHC 8-400   PW150A</div>
        <div  onClick={() => handleAircraftClick("E145LR AE3007A1")}>E145LR   AE3007A1</div>
        <div  onClick={() => handleAircraftClick("E170 CF34-8E")}>E170   CF34-8E</div>
        <div  onClick={() => handleAircraftClick("E175 CF34-8E5A1")}>E175   CF34-8E5A1</div>
        <div  onClick={() => handleAircraftClick("E175-E2 PW1715G")}>E175-E2   PW1715G</div>
        <div  onClick={() => handleAircraftClick("E190AR CF34-10E")}>E190AR   CF34-10E</div>
        <div  onClick={() => handleAircraftClick("CRJ200 CF34-3B1")}>CRJ200   CF34-3B1</div>
        <div  onClick={() => handleAircraftClick("CRJ700 CF34-8C5B1")}>CRJ700   CF34-8C5B1</div>
        <div  onClick={() => handleAircraftClick("CRJ900 CF34-8C5")}>CRJ900   CF34-8C5</div>
        <div  onClick={() => handleAircraftClick("CRJ1000 CF34-8C5A1")}>CRJ1000   CF34-8C5A1</div>
      </div>
    </div>
  );
}

export default AircraftList;

/*
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { MdAirplanemodeActive } from 'react-icons/md';

function AircraftList({ selectedAircraft, handleAircraftClick }) {
  return (
    <div className="aircraft-list">
      <h2 className="aircraft-list-title">
        <Icon as={MdAirplanemodeActive} boxSize={5} style={{ marginRight: '3px' }} />
        Aircraft List:
      </h2>
      <div className="aircraft">
        <div onClick={() => handleAircraftClick('A318-100 CFM56-5')}>A318-100 CFM56-5</div>
        <div onClick={() => handleAircraftClick('A319-100 CFM56-5A4')}>A319-100 CFM56-5A4</div>
        <div onClick={() => handleAircraftClick('A220-100 PW1500G')}>A220-100 PW1500G</div>
        <div  onClick={() => handleAircraftClick("A220-300 PW1500G")}>A220-300   PW1500G</div>
        <div  onClick={() => handleAircraftClick("A320-200 CFM56-5A3")}>A320-200   CFM56-5A3</div>
        <div  onClick={() => handleAircraftClick("A320-200 IAE V2527-A5")}>A320-200   IAE V2527-A5</div>
        <div  onClick={() => handleAircraftClick("A321-200 CFM56-5B3")}>A321-200   CFM56-5B3</div>
        <div  onClick={() => handleAircraftClick("A321-200 LEAP-1A32")}>A321-200   LEAP-1A32</div>
        <div  onClick={() => handleAircraftClick("A330-200 CF6-80E1A3")}>A330-200   CF6-80E1A3</div>
        <div  onClick={() => handleAircraftClick("A330-300 PW4168")}>A330-300   PW4168</div>
        <div  onClick={() => handleAircraftClick("A340-300 CFM56-5C4")}>A340-300   CFM56-5C4</div>
        <div  onClick={() => handleAircraftClick("A350-900 TRENT XWB")}>A350-900   TRENT XWB</div>
        <div  onClick={() => handleAircraftClick("ATR 42-320 PW121")}>ATR 42-320   PW121</div>
        <div  onClick={() => handleAircraftClick("ATR 42-500 PW127E")}>ATR 42-500   PW127E</div>
        <div  onClick={() => handleAircraftClick("ATR 72-500 PW127F")}>ATR 72-500   PW127F</div>
        <div  onClick={() => handleAircraftClick("B737-700 CFM56-7B24")}>B737-700   CFM56-7B24</div>
        <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B26")}>B737-800   CFM56-7B26</div>
        <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B27")}>B737-800   CFM56-7B27</div>
        <div  onClick={() => handleAircraftClick("B737-900ER CFM56-7B26")}>B737-900ER   CFM56-7B26</div>
        <div  onClick={() => handleAircraftClick("B747-400 CF6-80C2B1F")}>B747-400   CF6-80C2B1F</div>
        <div  onClick={() => handleAircraftClick("B757-200 RB211-535E4B")}>B757-200   RB211-535E4B</div>
        <div  onClick={() => handleAircraftClick("B767-300ER CF6-80C2B6F")}>B767-300ER   CF6-80C2B6F</div>
        <div  onClick={() => handleAircraftClick("B777-200ER GE90-94B")}>B777-200ER   GE90-94B</div>
        <div  onClick={() => handleAircraftClick("B777-200LR GE90-115BL")}>B777-200LR   GE90-115BL</div>
        <div  onClick={() => handleAircraftClick("B777-300ER GE90-115BL")}>B777-300ER   GE90-115BL</div>
        <div  onClick={() => handleAircraftClick("B787-8 TRENT 1000-AE")}>B787-8   TRENT 1000-AE</div>
        <div  onClick={() => handleAircraftClick("B787-9 GENX-1B-74-75")}>B787-9   GENX-1B-74-75</div>
        <div  onClick={() => handleAircraftClick("B787-10 GENX-1B-76A")}>B787-10   GENX-1B-76A</div>
        <div  onClick={() => handleAircraftClick("C510 PW615F")}>C510   PW615F</div>
        <div  onClick={() => handleAircraftClick("C680 PW306C")}>C680   PW306C</div>
        <div  onClick={() => handleAircraftClick("C750 AE3007C1")}>C750   AE3007C1</div>
        <div  onClick={() => handleAircraftClick("DHC 8-400 PW150A")}>DHC 8-400   PW150A</div>
        <div  onClick={() => handleAircraftClick("E145LR AE3007A1")}>E145LR   AE3007A1</div>
        <div  onClick={() => handleAircraftClick("E170 CF34-8E")}>E170   CF34-8E</div>
        <div  onClick={() => handleAircraftClick("E175 CF34-8E5A1")}>E175   CF34-8E5A1</div>
        <div  onClick={() => handleAircraftClick("E175-E2 PW1715G")}>E175-E2   PW1715G</div>
        <div  onClick={() => handleAircraftClick("E190AR CF34-10E")}>E190AR   CF34-10E</div>
        <div  onClick={() => handleAircraftClick("CRJ200 CF34-3B1")}>CRJ200   CF34-3B1</div>
        <div  onClick={() => handleAircraftClick("CRJ700 CF34-8C5B1")}>CRJ700   CF34-8C5B1</div>
        <div  onClick={() => handleAircraftClick("CRJ900 CF34-8C5")}>CRJ900   CF34-8C5</div>
        <div  onClick={() => handleAircraftClick("CRJ1000 CF34-8C5A1")}>CRJ1000   CF34-8C5A1</div>
      </div>
    </div>
  );
}

export default AircraftList;
*/
/*

import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react'
import { MdAirplanemodeActive } from 'react-icons/md'


function AircraftList() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftClick = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  return (
    <div className="aircraft-list">
      <h2 className='aircraft-list-title'>
      <Icon as={MdAirplanemodeActive}  boxSize={5}  style={{ marginRight: '3px' }} />
        Aircraft List:
      </h2>
      <div className="aircraft">
      <div  onClick={() => handleAircraftClick("A318-100 CFM56-5")}>A318-100   CFM56-5</div>
      <div  onClick={() => handleAircraftClick("A319-100 CFM56-5A4")}>A319-100   CFM56-5A4</div>
      <div  onClick={() => handleAircraftClick("A220-100 PW1500G")}>A220-100   PW1500G</div>
      <div  onClick={() => handleAircraftClick("A220-300 PW1500G")}>A220-300   PW1500G</div>
      <div  onClick={() => handleAircraftClick("A320-200 CFM56-5A3")}>A320-200   CFM56-5A3</div>
      <div  onClick={() => handleAircraftClick("A320-200 IAE V2527-A5")}>A320-200   IAE V2527-A5</div>
      <div  onClick={() => handleAircraftClick("A321-200 CFM56-5B3")}>A321-200   CFM56-5B3</div>
      <div  onClick={() => handleAircraftClick("A321-200 LEAP-1A32")}>A321-200   LEAP-1A32</div>
      <div  onClick={() => handleAircraftClick("A330-200 CF6-80E1A3")}>A330-200   CF6-80E1A3</div>
      <div  onClick={() => handleAircraftClick("A330-300 PW4168")}>A330-300   PW4168</div>
      <div  onClick={() => handleAircraftClick("A340-300 CFM56-5C4")}>A340-300   CFM56-5C4</div>
      <div  onClick={() => handleAircraftClick("A350-900 TRENT XWB")}>A350-900   TRENT XWB</div>
      <div  onClick={() => handleAircraftClick("ATR 42-320 PW121")}>ATR 42-320   PW121</div>
      <div  onClick={() => handleAircraftClick("ATR 42-500 PW127E")}>ATR 42-500   PW127E</div>
      <div  onClick={() => handleAircraftClick("ATR 72-500 PW127F")}>ATR 72-500   PW127F</div>
      <div  onClick={() => handleAircraftClick("B737-700 CFM56-7B24")}>B737-700   CFM56-7B24</div>
      <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B26")}>B737-800   CFM56-7B26</div>
      <div  onClick={() => handleAircraftClick("B737-800 CFM56-7B27")}>B737-800   CFM56-7B27</div>
      <div  onClick={() => handleAircraftClick("B737-900ER CFM56-7B26")}>B737-900ER   CFM56-7B26</div>
      <div  onClick={() => handleAircraftClick("B747-400 CF6-80C2B1F")}>B747-400   CF6-80C2B1F</div>
      <div  onClick={() => handleAircraftClick("B757-200 RB211-535E4B")}>B757-200   RB211-535E4B</div>
      <div  onClick={() => handleAircraftClick("B767-300ER CF6-80C2B6F")}>B767-300ER   CF6-80C2B6F</div>
      <div  onClick={() => handleAircraftClick("B777-200ER GE90-94B")}>B777-200ER   GE90-94B</div>
      <div  onClick={() => handleAircraftClick("B777-200LR GE90-115BL")}>B777-200LR   GE90-115BL</div>
      <div  onClick={() => handleAircraftClick("B777-300ER GE90-115BL")}>B777-300ER   GE90-115BL</div>
      <div  onClick={() => handleAircraftClick("B787-8 TRENT 1000-AE")}>B787-8   TRENT 1000-AE</div>
      <div  onClick={() => handleAircraftClick("B787-9 GENX-1B-74-75")}>B787-9   GENX-1B-74-75</div>
      <div  onClick={() => handleAircraftClick("B787-10 GENX-1B-76A")}>B787-10   GENX-1B-76A</div>
      <div  onClick={() => handleAircraftClick("C510 PW615F")}>C510   PW615F</div>
      <div  onClick={() => handleAircraftClick("C680 PW306C")}>C680   PW306C</div>
      <div  onClick={() => handleAircraftClick("C750 AE3007C1")}>C750   AE3007C1</div>
      <div  onClick={() => handleAircraftClick("DHC 8-400 PW150A")}>DHC 8-400   PW150A</div>
      <div  onClick={() => handleAircraftClick("E145LR AE3007A1")}>E145LR   AE3007A1</div>
      <div  onClick={() => handleAircraftClick("E170 CF34-8E")}>E170   CF34-8E</div>
      <div  onClick={() => handleAircraftClick("E175 CF34-8E5A1")}>E175   CF34-8E5A1</div>
      <div  onClick={() => handleAircraftClick("E175-E2 PW1715G")}>E175-E2   PW1715G</div>
      <div  onClick={() => handleAircraftClick("E190AR CF34-10E")}>E190AR   CF34-10E</div>
      <div  onClick={() => handleAircraftClick("CRJ200 CF34-3B1")}>CRJ200   CF34-3B1</div>
      <div  onClick={() => handleAircraftClick("CRJ700 CF34-8C5B1")}>CRJ700   CF34-8C5B1</div>
      <div  onClick={() => handleAircraftClick("CRJ900 CF34-8C5")}>CRJ900   CF34-8C5</div>
      <div  onClick={() => handleAircraftClick("CRJ1000 CF34-8C5A1")}>CRJ1000   CF34-8C5A1</div>
    </div>
    </div>
  );
}

export default AircraftList;
*/