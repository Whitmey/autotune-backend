exports.parse = function(input) {

  let output = { basals: [] };

  let lines = input.split("\n");

  let sensitivityFactors = lines[2].split("|");
  let carbRatios = lines[3].split("|");

  output.sensitivityFactors = {
    pump: sensitivityFactors[1].trim(),
    autotune: sensitivityFactors[2].trim()
  };
  output.carbRatios = {
    pump: carbRatios[1].trim(),
    autotune: carbRatios[2].trim()
  };

  let basals = lines.slice(5, 53);

  basals.forEach(function(basal) {
    let sections = basal.split("|");
    output.basals.push({
      time: sections[0].trim(),
      pump: sections[1].trim(),
      autotune: sections[2].trim()
    });
  });

  return output;

}
