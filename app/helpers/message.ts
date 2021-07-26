

class Message {

  success(data) {
    return {
      code: 0,
      data
    }
  }

  fail(message, code = -1) {
    return {
      code,
      message
    }
  }

}

export default new Message()


