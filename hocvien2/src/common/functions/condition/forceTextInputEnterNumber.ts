
/**
 * @Note place this function into onKeyPress Input, which you want to force it enter only number
 * */
export const forceTextInputEnterNumber = (
  event,
) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
