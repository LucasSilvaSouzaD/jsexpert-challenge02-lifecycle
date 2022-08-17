class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const { age } = rawObject;

    const result = {
      ...rawObject,
      valueOf() {
        return age
      }
    }
    return result
  }

  getEnhancedObject2(rawObject) {
    const { name, age } = rawObject;

    const result = {
      ...rawObject,
      toString() {
        return `[name="${name}",age=${age}]`
      }
    }
    return result;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const { name, age } = rawObject;
    
    const result = {
      ...rawObject,
      toString() {
        return `[name="${name}",age=${age}]`
      },
      valueOf() {
        return age
      }
    }
    return result;
  }
}

module.exports = ObjectMethodsService;
