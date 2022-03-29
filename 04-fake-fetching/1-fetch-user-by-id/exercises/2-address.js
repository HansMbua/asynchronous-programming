import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const getAddress = (user) => {
  return (`${user.id}: ${user.name} , ${user.username} `)
};

const handleError = (err) => error(err);
const logValue = (value) => log(value);

// --- use the callbacks ---

log('fetching and processing user 9');
// "9: Dayna Park, Bartholomebury 76495-3109"
fetchUserById(9)
.then((value) => handleResponse(value))
.then((value) => getAddress(value))
.then((value) => logValue(value))
.catch((err) => handleError(err));

log('fetching and processing user 8');
// "8: Ellsworth Summit, Aliyaview 45169"
fetchUserById(8)
.then((value) => handleResponse(value))
.then((value) => getAddress(value))
.then((value) => logValue(value))
.catch((err) => handleError(err));

log('fetching and processing user 2');
// "2: Victor Plains, Wisokyburgh 90566-7771"
fetchUserById(2)
.then((value) => handleResponse(value))
.then((value) => getAddress(value))
.then((value) => logValue(value))
.catch((err) => handleError(err));

log('fetching and processing user 0');
// 404
fetchUserById(12)
.then((value) => handleResponse(value))
.then((value) => getAddress(value))
.then((value) => logValue(value))
.catch((err) => handleError(err));

log('= = = =  the call stack is empty  = = = =');
