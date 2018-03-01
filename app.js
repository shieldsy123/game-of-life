$(document).ready(function () {
  const maxRows = 20
  const maxCols = 20

  // GRID DATA STORAGE
  let activeCells = {}

  // SET INITIAL UI STATE
  $('#stop-tick-btn').attr('disabled', true)

  $('#dump-config-btn').click(dumpConfigBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startTickBtnClick)
  $('#stop-tick-btn').click(stopTickBtnClick)

  // DRAW INITIAL GRID
  displayUIGrid()

  // UI GRID FUNCTIONS
  function displayUIGrid() {
    for (let i = 0; i < maxRows; i++) {
      const row = $('<tr>')
      for (let j = 0; j < maxCols; j++) {
        const cell = $('<td>')
        const rowColString = `${i},${j}`
        cell.attr('data-row-col', rowColString)
        cell.click(uiGridCellClick)
        row.append(cell)
      }
      $('#ui-grid').append(row)
    }
  }

  // CELL EVENT HANDLERS
  function uiGridCellClick(event) {
    event.preventDefault()
    const rowColString = $(this).attr('data-row-col')
    $(this).toggleClass('on')

    if ($(this).hasClass('on')) {
      activeCells[rowColString] = true
    } else {
      delete activeCells[rowColString]
    }
    console.log('uiGridCellClick() ${rowColString}');
  }



  // BUTTON EVENT HANDLERS
  function stopTickBtnClick(event) {
    event.preventDefault()

    $('#dump-config-btn').removeAttr('disabled')
    $('#clear-btn').removeAttr('disabled')
    $('#one-tick-btn').removeAttr('disabled')
    $('#start-tick-btn').removeAttr('disabled')

    $('#stop-tick-btn').attr('disabled', true)
  }

  function oneTickBtnClick(event) {
    event.preventDefault()
  }

  function startTickBtnClick(event) {
    event.preventDefault()

    $('#dump-config-btn').attr('disabled', true)
    $('#clear-btn').attr('disabled', true)
    $('#one-tick-btn').attr('disabled', true)
    $('#start-tick-btn').attr('disabled', true)

    $('#stop-tick-btn').removeAttr('disabled')
  }

  function clearBtnClick(event) {
    event.preventDefault()
    $('td').removeClass('on')
    activeCells = {}
    console.log('clearBtnClick()');
  }

  function dumpConfigBtnClick(event) {
    event.preventDefault()
    console.log(activeCells);
    console.log('dumpConfigBtnClick()')
  }

// XXX: Debugger Tools
// console.log() text
// unexpected token, line number
// element inspector
// debugger keyword
// variable navigation
// timeouts interval
// console.log() array or object
})
