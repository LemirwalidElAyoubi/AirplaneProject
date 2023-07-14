
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Tables from './Tables';


const tableData_ZW_LD = []/* initialize with the appropriate value */;
const tableData_ZW_LW = []/* initialize with the appropriate value */;
const tableData_ZW_TOD = []/* initialize with the appropriate value */;
const tableData_ZW_TOW = []/* initialize with the appropriate value */;
const tableData_HW_LD = []/* initialize with the appropriate value */;
const tableData_HW_LW = []/* initialize with the appropriate value */;
const tableData_HW_TOD = []/* initialize with the appropriate value */;
const tableData_HW_TOW = []/* initialize with the appropriate value */;
const tableData_TW_LD = []/* initialize with the appropriate value */;
const tableData_TW_LW = []/* initialize with the appropriate value */;
const tableData_TW_TOD = []/* initialize with the appropriate value */;
const tableData_TW_TOW = []/* initialize with the appropriate value */;


function Popup({ show, setShow, onFileUpload, fileTypes }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploadError('');
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const data = new Uint8Array(fileReader.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetNames = workbook.SheetNames;
        const jsonData = [];

        sheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          jsonData.push(sheetData);
        });
        onFileUpload(jsonData); // Pass the uploaded data to the parent component
      };
      fileReader.onerror = () => {
        setUploadError('Error reading the file.');
      };
      fileReader.readAsArrayBuffer(selectedFile);
      setSelectedFile(null);
    } else {
      setUploadError('Please select a file.');
    }
  };

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <h2>File Upload</h2>
        <p>Choose the {fileTypes} data file:</p>
        <div className="upload-container">
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose File
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          {selectedFile && <span className="file-name">{selectedFile.name}</span>}
        </div>
        {uploadError && <p className="error">{uploadError}</p>}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

function Buttons() {
  const [showPopup, setShowPopup] = useState(false);
  const [windType, setWindType] = useState('');
  const [tailWindData, setTailWindData] = useState(null);
  const [headWindData, setHeadWindData] = useState(null);
  const [zeroWindData, setZeroWindData] = useState(null);

  const handleImportClick = () => {
    setShowPopup(true);
  };


  const handleFileUpload = (jsonData) => {
    if (windType === 'wind') {
      if (!tailWindData) {
        /* const tableData_TW_LD = [];
        const tableData_TW_LW = [];
        const tableData_TW_TOD = [];
        const tableData_TW_TOW = []; */
        const indices = [2, 11, 20, 29]; // Starting indices for each set of rows
        
        for (let index of indices) {
          for (let i = index; i <= index + 5; i++) {
            tableData_TW_LD.push(jsonData[0][i].slice(1, 6)); // headwind
            tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); // table 2
            tableData_TW_LD.push(jsonData[0][i].slice(13, 18)); // t 3
            tableData_TW_LD.push(jsonData[0][i].slice(19, 24)); // t 4
        
            tableData_TW_LW.push(jsonData[1][i].slice(1, 6)); // headwind
            tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); // table 2
            tableData_TW_LW.push(jsonData[1][i].slice(13, 18)); // t 3
            tableData_TW_LW.push(jsonData[1][i].slice(19, 24)); // t 4
        
            tableData_TW_TOD.push(jsonData[2][i].slice(1, 6)); // headwind
            tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); // table 2
            tableData_TW_TOD.push(jsonData[2][i].slice(13, 18)); // t 3
            tableData_TW_TOD.push(jsonData[2][i].slice(19, 24)); // t 4
        
            tableData_TW_TOW.push(jsonData[3][i].slice(1, 6)); // headwind
            tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); // table 2
            tableData_TW_TOW.push(jsonData[3][i].slice(13, 18)); // t 3
            tableData_TW_TOW.push(jsonData[3][i].slice(19, 24)); // t 4
          }
        }
        
        console.log('Table Data TailWind LD:', tableData_TW_LD);
        console.log('Table Data TailWind LW:', tableData_TW_LW);
        console.log('Table Data TailWind TOD:', tableData_TW_TOD);
        console.log('Table Data TailWind TOW:', tableData_TW_TOW);
        setTailWindData(jsonData);
        setShowPopup(true);



      } else if (!headWindData) {

        /* const tableData_HW_LD = [];
        const tableData_HW_LW = [];
        const tableData_HW_TOD = [];
        const tableData_HW_TOW = []; */
        const indices = [2, 11, 20, 29]; // Starting indices for each set of rows
        
        for (let index of indices) {
          for (let i = index; i <= index + 5; i++) {
            tableData_HW_LD.push(jsonData[0][i].slice(1, 6)); // headwind
            tableData_HW_LD.push(jsonData[0][i].slice(7, 12)); // table 2
            tableData_HW_LD.push(jsonData[0][i].slice(13, 18)); // t 3
            tableData_HW_LD.push(jsonData[0][i].slice(19, 24)); // t 4
        
            tableData_HW_LW.push(jsonData[1][i].slice(1, 6)); // headwind
            tableData_HW_LW.push(jsonData[1][i].slice(7, 12)); // table 2
            tableData_HW_LW.push(jsonData[1][i].slice(13, 18)); // t 3
            tableData_HW_LW.push(jsonData[1][i].slice(19, 24)); // t 4
        
            tableData_HW_TOD.push(jsonData[2][i].slice(1, 6)); // headwind
            tableData_HW_TOD.push(jsonData[2][i].slice(7, 12)); // table 2
            tableData_HW_TOD.push(jsonData[2][i].slice(13, 18)); // t 3
            tableData_HW_TOD.push(jsonData[2][i].slice(19, 24)); // t 4
        
            tableData_HW_TOW.push(jsonData[3][i].slice(1, 6)); // headwind
            tableData_HW_TOW.push(jsonData[3][i].slice(7, 12)); // table 2
            tableData_HW_TOW.push(jsonData[3][i].slice(13, 18)); // t 3
            tableData_HW_TOW.push(jsonData[3][i].slice(19, 24)); // t 4
          }
        }

        console.log('Table Data HeadWind LD:', tableData_HW_LD);
        console.log('Table Data HeadWind LW:', tableData_HW_LW);
        console.log('Table Data HeadWind TOD:', tableData_HW_TOD);
        console.log('Table Data HeadWind TOW:', tableData_HW_TOW);

        setHeadWindData(jsonData);
        setShowPopup(true);



      } else if (!zeroWindData) {
       /*  const tableData_ZW_LD = [];
        const tableData_ZW_LW = [];
        const tableData_ZW_TOD = [];
        const tableData_ZW_TOW = []; */
        const indices = [2, 11, 20, 29]; // Starting indices for each set of rows
        
        for (let index of indices) {
          for (let i = index; i <= index + 5; i++) {
            tableData_ZW_LD.push(jsonData[0][i].slice(1, 6)); // headwind
            tableData_ZW_LD.push(jsonData[0][i].slice(7, 12)); // table 2
            tableData_ZW_LD.push(jsonData[0][i].slice(13, 18)); // t 3
            tableData_ZW_LD.push(jsonData[0][i].slice(19, 24)); // t 4
        
            tableData_ZW_LW.push(jsonData[1][i].slice(1, 6)); // headwind
            tableData_ZW_LW.push(jsonData[1][i].slice(7, 12)); // table 2
            tableData_ZW_LW.push(jsonData[1][i].slice(13, 18)); // t 3
            tableData_ZW_LW.push(jsonData[1][i].slice(19, 24)); // t 4
            
            tableData_ZW_TOD.push(jsonData[2][i+1].slice(1, 6)); // headwind
            tableData_ZW_TOD.push(jsonData[2][i+1].slice(7, 12)); // table 2
            tableData_ZW_TOD.push(jsonData[2][i+1].slice(13, 18)); // t 3
            tableData_ZW_TOD.push(jsonData[2][i+1].slice(19, 24)); // t 4
            //tableData_ZW_TOD.push(jsonData[2][i].slice(25, 30)); // t 4 row 5
        
            tableData_ZW_TOW.push(jsonData[3][i+1].slice(1, 6)); // headwind
            tableData_ZW_TOW.push(jsonData[3][i+1].slice(7, 12)); // table 2
            tableData_ZW_TOW.push(jsonData[3][i+1].slice(13, 18)); // t 3
            tableData_ZW_TOW.push(jsonData[3][i+1].slice(19, 24)); // t 4
            //tableData_ZW_TOW.push(jsonData[3][i].slice(25, 30)); // t row5
          }
        }

        console.log('Table Data ZeroWind LD:', tableData_ZW_LD);
        console.log('Table Data ZeroWind LW:', tableData_ZW_LW);
        console.log('Table Data ZeroWind TOD:', tableData_ZW_TOD);
        console.log('Table Data ZeroWind TOW:', tableData_ZW_TOW);



        setZeroWindData(jsonData);
        setShowPopup(false);

      }
    } else if (windType === 'no-wind') {

      /* const tableData_ZW_LD = [];
      const tableData_ZW_LW = [];
      const tableData_ZW_TOD = [];
      const tableData_ZW_TOW = []; */
      const indices = [2, 11, 20, 29]; // Starting indices for each set of rows
      
      for (let index of indices) {
        for (let i = index; i <= index + 5; i++) {
          tableData_ZW_LD.push(jsonData[0][i].slice(1, 6)); // headwind
          tableData_ZW_LD.push(jsonData[0][i].slice(7, 12)); // table 2
          tableData_ZW_LD.push(jsonData[0][i].slice(13, 18)); // t 3
          tableData_ZW_LD.push(jsonData[0][i].slice(19, 24)); // t 4
      
          tableData_ZW_LW.push(jsonData[1][i].slice(1, 6)); // headwind
          tableData_ZW_LW.push(jsonData[1][i].slice(7, 12)); // table 2
          tableData_ZW_LW.push(jsonData[1][i].slice(13, 18)); // t 3
          tableData_ZW_LW.push(jsonData[1][i].slice(19, 24)); // t 4
      
          tableData_ZW_TOD.push(jsonData[2][i+1].slice(1, 6)); // headwind
          tableData_ZW_TOD.push(jsonData[2][i+1].slice(7, 12)); // table 2
          tableData_ZW_TOD.push(jsonData[2][i+1].slice(13, 18)); // t 3
          tableData_ZW_TOD.push(jsonData[2][i+1].slice(19, 24)); // t 4
      
          tableData_ZW_TOW.push(jsonData[3][i+1].slice(1, 6)); // headwind
          tableData_ZW_TOW.push(jsonData[3][i+1].slice(7, 12)); // table 2
          tableData_ZW_TOW.push(jsonData[3][i+1].slice(13, 18)); // t 3
          tableData_ZW_TOW.push(jsonData[3][i+1].slice(19, 24)); // t 4
        }
      }

      console.log('Table Data ZeroWind LD:', tableData_ZW_LD);
      console.log('Table Data ZeroWind LW:', tableData_ZW_LW);
      console.log('Table Data ZeroWind TOD:', tableData_ZW_TOD);
      console.log('Table Data ZeroWind TOW:', tableData_ZW_TOW);



      setZeroWindData(jsonData);
      setShowPopup(false);
    }
  };
  

  const handleWindTypeSelection = (type) => {
    setWindType(type);
    setShowPopup(true);
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
    alert('SAVE BUTTON CLICKED');
  };

  const handleConvertClick = () => {
    console.log('Convert button clicked');
    alert('CONVERT BUTTON CLICKED');
  };

  const handleLogoutClick = () =>{
    console.log('Logout button clicked');
    alert('LOGOUT BUTTON CLICKED');
  };

  const handleViewData = () => {
    console.log('Tail Wind Data:', tailWindData);
    console.log('Head Wind Data:', headWindData);
    if (windType === 'wind' || windType === 'no-wind') {
      console.log('Zero Wind Data:', zeroWindData);
    }
  };

  const isUploadComplete =
    windType === 'wind' && tailWindData && headWindData && zeroWindData;
  const isNoWindUploadComplete = windType === 'no-wind' && zeroWindData;

  return (
    
    <div>
      {/* Render Tables and pass the variables as props */}
      <Tables
         showTitles={false}
         tableData_ZW_LD={tableData_ZW_LD}
         tableData_ZW_LW={tableData_ZW_LW}
         tableData_ZW_TOD={tableData_ZW_TOD}
         tableData_ZW_TOW={tableData_ZW_TOW}
         tableData_HW_LD={tableData_HW_LD}
         tableData_HW_LW={tableData_HW_LW}
         tableData_HW_TOD={tableData_HW_TOD}
         tableData_HW_TOW={tableData_HW_TOW}
         tableData_TW_LD={tableData_TW_LD}
         tableData_TW_LW={tableData_TW_LW}
         tableData_TW_TOD={tableData_TW_TOD}
         tableData_TW_TOW={tableData_TW_TOW}
        />
      <div className="buttons">
        <button
          className="green-button"
          onClick={() => handleWindTypeSelection('wind')}
          disabled={isUploadComplete || isNoWindUploadComplete}
        >
          Import (with wind)
        </button>
        <button
          className="green-button"
          onClick={() => handleWindTypeSelection('no-wind')}
          disabled={isUploadComplete || isNoWindUploadComplete}
        >
          Import (no wind)
        </button>
        <button className="green-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="green-button" onClick={handleConvertClick}>
          Convert
        </button>
        <button className="red-button" onClick={handleLogoutClick}>
          Logout
        </button>
        <button className="green-button" onClick={handleViewData}>
          View Data
        </button>
      </div>
      {showPopup && windType === 'wind' && !tailWindData && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          onFileUpload={handleFileUpload}
          fileTypes="Tail Wind"
        />
      )}
      {showPopup && windType === 'wind' && tailWindData && !headWindData && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          onFileUpload={handleFileUpload}
          fileTypes="Head Wind"
        />
      )}
      {showPopup && windType === 'wind' && headWindData && !zeroWindData && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          onFileUpload={handleFileUpload}
          fileTypes="Zero Wind"
        />
      )}
      {showPopup && windType === 'no-wind' && !zeroWindData && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          onFileUpload={handleFileUpload}
          fileTypes="Zero Wind"
        />
      )}
      {isUploadComplete && (
        <p>All three files have been uploaded.</p>
      )}
      {isNoWindUploadComplete && (
        <p>The Zero Wind file has been uploaded.</p>
      )}
    </div>
  );
}

export default Buttons;

///////////////////////////////////////////////////////////////////////////////
 /*  const handleFileUpload = (jsonData) => {
    if (windType === 'wind') {
      if (!tailWindData) {
        setTailWindData(jsonData);
        setShowPopup(true);
      } else if (!headWindData) {
        setHeadWindData(jsonData);
        setShowPopup(true);
      } else if (!zeroWindData) {
        setZeroWindData(jsonData);
        setShowPopup(false);
      }
    } else if (windType === 'no-wind') {
      setZeroWindData(jsonData);
      setShowPopup(false);
    }
  }; */

/////////////////////////////////////////////////////////////////////////////////
/*
        const tableData_TW_LD = [];
        

    const indices = [2, 11, 20, 29]; // Starting indices for each set of rows

    for (let index of indices) {
      for (let i = index; i <= index + 5; i++) {
      tableData_TW_LD.push(jsonData[0][i].slice(1, 6)); // headwind
      tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); // table 2
      tableData_TW_LD.push(jsonData[0][i].slice(13, 18)); // t 3
      tableData_TW_LD.push(jsonData[0][i].slice(19, 24)); // t 4
  }
}

        //where is landing dry specified?? the data below are for landing dry tail wind
        /*
        for (let i = 2; i <= 7; i++) {
          
          tableData_TW_LD.push(jsonData[0][i].slice(1, 6));// headwind row 1 column 1 table(N.:0 --> )
          tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); //table 2 data on row1
          tableData_TW_LD.push(jsonData[0][i].slice(13, 18));//t 3 r 1
          tableData_TW_LD.push(jsonData[0][i].slice(19, 24));//t 4 r 1
        }

        for (let i = 11; i <= 16; i++) {
          
          tableData_TW_LD.push(jsonData[0][i].slice(1, 6));// headwind row 2 column 1 table(N.:0 --> )
          tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); //table 2 data on row2
          tableData_TW_LD.push(jsonData[0][i].slice(13, 18));//t 3 r 2
          tableData_TW_LD.push(jsonData[0][i].slice(19, 24));//t 4 r 2
        }
        
        for (let i = 20; i <= 25; i++) {
          tableData_TW_LD.push(jsonData[0][i].slice(1, 6));// headwind row 3 column 1 table(N.:0 --> )
          tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); //table 2 data on row3
          tableData_TW_LD.push(jsonData[0][i].slice(13, 18));//t 3 r 3
          tableData_TW_LD.push(jsonData[0][i].slice(19, 24));//t 4 r 3


        }
        for (let i = 29; i <= 34; i++) {
          tableData_TW_LD.push(jsonData[0][i].slice(1, 6));// headwind row 4 column 1 table(N.:0 --> )
          tableData_TW_LD.push(jsonData[0][i].slice(7, 12)); //table 2 data on row4
          tableData_TW_LD.push(jsonData[0][i].slice(13, 18));//t 3 r 4
          tableData_TW_LD.push(jsonData[0][i].slice(19, 24));//t 4 r 4

        }*/





        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /* const tableData_TW_LW = [];
        //where is landing WET specified?? the data below are for landing WET tail wind
        for (let i = 2; i <= 7; i++) {
          
          tableData_TW_LW.push(jsonData[1][i].slice(1, 6));// headwind row 1 column 1 table(N.:0 --> )
          tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); //table 2 data on row1
          tableData_TW_LW.push(jsonData[1][i].slice(13, 18));//t 3 r 1
          tableData_TW_LW.push(jsonData[1][i].slice(19, 24));//t 4 r 1
        }

        for (let i = 11; i <= 16; i++) {
          
          tableData_TW_LW.push(jsonData[1][i].slice(1, 6));// headwind row 2 column 1 table(N.:0 --> )
          tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); //table 2 data on row2
          tableData_TW_LW.push(jsonData[1][i].slice(13, 18));//t 3 r 2
          tableData_TW_LW.push(jsonData[1][i].slice(19, 24));//t 4 r 2
        }
        
        for (let i = 20; i <= 25; i++) {
          tableData_TW_LW.push(jsonData[1][i].slice(1, 6));// headwind row 3 column 1 table(N.:0 --> )
          tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); //table 2 data on row3
          tableData_TW_LW.push(jsonData[1][i].slice(13, 18));//t 3 r 3
          tableData_TW_LW.push(jsonData[1][i].slice(19, 24));//t 4 r 3


        }
        for (let i = 29; i <= 34; i++) {
          tableData_TW_LW.push(jsonData[1][i].slice(1, 6));// headwind row 4 column 1 table(N.:0 --> )
          tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); //table 2 data on row4
          tableData_TW_LW.push(jsonData[1][i].slice(13, 18));//t 3 r 4
          tableData_TW_LW.push(jsonData[1][i].slice(19, 24));//t 4 r 4

        } */
        /* const tableData_TW_LW = [];

      const indices2 = [2, 11, 20, 29]; // Starting indices for each set of rows

      for (let index of indices2) {
        for (let i = index; i <= index + 5; i++) {
          tableData_TW_LW.push(jsonData[1][i].slice(1, 6)); // headwind
          tableData_TW_LW.push(jsonData[1][i].slice(7, 12)); // table 2
          tableData_TW_LW.push(jsonData[1][i].slice(13, 18)); // t 3
          tableData_TW_LW.push(jsonData[1][i].slice(19, 24)); // t 4
  }
} */


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /* const tableData_TW_TOD = [];
        //where is landing WET specified?? the data below are for landing WET tail wind
        for (let i = 2; i <= 7; i++) {
          
          tableData_TW_TOD.push(jsonData[2][i].slice(1, 6));// headwind row 1 column 1 table(N.:0 --> )
          tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); //table 2 data on row1
          tableData_TW_TOD.push(jsonData[2][i].slice(13, 18));//t 3 r 1
          tableData_TW_TOD.push(jsonData[2][i].slice(19, 24));//t 4 r 1
        }

        for (let i = 11; i <= 16; i++) {
          
          tableData_TW_TOD.push(jsonData[2][i].slice(1, 6));// headwind row 2 column 1 table(N.:0 --> )
          tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); //table 2 data on row2
          tableData_TW_TOD.push(jsonData[2][i].slice(13, 18));//t 3 r 2
          tableData_TW_TOD.push(jsonData[2][i].slice(19, 24));//t 4 r 2
        }
        
        for (let i = 20; i <= 25; i++) {
          tableData_TW_TOD.push(jsonData[2][i].slice(1, 6));// headwind row 3 column 1 table(N.:0 --> )
          tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); //table 2 data on row3
          tableData_TW_TOD.push(jsonData[2][i].slice(13, 18));//t 3 r 3
          tableData_TW_TOD.push(jsonData[2][i].slice(19, 24));//t 4 r 3


        }
        for (let i = 29; i <= 34; i++) {
          tableData_TW_TOD.push(jsonData[2][i].slice(1, 6));// headwind row 4 column 1 table(N.:0 --> )
          tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); //table 2 data on row4
          tableData_TW_TOD.push(jsonData[2][i].slice(13, 18));//t 3 r 4
          tableData_TW_TOD.push(jsonData[2][i].slice(19, 24));//t 4 r 4

        } */

        /* const tableData_TW_TOD = [];

        const indices3 = [2, 11, 20, 29]; // Starting indices for each set of rows

        for (let index of indices3) {
            for (let i = index; i <= index + 5; i++) {
              tableData_TW_TOD.push(jsonData[2][i].slice(1, 6)); // headwind
              tableData_TW_TOD.push(jsonData[2][i].slice(7, 12)); // table 2
              tableData_TW_TOD.push(jsonData[2][i].slice(13, 18)); // t 3
              tableData_TW_TOD.push(jsonData[2][i].slice(19, 24)); // t 4
  }
} */


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /* const tableData_TW_TOW = [];
        //where is landing WET specified?? the data below are for landing WET tail wind
        for (let i = 2; i <= 7; i++) {
          
          tableData_TW_TOW.push(jsonData[3][i].slice(1, 6));// headwind row 1 column 1 table(N.:0 --> )
          tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); //table 2 data on row1
          tableData_TW_TOW.push(jsonData[3][i].slice(13, 18));//t 3 r 1
          tableData_TW_TOW.push(jsonData[3][i].slice(19, 24));//t 4 r 1
        }

        for (let i = 11; i <= 16; i++) {
          
          tableData_TW_TOW.push(jsonData[3][i].slice(1, 6));// headwind row 2 column 1 table(N.:0 --> )
          tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); //table 2 data on row2
          tableData_TW_TOW.push(jsonData[3][i].slice(13, 18));//t 3 r 2
          tableData_TW_TOW.push(jsonData[3][i].slice(19, 24));//t 4 r 2
        }
        
        for (let i = 20; i <= 25; i++) {
          tableData_TW_TOW.push(jsonData[3][i].slice(1, 6));// headwind row 3 column 1 table(N.:0 --> )
          tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); //table 2 data on row3
          tableData_TW_TOW.push(jsonData[3][i].slice(13, 18));//t 3 r 3
          tableData_TW_TOW.push(jsonData[3][i].slice(19, 24));//t 4 r 3


        }
        for (let i = 29; i <= 34; i++) {
          tableData_TW_TOW.push(jsonData[3][i].slice(1, 6));// headwind row 4 column 1 table(N.:0 --> )
          tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); //table 2 data on row4
          tableData_TW_TOW.push(jsonData[3][i].slice(13, 18));//t 3 r 4
          tableData_TW_TOW.push(jsonData[3][i].slice(19, 24));//t 4 r 4

        } */

      /* const tableData_TW_TOW = [];

    const indices4 = [2, 11, 20, 29]; // Starting indices for each set of rows

    for (let index of indices4) {
      for (let i = index; i <= index + 5; i++) {
        tableData_TW_TOW.push(jsonData[3][i].slice(1, 6)); // headwind
        tableData_TW_TOW.push(jsonData[3][i].slice(7, 12)); // table 2
        tableData_TW_TOW.push(jsonData[3][i].slice(13, 18)); // t 3
        tableData_TW_TOW.push(jsonData[3][i].slice(19, 24)); // t 4
  }
} */
////////////////////////////////////////////////////////////////////////////////////////////////
/*
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Popup({ show, setShow, onFileUpload, maxFiles }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadError, setUploadError] = useState('');

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length === maxFiles) {
      setUploadError('');
      selectedFiles.forEach(async (file) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const data = new Uint8Array(fileReader.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          onFileUpload(jsonData); // Pass the uploaded data to the parent component
        };
        fileReader.readAsArrayBuffer(file);
      });
      setShow(false); // Close the pop-up
    } else {
      setUploadError(`Please upload ${maxFiles} files.`);
    }
  };

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <h2>File Upload</h2>
        <p>Choose {maxFiles} file(s) to upload:</p>
        <input type="file" multiple onChange={handleFileChange} />
        {uploadError && <p className="error">{uploadError}</p>}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

function Buttons() {
  const [showPopup, setShowPopup] = useState(false);
  const [windType, setWindType] = useState('');
  const [tailWindData, setTailWindData] = useState(null);
  const [headWindData, setHeadWindData] = useState(null);
  const [zeroWindData, setZeroWindData] = useState(null);
  const [importedData, setImportedData] = useState([]);

  const handleImportClick = () => {
    setShowPopup(true);
  };

  const handleFileUpload = (jsonData) => {
    if (windType === 'wind') {
      if (importedData.length === 0) {
        setTailWindData(jsonData);
        setImportedData([...importedData, 'tailWind']);
      } else if (importedData.length === 1) {
        setHeadWindData(jsonData);
        setImportedData([...importedData, 'headWind']);
      } else if (importedData.length === 2) {
        setZeroWindData(jsonData);
        setImportedData([...importedData, 'zeroWind']);
      }
    }
    setShowPopup(false);
  };

  const handleWindTypeSelection = (type) => {
    setWindType(type);
    setShowPopup(true);
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
    alert('SAVE BUTTON CLICKED');
  };

  const handleConvertClick = () => {
    console.log('Convert button clicked');
    alert('CONVERT BUTTON CLICKED');
  };

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
    alert('LOGOUT BUTTON CLICKED');
  };

 const isUploadComplete = importedData.length === 3;

  return (
    <div>
      <div className="buttons">
        <button
          className="green-button"
          onClick={() => handleWindTypeSelection('wind')}
          disabled={isUploadComplete}
        >
          Import (with wind)
        </button>
        <button
          className="green-button"
          onClick={() => handleWindTypeSelection('no-wind')}
          disabled={isUploadComplete}
        >
          Import (no wind)
        </button>
        <button className="green-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="green-button" onClick={handleConvertClick}>
          Convert
        </button>
        <button className="red-button" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
      {showPopup && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          onFileUpload={handleFileUpload}
          maxFiles={3}
        />
      )}
      {isUploadComplete && (
        <p>All three files have been uploaded.</p>
      )}
    </div>
  );
}

export default Buttons;


*/

/*
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Buttons() {
  const [importedData, setImportedData] = useState([]); // State to store imported data

  // Handle import button click
  const handleImportClick = async () => {
    console.log('Import button clicked');
    //alert('IMPORT BUTTON CLICKED');

    const fileNames = ['TAIL WIND', 'HEAD WIND', 'ZERO WIND']; // File names to import
    const data = []; // Array to store imported data

    // Prompt user to choose file for each file name
    for (const fileName of fileNames) {
      const file = await promptFile(`Please choose the ${fileName} file.`); // Prompt file selection
      if (file) {
        const extractedData = await extractFileContent(file); // Extract file content
        data.push(extractedData); // Add extracted data to array
      } else {
        alert(`No ${fileName} file selected. Import process terminated.`);
        return; // Exit the import process
      }
    }

    setImportedData(data); // Update state with imported data
  };

  // Prompt file selection
  const promptFile = (message) => {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';

      input.onchange = (event) => {
        const file = event.target.files[0];
        resolve(file);
      };

      input.click();
    });
  };

  // Extract file content
  const extractFileContent = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        resolve(jsonData);
      };

      reader.onerror = (e) => {
        reject(e);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');
    alert('SAVE BUTTON CLICKED');
  };

  const handleConvertClick = () => {
    console.log('Convert button clicked');
    alert('CONVERT BUTTON CLICKED');
  };

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
    alert('LOGOUT BUTTON CLICKED');
  };

  return (
    <div className="buttons">
      <button className="green-button" onClick={handleSaveClick}>
        Save
      </button>
      <button className="green-button" onClick={handleImportClick}>
        Import
      </button>
      <button className="green-button" onClick={handleConvertClick}>
        Convert
      </button>
      <button className="red-button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
}

export default Buttons;
*/