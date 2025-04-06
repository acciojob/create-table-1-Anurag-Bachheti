function insert_Row() {
  let table = document.getElementById("sampleTable");

  // Insert a new row at index 0
  let newRow = table.insertRow(0); // Insert at the top (index 0)

  // Create and insert the first cell
  let cell1 = newRow.insertCell(0);
  cell1.textContent = "New Cell1";

  // Create and insert the second cell
  let cell2 = newRow.insertCell(1);
  cell2.textContent = "New Cell2";
}
