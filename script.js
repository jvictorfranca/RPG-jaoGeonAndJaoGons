// Funções de utilidades. Aqui ficarão as funções utilizadas como suporte para outras funções.

//getRandomBetween: Retorna um valor entre um número mínimo e um máximo.
const getRandomBetween = (min, max) => {
  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  return answer;
};

//Classes: Aqui ficarão as classes definidas para o jogo.
const classes = {
  mage: {
    class: 'mage',
    agility: 20,
    inteligence: 60,
    strength: 10,
    maxHp: 150,
    hp: 150,
    maxMp: 300,
    mp: 300,
    armor: 15,
    critChance: 0.2,
    type: 'magic',
    armor: 'light',
    equips: ['robe', 'lether-boots', 'scepter'],
    skillsList: ['thunderbolt', 'firewall', 'freeze', 'blackfire', 'smallheal'],
    style: {
      icon: 'Images / CharacterIcons / Mage.png',
      color: 'rgb(43, 80, 172)',
    },
  },
  warrior: {
    class: 'warrior',
    agility: 20,
    inteligence: 10,
    strength: 50,
    maxHp: 300,
    hp: 300,
    maxMp: 100,
    mp: 100,
    armor: 30,
    critChance: 0.25,
    type: 'berserker',
    armor: 'heavy',
    equips: ['fullplate', 'twin-swords', 'helmet'],
    skillsList: [
      'slash',
      'armorbreak',
      'shielded',
      'ultraslash',
      'warriorrage',
      'magicsword',
    ],
    style: {
      icon: 'Images / CharacterIcons / Warrior.png',
      color: 'rgb(85, 44, 44)',
    },
  },
};

//Skils: Aqui ficarão as skills dos personagens.
const skills = {
  thunderbolt: {
    name: 'Thunder bolt',
    skill: getThunderbolt(),
    minDamage: 40,
    maxDamage: function () {
      return this.inteligence;
    },
    manaCost: 30,
    quantity: 5,
    type: 'Damage',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/thunderbolt.png',
      animation: 'Images/skill-animations/thunderbolt.gif',
    },
  },
  firewall: {
    name: 'Fire wall',
    // skill: getFireball(),
    minDamage: 60,
    maxDamage: '1,5 * this.inteligence',
    manaCost: 25,
    quantity: 4,
    type: 'Damage',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/fire.png',
      animation: 'Images/skill-animations/firewall.gif',
    },
  },
  freeze: {
    name: 'Freeze',
    // skill: getFreeze(),
    minDamage: 10,
    maxDamage: 30,
    manaCost: 30,
    quantity: 3,
    type: 'Debuff',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/ice.png',
      animation: 'Images/skill-animations/freeze.gif',
    },
  },
  blackfire: {
    name: 'Black fire',
    // skill: getBlackfire(),
    minDamage: 300,
    maxDamage: '10 * this.inteligence',
    manaCost: 40,
    quantity: 1,
    type: 'S+ damage',
    turns: 2,
    style: {
      icon: 'Images/skills-icons/dark-fire.png',
      animation: 'Images/skill-animations/black-fire.gif',
    },
  },
  smallheal: {
    name: 'Small heal',
    // skill: getSmallHeal(),
    minDamage: 0,
    maxDamage: 0,
    manaCost: 30,
    quantity: 3,
    type: 'Healing',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/smallheal.png',
      animation: 'Images/skill-animations/small-heal.gif',
    },
  },
  slash: {
    name: 'Slash',
    // skill: getSlash(),
    minDamage: 10,
    maxDamage: 2,
    manaCost: 0,
    quantity: 7,
    type: 'Damage',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/slash.png',
      animation: 'Images/skill-animations/slash.gif',
    },
  },
  armorbreak: {
    name: 'Armor break',
    // skill: getArmorbreak(),
    minDamage: 0,
    maxDamage: 20,
    manaCost: 5,
    quantity: 3,
    type: 'Debuff',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/shield-break.png',
      animation: 'Images/skill-animations/armor-break.gif',
    },
  },
  shielded: {
    name: 'Shielded',
    // skill: getShielded(),
    minDamage: 0,
    maxDamage: 0,
    manaCost: 20,
    quantity: 3,
    type: 'Self buff',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/shielded.png',
      animation: 'Images/skill-animations/shielded.gif',
    },
  },
  ultraslash: {
    name: 'Ultra slash',
    // skill: getUltraslash(),
    minDamage: 200,
    maxDamage: '7 * this.strength',
    manaCost: 20,
    quantity: 1,
    type: 'S+ damage',
    turns: 2,
    style: {
      icon: 'Images/skills-icons/super-slash.png',
      animation: 'Images/skill-animations/ultra-slash.gif',
    },
  },
  warriorrage: {
    name: 'Warrior rage',
    // skill: getWarriorrage(),
    minDamage: 0,
    maxDamage: 0,
    manaCost: 10,
    quantity: 2,
    type: 'Conditional buff',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/rage.png',
      animation: 'Images/skill-animations/warrior-rage.gif',
    },
  },
  magicsword: {
    name: 'Magic sword',
    // skill: getMagicsword(),
    minDamage: 100,
    maxDamage: '100 + 10 * this.inteligence',
    manaCost: 30,
    quantity: 2,
    type: 'Inteligence damage',
    turns: 1,
    style: {
      icon: 'Images/skills-icons/magicsword.png',
      animation: 'Images/skill-animations/magic-sword.gif',
    },
  },
};

//Funções de Magia: Aqui ficam as funções para a realização de cada magia. Vale lembrar que cada função retorna a função da própria magia, então para acessa-la deve-se utilizar skills.magia.skill
//Lembrar de tirar os coments das skills e arrumar o getthunderBolt

function getThunderbolt() {
  return function thunderbolt() {
    console.log(skills.thunderbolt.maxDamage.bind(this)());
    console.log(this);
  };
}

//Monsters: Aqui ficarão os monstros inimigos:

const monsters = {
  dragon: {
    class: 'dragon',
    agility: 50,
    inteligence: 30,
    strength: 60,
    maxHp: 1500,
    hp: 1500,
    maxMp: Infinity,
    mp: Infinity,
    armor: 20,
    critChance: 0.1,
    type: 'fire',
    armor: 'dragonskin',
    equips: [],
    skillsList: [
      'fireclaws',
      'winghurricane',
      'dragonstrongfirebreath',
      'dragonfirebite',
      'firewall',
    ],
    style: {
      icon: 'Images / CharacterIcons / Images/CharacterIcons/Dragon.png',
      color: 'rgb(100, 66, 104)',
    },
  },
};

//Funções de início de jogo: Aqui ficam as funções para utilizar na criação de um novo game
//choseClass: Define qual classe os players 1 e 2 será, entre mage e warrior.
const chooseClass = (className) => {
  return Object.assign({}, classes[className]);
};

//chooseEnemy: Define qual monstro será o inimigo. Apenas dragon
const chooseEnemy = (monster) => {
  return Object.assign({}, monsters[monster]);
};

//Funções de jogo: Aqui ficaram as funções para utilizar no game.
//getCards: Pega as cartas do deck de um player
function getCards(player) {
  let cards = [];
  player.skillsList.forEach((skill) => {
    for (let index = 0; index < skills[skill].quantity; index += 1) {
      cards.push(skill);
    }
  });
  return cards;
}

//Inicio de jogo: Aqui é onde o jogo é iniciado e personagens são criados.

const player1 = chooseClass('warrior');
const player2 = chooseClass('mage');
const enemy = chooseEnemy('dragon');
