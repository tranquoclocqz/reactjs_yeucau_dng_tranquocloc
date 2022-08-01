import * as types from "../constants"
import {
  v4 as uuidv4
} from 'uuid';
const initState = JSON.parse(localStorage.getItem("budget")) || {
  listDataIncome: [{
      id: uuidv4(),
      description: 'Chi tieu ngay 26/07',
      amount: -100000
    },
    {
      id: uuidv4(),
      description: 'Thu nhap thang 06',
      amount: 3000000
    },
    {
      id: uuidv4(),
      description: 'Thu nhap thang 07',
      amount: 2000000
    },
    {
      id: uuidv4(),
      description: 'Chi tieu ngay 27/07',
      amount: -150000
    }
  ]
};
export default function budgetReducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_BUDGET:
      const newState = {
        ...state,
        listDataIncome: [
          ...state.listDataIncome, action.payload
        ]
      }
      localStorage.setItem("budget", JSON.stringify(newState));
      return newState;
    case types.REMOVE_BUDGET:
      const listBudget = state.listDataIncome.filter(e => e.id !== action.payload);
      const newStateB = {
        ...state,
        listDataIncome: listBudget
      };
      localStorage.setItem("budget", JSON.stringify(newStateB));
      return newStateB;
    default:
      return state;
  }
}