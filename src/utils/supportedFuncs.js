export default {
  generateId: () => {
    /*jshint bitwise:false */
    var i, random;
    var generatedId = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        generatedId += '-';
      }
      generatedId += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return generatedId;
  },

  validateEmail: (email) => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  },

  validatePhone: (phoneNumber) => {
    var stripped = phoneNumber.replace(/[\(\)\.\-\ ]/g, '');
    return !isNaN(stripped) || !phoneNumber;
  }
}
