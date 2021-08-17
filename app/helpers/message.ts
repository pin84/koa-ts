

class Message {

  success(data) {
    return {
      code: 0,
      data
    }
  }

  fail(data, code = -1) {
    return {
      code,
      data
    }
  }

}

export default new Message()


