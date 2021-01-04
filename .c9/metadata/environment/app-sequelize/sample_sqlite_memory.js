{"filter":false,"title":"sample_sqlite_memory.js","tooltip":"/app-sequelize/sample_sqlite_memory.js","ace":{"folds":[],"scrolltop":43.5,"scrollleft":0,"selection":{"start":{"row":14,"column":4},"end":{"row":14,"column":4},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"513574e2407ca529c97e852fff0ddda41eae634c","undoManager":{"mark":12,"position":12,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":5},"action":"insert","lines":["const {Sequelize, DataTypes} = require('sequelize');","const sequelize = new Sequelize('sqlite::memory:');","const User = sequelize.define('User', {","  firstName : {","    type: DataTypes.STRING,","    allowNull: false","  },","  lastName : {","    type: DataTypes.STRING","  }","}, {","});","(async()=>{","  await User.sync({ force: true});","  const user = await User.create({","    firstName : 'alice',","    lastName : 'husigi'","  });","  const rows = await sequelize.query('select * from Users');","  console.log(rows);","})();"],"id":1}],[{"start":{"row":17,"column":5},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":22,"column":0},"action":"insert","lines":["  const user = await User.create({","    firstName : 'alice',","    lastName : 'husigi'","  });",""],"id":3}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":[" "],"id":4}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":[" "],"id":5}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":8},"action":"remove","lines":["const "],"id":7}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":22},"action":"remove","lines":["alice"],"id":8}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["K"],"id":9},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["a"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["z"]}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":22},"action":"remove","lines":["husigi"],"id":10}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["T"],"id":11},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["A"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["K"]},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["A"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["H"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["A"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["S"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["H"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["I"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":7},"action":"remove","lines":["const"],"id":12}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["l"],"id":13},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["e"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["t"]}]]},"timestamp":1606259352559}