import Request from '@vfuk/dalmatian/request'

const get = basketId => {
  return new Promise((resolve, reject) => {
    new Request(`/api/digital/v1/basket/basket/${basketId}`)
      .get()
      .then(resolve)
      .catch(reject)
  })
}

const create = () => {

}

const update = () => {

}

const empty = basketId => {
  return new Promise((resolve, reject) => {
    new Request(`/api/digital/v1/basket/basket/${basketId}/empty`)
      .post()
      .then(() => get(basketId))
      .then(resolve)
      .catch(reject)
  })
}

export default {
  get,
  create,
  update,
  empty
}
