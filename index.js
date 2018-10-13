// Code your solution in this file!
const callback = function (el, i, arr) {
  console.log(el.name);
};

const revenueSorter = function (rev1, rev2) {
  return rev1.revenue - rev2.revenue;
};

const nameSorter = function (d1, d2) {
  return d1.name.localeCompare(d2.name);
}

function logDriverNames(drivers) {
  return drivers.forEach(callback);
}

function logDriversByHometown(drivers, town) {
  const newDrivers = drivers.filter(driver => driver.hometown === town);
  return logDriverNames(newDrivers);
}

function driversByRevenue(drivers) {
  let copyOfDrivers = [...drivers];
  return copyOfDrivers.sort(revenueSorter);
}

function driversByName(drivers) {
  let copyOfDrivers = [...drivers];
  return copyOfDrivers.sort(nameSorter);
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/ drivers.length;
}
