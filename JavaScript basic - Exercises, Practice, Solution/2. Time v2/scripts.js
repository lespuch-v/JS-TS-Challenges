function timeFunk() {
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  console.log(`${day}/${month}/${year}`);
}
timeFunk();
