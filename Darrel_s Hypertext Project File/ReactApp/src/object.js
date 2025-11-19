class Weapons {
  constructor(name, damage, range = 1, defense = 0) {
    this.name = name;
    this.damage = damage;
    this.range = range;
    this.defense = defense;
  }
}

class Character {
  constructor({ name, role = "Neutral", health = 100, strengths = [], weaknesses = [], weapon = null, arsenal = [] }) {
    this.role = role;
    this.name = name;
    this.health = health;
    this.strengths = strengths;
    this.weaknesses = weaknesses;
    this.weapon = weapon;
    this.arsenal = arsenal;
  }

  speak() {
    return `${this.name} — Health: ${this.health} | Strengths: ${this.strengths.join(", ")} | Weaknesses: ${this.weaknesses.join(", ")} | Weapon: ${this.weapon?.name ?? "Unarmed"} (Dmg ${this.weapon?.damage ?? 0}, Def ${this.weapon?.defense ?? 0})`;
  }
}

class Traveler extends Character {
  constructor(props) {
    super({ ...props, role: "Traveler" });
  }
}

class Doppelganger extends Character {
  constructor(props) {
    super({ ...props, role: "Doppelganger" });
  }
}

export { Traveler, Doppelganger, Weapons };
