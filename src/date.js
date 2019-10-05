var d = new Date();
var today = d.toISOString().substring(0, 10);
var pre = d.setDate(d.getDate() - 1);
var yesterday = new Date(pre).toISOString().substring(0, 10)

export { today as end_date, yesterday as start_date };