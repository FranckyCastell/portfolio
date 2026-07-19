const dom = Object.getOwnPropertyDescriptor(Document.prototype, 'startViewTransition');
console.log(dom ? "exists" : "not exists");
