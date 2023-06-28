$(() => {
  const options = {
    Cat: ["Siamese", "British Shorthair", "Maine Coon", "Persian", "Sphynx"],
    Dog: [
      "German Shepherd",
      "Bulldog",
      "Labrador",
      "Husky",
      "Poodle",
      "Chihuahua",
    ],
  };

  const firstDropdown = $("#type");
  const secondDropdown = $("#breed");

  if (!secondDropdown.val()) {
    if (firstDropdown.val() === "Dog") {
      options.Dog.forEach(function (breed) {
        secondDropdown.append(
          $("<option>", {
            value: breed,
            text: breed,
          })
        );
      });
    } else if (firstDropdown.val() === "Cat") {
      options.Cat.forEach(function (breed) {
        secondDropdown.append(
          $("<option>", {
            value: breed,
            text: breed,
          })
        );
      });
    }
  }

  firstDropdown.on("change", function () {
    secondDropdown.empty();

    if (firstDropdown.val() === "Dog") {
      options.Dog.forEach(function (breed) {
        secondDropdown.append(
          $("<option>", {
            value: breed,
            text: breed,
          })
        );
      });
    } else if (firstDropdown.val() === "Cat") {
      options.Cat.forEach(function (breed) {
        secondDropdown.append(
          $("<option>", {
            value: breed,
            text: breed,
          })
        );
      });
    }
  });
});
