exports.generate_current_settings = function(input) {

  let profile = {
    "min_5m_carbimpact": 3,
    "dia": input.dia,
    "basalprofile": [
      {
        "start": "00:00:00",
        "minutes": 0,
        "rate": your_basal
      },
      {
        "start": "08:00:00",
        "minutes": 480,
        "rate": your_basal
      },
      {
        "start": "13:00:00",
        "minutes": 780,
        "rate": your_basal
      },
      {
        "start": "21:00:00",
        "minutes": 1260,
        "rate": your_basal
      }
    ],
    "isfProfile": {
      "sensitivities": [
        {
            "i": 0,
            "start": "00:00:00",
            "sensitivity": your_isf,
            "offset": 0,
            "x": 0,
            "endOffset": 1440
        }
      ]
    },
    "carb_ratio": your_ic_ratio,
    "autosens_max": 1.2,
    "autosens_min": 0.7
  }

  fs.writeFile('./data.json', JSON.stringify(obj, null, 2) , 'utf-8');

}
