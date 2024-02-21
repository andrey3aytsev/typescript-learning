const getUserInfo = (username: string, age: number): string => {
  return `${username} is ${age} years old`;
};

// getUserInfo('Andrey', 32);
// getUserInfo('Andrey');
// getUserInfo('Andrey', '32');

const getAnimalInfo = (name: string, isCat: boolean): string => {
  return isCat ? `${name} is cat` : `${name} is not a cat`;
};

// getAnimalInfo('Murzik', true);
// getAnimalInfo('Sharik');
// getAnimalInfo('Sharik', 'dog');

const getCatCounts = (names: string[]): number => {
  return names.length;
};

// getCatCounts(['Murzik', 'Vaska']);
// getCatCounts('Murzik');

const getCatCountsAny = (names: any): number => {
  return names.length;
};
 
