module.exports = {
  userId: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  totalDesejado: {
      presence: {
          allowEmpty: false,
      },
      type: 'number',
  },
  data: {
    presence: {
        allowEmpty: false,
    },
    type: 'string',
},
};