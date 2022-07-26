export const phoneNumberRegexp =
  /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{3,5}$/;

export const isPhoneNumber = (phone) =>
  phoneNumberRegexp.test(phone);
