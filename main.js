//TODO add imports if needed
//TODO doc
/**
 * Generuje seznam náhodných zaměstnanců podle počtu a věkového intervalu.
 * @param {object} dtoIn obsahuje count (počet zaměstnanců) a age objekt {min, max}
 * @returns {Array} dtoOut pole zaměstnanců se strukturou { gender, birthdate, name, surname, workload }
 */
export function main(dtoIn) {
  // 1. Inicializace vstupů
  const count = dtoIn.count;
  const minAge = dtoIn.age.min;
  const maxAge = dtoIn.age.max;

  const employees = [];
  const today = new Date();

  // prettier-ignore
  const maleNames = ["Jan","Petr","Tomáš","Lukáš","Jakub","Adam","Matěj","Michal","Filip","David"];
  // prettier-ignore
  const femaleNames = ["Anna","Eliška","Adéla","Tereza","Karolína","Lucie","Kristýna","Marie","Veronika","Kateřina"];
  // prettier-ignore
  const maleSurnames = ["Vomáčka","Svoboda","Dvořák","Černý","Procházka","Kučera","Horák","Beneš","Fiala","Sedláček"];
  // prettier-ignore
  const femaleSurnames = ["Nováková","Svobodová","Dvořáková","Černá","Procházková","Kučerová","Horáková","Benešová","Fialová","Sedláčková"];

  const workloads = [10, 20, 30, 40];

  // 2. Validace vstupu
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error("Počet zaměstnanců musí být kladné celé číslo.");
  }
  if (minAge < 0 || maxAge < minAge) {
    throw new Error("Zadaný věkový interval není platný.");
  }

  // 3. Generování zaměstnanců
  for (let i = 0; i < count; i++) {
    // gender
    const genders = ["male", "female"];
    const gender = genders[Math.floor(Math.random() * genders.length)];

    // name
    const name =
      gender === "male"
        ? maleNames[Math.floor(Math.random() * maleNames.length)]
        : femaleNames[Math.floor(Math.random() * femaleNames.length)];

    // surname
    const surname =
      gender === "male"
        ? maleSurnames[Math.floor(Math.random() * maleSurnames.length)]
        : femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];

    // workload
    const workload = workloads[Math.floor(Math.random() * workloads.length)];

    // age
    const age = Math.random() * (maxAge - minAge) + minAge;

    // birthdate – ISO
    const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;
    const birthTimestamp = today.getTime() - age * MS_IN_YEAR;
    const birthdate = new Date(birthTimestamp).toISOString();

    // vytvoření objektu zaměstnance
    const employee = {
      gender,
      birthdate,
      name,
      surname,
      workload,
    };

    employees.push(employee);
  }

  // 4. Výstup
  const dtoOut = employees;
  return dtoOut;
}
