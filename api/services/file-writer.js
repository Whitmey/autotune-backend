const fs = require('fs');

function generateCurrentSettingsFiles(input) {

  let profile = {
    "min_5m_carbimpact": 3,
    "dia": input.dia,
    "basalprofile": input.basalProfiles,
    "isfProfile": {
      "sensitivities": [
        {
            "i": 0,
            "start": "00:00:00",
            "sensitivity": input.isf, //converted to mg/dl
            "offset": 0,
            "x": 0,
            "endOffset": 1440
        }
      ]
    },
    "carb_ratio": input.carbRatio,
    "autosens_max": 1.2,
    "autosens_min": 0.7
  }

  fs.writeFileSync(`${__basedir}/myopenaps/settings/profile.json`, JSON.stringify(profile, null, 2) , 'utf-8');
  fs.writeFileSync(`${__basedir}/myopenaps/settings/autotune.json`, JSON.stringify(profile, null, 2) , 'utf-8');
  fs.writeFileSync(`${__basedir}/myopenaps/settings/pumpprofile.json`, JSON.stringify(profile, null, 2) , 'utf-8');

}

module.exports.generateCurrentSettingsFiles = generateCurrentSettingsFiles;


// const fs = require('fs');
//
// exports.generateCurrentSettingsFiles = function(input) {
//
//   let profile = {
//     "min_5m_carbimpact": 3,
//     "dia": input.dia,
//     "basalprofile": input.basalProfiles,
//     "isfProfile": {
//       "sensitivities": [
//         {
//             "i": 0,
//             "start": "00:00:00",
//             "sensitivity": input.isf, //converted to mg/dl
//             "offset": 0,
//             "x": 0,
//             "endOffset": 1440
//         }
//       ]
//     },
//     "carb_ratio": input.carbRatio,
//     "autosens_max": 1.2,
//     "autosens_min": 0.7
//   }
//
//   fs.writeFileSync(`${__basedir}/myopenaps/settings/profile.json`, JSON.stringify(profile, null, 2) , 'utf-8');
//   fs.writeFileSync(`${__basedir}/myopenaps/settings/autotune.json`, JSON.stringify(profile, null, 2) , 'utf-8');
//   fs.writeFileSync(`${__basedir}/myopenaps/settings/pumpprofile.json`, JSON.stringify(profile, null, 2) , 'utf-8');
//
// }
