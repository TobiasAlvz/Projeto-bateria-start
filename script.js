function houseKeeper(age, name, clean) {
  this.age = age;
  this.name = name;
  this.clean = clean;
  this.fullClear = function () {
    alert("Tudo está limpo");
  };
}

