import { useState, useEffect } from 'react';

const FriendlyGrid = props => {
  const [cells, setCells] = useState([]);
  const [hover, setHover] = useState([]);
  const {
    selected,
    direction,
    removeShipOption,
    resetSelect,
    playerHit,
    friendlyShips,
    passFriendShip,
    playerMiss,
  } = props;

  useEffect(() => {
    let arr = [];
    let width = 10;
    for (let i = 0; i < width * width; i++) {
      setCells(arr);
      arr.push([i]);
    }
  }, []);

  const generateShip = (position, shipNum) => {
    let ships = [];
    ships.push(parseInt(position));
    if (direction === 'Horizontal') {
      for (let i = 0; i <= shipNum; i++) {
        ships.push(ships[ships.length - 1] + 1);
      }
    } else if (direction === 'Vertical') {
      for (let i = 0; i <= shipNum; i++) {
        ships.push(ships[ships.length - 1] + 10);
      }
    }
    return ships;
  };

  const handlePlacedShip = e => {
    const position = e.target.getAttribute('position');
    let arr = [];
    const horEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    const horEdge2 = [
      9,
      19,
      29,
      39,
      49,
      59,
      69,
      79,
      89,
      99,
      8,
      18,
      28,
      38,
      48,
      58,
      68,
      78,
      88,
      98,
    ];
    const horEdge3 = [
      9,
      19,
      29,
      39,
      49,
      59,
      69,
      79,
      89,
      99,
      8,
      18,
      28,
      38,
      48,
      58,
      68,
      78,
      88,
      98,
      7,
      17,
      27,
      37,
      47,
      57,
      67,
      77,
      87,
      97,
    ];
    const horEdge4 = [
      9,
      19,
      29,
      39,
      49,
      59,
      69,
      79,
      89,
      99,
      8,
      18,
      28,
      38,
      48,
      58,
      68,
      78,
      88,
      98,
      7,
      17,
      27,
      37,
      47,
      57,
      67,
      77,
      87,
      97,
      6,
      16,
      26,
      36,
      46,
      56,
      66,
      76,
      86,
      96,
    ];
    const vertEdge = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    const vertEdge2 = [
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
    ];
    const vertEdge3 = [
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
    ];
    const vertEdge4 = [
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
    ];

    if (direction === 'Horizontal') {
      if (
        selected === '0' &&
        horEdge.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 1) < 0
      ) {
        arr = generateShip(position, 0);
        removeShipOption(selected);
        resetSelect();
      } else if (selected === '1' || selected === '2') {
        if (
          horEdge2.indexOf(parseInt(position)) < 0 &&
          friendlyShips.indexOf(parseInt(position)) < 0 &&
          friendlyShips.indexOf(parseInt(position) + 1) < 0 &&
          friendlyShips.indexOf(parseInt(position) + 2) < 0
        ) {
          arr = generateShip(position, 1);
          removeShipOption(selected);
          resetSelect();
        }
      } else if (
        selected === '3' &&
        horEdge3.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 1) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 2) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 3) < 0
      ) {
        arr = generateShip(position, 2);
        removeShipOption(selected);
        resetSelect();
      } else if (
        selected === '4' &&
        horEdge4.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 1) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 2) &&
        friendlyShips.indexOf(parseInt(position) + 3) &&
        friendlyShips.indexOf(parseInt(position) + 4)
      ) {
        arr = generateShip(position, 3);
        removeShipOption(selected);
        resetSelect();
      }
    } else if (direction === 'Vertical') {
      if (
        selected === '0' &&
        vertEdge.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 10) < 0
      ) {
        arr = generateShip(position, 0);
        removeShipOption(selected);
        resetSelect();
      } else if (selected === '1' || selected === '2') {
        if (
          vertEdge2.indexOf(parseInt(position)) < 0 &&
          friendlyShips.indexOf(parseInt(position)) < 0 &&
          friendlyShips.indexOf(parseInt(position) + 10) < 0 &&
          friendlyShips.indexOf(parseInt(position) + 20) < 0
        ) {
          arr = generateShip(position, 1);
          removeShipOption(selected);
          resetSelect();
        }
      } else if (
        selected === '3' &&
        vertEdge3.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 10) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 20) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 30) < 0
      ) {
        arr = generateShip(position, 2);
        removeShipOption(selected);
        resetSelect();
      } else if (
        selected === '4' &&
        vertEdge4.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 10) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 20) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 30) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 40) < 0
      ) {
        arr = generateShip(position, 3);
        removeShipOption(selected);
        resetSelect();
      }
    }

    passFriendShip(arr.concat(friendlyShips));
  };

  const setShip = num => {
    for (let i = 0; i < friendlyShips.length; i++) {
      if (friendlyShips[i] === num) {
        return 'ship';
      }
    }
  };

  const handleHit = num => {
    for (let i = 0; i < playerHit.length; i++) {
      if (parseInt(playerHit[i]) === num && friendlyShips.indexOf(num) > -1) {
        return 'hit';
      }
    }
  };

  const handleMiss = num => {
    for (let i = 0; i < playerMiss.length; i++) {
      if (parseInt(playerMiss[i]) === num && playerMiss.indexOf(num) > -1) {
        return 'miss';
      }
    }
  };

  // Make hover ship red for not allowed spaces
  const toggleHover = e => {
    const target = e.target.getAttribute('position');
    const arr = [];
    if (direction === 'Horizontal') {
      if (selected === '0') {
        arr.push(parseInt(target));
        for (let i = 0; i < 1; i++) {
          arr.push(arr[arr.length - 1] + 1);
        }
        setHover(arr);
      } else if (selected === '1') {
        arr.push(parseInt(target));
        for (let i = 0; i < 2; i++) {
          arr.push(arr[arr.length - 1] + 1);
        }
        setHover(arr);
      } else if (selected === '2') {
        arr.push(parseInt(target));
        for (let i = 0; i < 2; i++) {
          arr.push(arr[arr.length - 1] + 1);
        }
        setHover(arr);
      } else if (selected === '3') {
        arr.push(parseInt(target));
        for (let i = 0; i < 3; i++) {
          arr.push(arr[arr.length - 1] + 1);
        }
        setHover(arr);
      } else if (selected === '4') {
        arr.push(parseInt(target));
        for (let i = 0; i < 4; i++) {
          arr.push(arr[arr.length - 1] + 1);
        }
        setHover(arr);
      }
    } else if (direction === 'Vertical') {
      if (selected === '0') {
        arr.push(parseInt(target));
        for (let i = 0; i < 1; i++) {
          arr.push(arr[arr.length - 1] + 10);
        }
        setHover(arr);
      } else if (selected === '1') {
        arr.push(parseInt(target));
        for (let i = 0; i < 2; i++) {
          arr.push(arr[arr.length - 1] + 10);
        }
        setHover(arr);
      } else if (selected === '2') {
        arr.push(parseInt(target));
        for (let i = 0; i < 2; i++) {
          arr.push(arr[arr.length - 1] + 10);
        }
        setHover(arr);
      } else if (selected === '3') {
        arr.push(parseInt(target));
        for (let i = 0; i < 3; i++) {
          arr.push(arr[arr.length - 1] + 10);
        }
        setHover(arr);
      } else if (selected === '4') {
        arr.push(parseInt(target));
        for (let i = 0; i < 4; i++) {
          arr.push(arr[arr.length - 1] + 10);
        }
        setHover(arr);
      }
    }
  };

  const removeHover = () => {
    setHover([]);
  };

  const handleHover = num => {
    for (let i = 0; i < hover.length; i++) {
      if (hover[i] === num) {
        return 'ship-hover';
      }
    }
  };

  return (
    <div className='friendly-grid-container'>
      <h2>You</h2>
      <div className='friendly-grid'>
        {cells.map((value, index) => {
          return (
            <div
              className={`friendly-cell ${setShip(value[0])} ${handleHit(
                value[0]
              )} ${handleMiss(value[0])} ${handleHover(value[0])}`}
              key={index}
              onClick={handlePlacedShip}
              position={value[0]}
              onMouseEnter={toggleHover}
              onMouseLeave={removeHover}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendlyGrid;
