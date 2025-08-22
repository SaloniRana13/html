const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log("Reset");
  }

  return {
    increment,
    reset,
  };
})();

CounterModule.increment(); // 1
CounterModule.increment(); // 2
CounterModule.reset();     // Reset


class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const news = new Subject();

const emailSubscriber = (data) => console.log("Email received:", data);
const smsSubscriber = (data) => console.log("SMS received:", data);

news.subscribe(emailSubscriber);
news.subscribe(smsSubscriber);

news.notify("New article published!"); // Both receive the notification

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const logInput = debounce((text) => console.log("Typing:", text), 500);

document.querySelector("#search").addEventListener("input", (e) => {
  logInput(e.target.value);
});


const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
