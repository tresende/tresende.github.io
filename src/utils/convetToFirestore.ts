/* eslint-disable */
const convetToFirestore = (object: any) => {
  const keys = Object.keys(object).map((item) => ({
    [item]: {
      stringValue: object[item]
    }
  }))

  let data = {}
  keys.forEach((prop) => {
    data = { ...prop, ...data }
  })
  return data
}

export default convetToFirestore
