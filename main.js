// Your code here.
function getFirstName(m){
return m.firstName;
}
function getLastName(m){
return m.lastName;
}
function getFullName(m){
return `${m.firstName} ${m.lastName}`;
}
function setFirstName(m, mm){
m.firstName = mm;
return mm;
}
function setAge(m, mm){
  m.age = mm;
return m;
}
function giveBirthday(m){
  if(m.age === undefined){
    m.age = 1;
  } else { m.age ++;}
  return m;
}
function marry(m,mm){
if(m.married === false){
  m.married = true
  m.spouseName = `${mm.firstName} ${mm.lastName}`
}
if(mm.married === false){
  mm.married = true
  mm.spouseName = `${m.firstName} ${m.lastName}`
}
return m || mm;
}

function divorce(m,mm){
  if(m.married === true){
    m.married = false
    m.spouseName = `${mm.firstName} ${mm.lastName}`
    delete m.spouseName
  }
  if(mm.married === true){
    mm.married = false
    mm.spouseName = `${m.firstName} ${m.lastName}`
    delete mm.spouseName
  }
  return m || mm;
  }
  





















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
