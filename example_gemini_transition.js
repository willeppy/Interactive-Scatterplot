
// Chart One (A vs B)
{
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "values": [
            {
                "A": 9.4323298874,
                "B": 4.1661262238,
                "C": 32.3245005364,
                "D": 3.3528575546
            },
            {
                "A": 7.0302715091,
                "B": 4.6282008604,
                "C": 21.9370856422,
                "D": 4.2671480988
            },
            {
                "A": 7.9917945709,
                "B": 11.751356824,
                "C": 28.2068501054,
                "D": 4.9859502235
            },
            {
                "A": 10.0346570321,
                "B": 11.4983291222,
                "C": 38.067562997,
                "D": 2.3756417503
            },
            {
                "A": 9.2208276522,
                "B": 6.7354582924,
                "C": 17.9744496934,
                "D": 6.2961996461
            },
            {
                "A": 11.0899167569,
                "B": 10.9086348688,
                "C": 24.5557469154,
                "D": 4.5710256947
            },
            {
                "A": 13.684323905,
                "B": 13.4124978722,
                "C": 38.0389232304,
                "D": 3.1138764549
            }
        ]
    },
    "mark": {"type":"point", "filled":true},
    "encoding": {
        "x": { "field": "A", "type":"quantitative"}, "y": {"field": "B", "type":"quantitative"}
    }
}



// Chart Two (A vs C)
{
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "values": [
            {
                "A": 9.4323298874,
                "B": 4.1661262238,
                "C": 32.3245005364,
                "D": 3.3528575546
            },
            {
                "A": 7.0302715091,
                "B": 4.6282008604,
                "C": 21.9370856422,
                "D": 4.2671480988
            },
            {
                "A": 7.9917945709,
                "B": 11.751356824,
                "C": 28.2068501054,
                "D": 4.9859502235
            },
            {
                "A": 10.0346570321,
                "B": 11.4983291222,
                "C": 38.067562997,
                "D": 2.3756417503
            },
            {
                "A": 9.2208276522,
                "B": 6.7354582924,
                "C": 17.9744496934,
                "D": 6.2961996461
            },
            {
                "A": 11.0899167569,
                "B": 10.9086348688,
                "C": 24.5557469154,
                "D": 4.5710256947
            },
            {
                "A": 13.684323905,
                "B": 13.4124978722,
                "C": 38.0389232304,
                "D": 3.1138764549
            }
        ]
    },
    "mark": {"type":"point", "filled":true},
    "encoding": {
        "x": { "field": "A", "type":"quantitative"}, "y": {"field": "C", "type":"quantitative"}
    }
}

// Chart Three (A histogram)
{
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "values": [
            {
                "A": 9.4323298874,
                "B": 4.1661262238,
                "C": 32.3245005364,
                "D": 3.3528575546
            },
            {
                "A": 7.0302715091,
                "B": 4.6282008604,
                "C": 21.9370856422,
                "D": 4.2671480988
            },
            {
                "A": 7.9917945709,
                "B": 11.751356824,
                "C": 28.2068501054,
                "D": 4.9859502235
            },
            {
                "A": 10.0346570321,
                "B": 11.4983291222,
                "C": 38.067562997,
                "D": 2.3756417503
            },
            {
                "A": 9.2208276522,
                "B": 6.7354582924,
                "C": 17.9744496934,
                "D": 6.2961996461
            },
            {
                "A": 11.0899167569,
                "B": 10.9086348688,
                "C": 24.5557469154,
                "D": 4.5710256947
            },
            {
                "A": 13.684323905,
                "B": 13.4124978722,
                "C": 38.0389232304,
                "D": 3.1138764549
            }
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": { "bin": true, "field":"A"}, "y": {"aggregate": "count"}
    }
}



// Gemini for transition One to Two:( A vs B) to (A vs C)
{
    "timeline": {
      "concat": [
        {
          "sync": [
            {
              "component": {"mark": "marks"},
              "change": {
                "scale": ["y"],
                "encode": {"update": true, "enter": true, "exit": true}
              },
              "timing": {"duration": {"ratio": 0.5}}
            }
          ]
        },
        {
          "sync": [
            {"component": {"axis": "y"}, "timing": {"duration": {"ratio": 0.5}}}
          ]
        }
      ]
    },
    "totalDuration": 2000
}

// Gemini for transition One to Three: (A vs B) to (A histogram) #### THIS ONES BETTA YOO
{
    "timeline": {
      "concat": [
        {
          "sync": [
            {
              "component": {"mark": "marks"},
              "change": {
                "scale": ["x", "y"],
                "data": true,
                "encode": {"update": true, "enter": true, "exit": true},
                "marktype": true
              },
              "timing": {"duration": {"ratio": 1}}
            },
            {"component": {"axis": "x"}, "timing": {"duration": {"ratio": 1}}},
            {"component": {"axis": "y"}, "timing": {"duration": {"ratio": 1}}}
          ]
        }
      ]
    },
    "totalDuration": 2000
  }
