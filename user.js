var user = {
  name: 'Paul Jones',
  location: 'Provo, UT',
  occupations: ['student', 'codejockey', 'dogwrangler', 'photographer'],
  hobbies: [
    {
      name: 'flyfishing',
      type: 'sport'
    },
    {
      name: 'photography',
      type: 'art'
    },
    {
      name: 'backpacking',
      type: 'sport'
    }
  ],
  family: [
    {
      name: 'Becca Jones',
      relation: 'spouse',
      gender: 'female'
    },
    {
      name: 'Jackson Jones',
      relation: 'son',
      gender: 'male'
    },{
      name: 'Owen Jones',
      relation: 'son',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: "Rosa's",
      type: 'mexican',
      rating: '10'
    },
    {
      name: "Thai Plates",
      type: 'thai',
      rating: '10'
    },
    {
      name: "Ginger Zing",
      type: 'chinese',
      rating: '10'
    }
  ]
};

module.exports = user;

