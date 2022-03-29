import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* inline callbacks

  you can also write your callbacks inside .then()

*/

// --- fetch users ---

log('fetching user 1');
fetchUserById(1)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
    return res.json();
  })
  .then((user) => log(user))
  .catch((err) => error(err));

log('fetching user 5');
fetchUserById(5)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
    return res.json();
  })
  .then((user) => log(user))
  .catch((err) => error(err));

log('fetching user 10');
fetchUserById(10)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
    return res.json();
  })
  .then((user) => log(user))
  .catch((err) => error(err));

  log('fetching User 15')
  fetchUserById(15)
  .then((res) => {
    if(!res.ok){
      throw new Error(`${res.status}: ${res.statusText}` );
    }
     return res.json;
  }
 
    )
    .then((value) => log(value))
    .catch((err) => error(err));

log('= = = =  the call stack is empty  = = = =');
