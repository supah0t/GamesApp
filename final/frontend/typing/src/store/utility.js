export const updateObject = (oldObject, udpatedProperties) => {
  return {
    ...oldObject,
    ...udpatedProperties
  }
}