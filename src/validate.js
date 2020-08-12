class Validator {
  static add (name, fn) {
    Validator.prototype[name] = fn
  }
  constructor () {}

  validate (data, rules) {
    console.log(data, rules)
  }

  required (value) {
    if (value !== 0 && !value) {
      return '必填'
    }
  }

  pattern (value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }

  minLength (value, minLength) {
    if (value.length < minLength) {
      return '太短'
    }
  }

  maxLength (value, maxLength) {
    if (value.length > maxLength) {
      return '太长'
    }
  }
}


function ensureObject (obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}

export default Validator