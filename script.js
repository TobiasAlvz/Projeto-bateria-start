function houseKeeper(age, name, clean) {
  this.age = age;
  this.name = name;
  this.clean = clean;
  this.fullClear = function () {
    alert("Tudo está limpo");
  };
}

let houseKeeper1 = new houseKeeper(12, "Isa", ["room", "door"], fullClear());
