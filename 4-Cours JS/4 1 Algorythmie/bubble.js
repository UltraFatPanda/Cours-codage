function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // c'est une synthaxe js ou on lui montre les array qu'on veut intervertir
        console.log(array);
      }
    }
  }
  console.log(array);
}

// on pourrait aussi écrire ?:

function bubble(array) {
  console.log(array.sort((a, b) => a - b));
  // permet de tout ranger en ordre croissant, facilement. C'est pour ça que le tri à bulle ne se fait plus trop, car on a de meilleures méthodes maintenant
}

bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
