export const handleCreateID = (): string => {
  const letters: string[] = [..."ASDFGHJKLMNBVCXZQWERTYUIOP"];
  const numbers: string[] = [..."123456789"];

  const chars: string[] = [];

  for (let i = 0; i < 2; i++) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    chars.push(letter);
  }

  for (let i = 0; i < 4; i++) {
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    chars.push(number);
  }

  const id = [...chars].join("");

  return id;
};

export const onlyDigits = (value: string): string => value.replace(/\D/g, "");

export const onlyPrice = (value: string): string =>
  value.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1");
