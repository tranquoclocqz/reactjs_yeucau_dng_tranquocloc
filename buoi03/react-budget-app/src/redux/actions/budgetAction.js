import * as type from "../constants"

export function addBudget(value) {
  return {
    type: type.ADD_BUDGET,
    payload: value
  }
}

export function removeBudget(value) {
  return {
    type: type.REMOVE_BUDGET,
    payload: value
  }
}