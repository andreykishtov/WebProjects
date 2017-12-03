function Promises(delay, whatToDO) {
  const wait = (time, cancel = Promise.reject()) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, time);
      const noop = () => {};

      cancel.then(() => {
        clearTimeout(timer);
        reject(new Error('Cancelled'));
      }, noop);
    });

  const shouldCancel = whatToDO ? Promise.resolve() : Promise.reject();

  wait(delay, shouldCancel)
    .then(() => console.log('good!'))
    .then(() => {
      console.log('great!');
      throw new Error('Very bad');
    })
    .then(() => console.log('enormous!'))
    .catch(e => console.log(`error: ${e.message}`))
    .then(() => console.log('back here!'))
    .catch(e => console.log(`horrible:${e.message}`))
    .then(() => console.log('I`m fine!'));
}

Promises(2000, true);
Promises(1000, false);
