export const isBloodType = (input: string | string[]): input is BloodType => {
  const validBloodTypes: BloodType[] = Object.keys(BloodTypes).map((bloodType) => bloodType as BloodType);

  if (typeof input === "string") {
    return validBloodTypes.includes(input as BloodType);
  }

  return input.every((bloodType) => validBloodTypes.includes(bloodType as BloodType));
};