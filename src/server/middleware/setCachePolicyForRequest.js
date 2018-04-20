const setCachePolicyForRequest = (req, res, next) => {
  if (req.session && (req.session.contactId || req.session.jwt)) {
    req.useCacheForRequest = false
  } else {
    req.useCacheForRequest = true
  }

  next()
}

export default setCachePolicyForRequest
