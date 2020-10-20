<script>
    import "../public/gemini.web.js";

    export let c_data;
    export let static_col;
    export let var_col;
    export let id;

    var s_old_vega = {};

    // $: console.log("This was run. static is " + static_col + " var is " + var_col)

    const gs = {
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
        };
    
    console.log("Is vega embed being run in " + id)
    vegaEmbed('#vis_' + id, gs);


    function updateChart(sc, vc, gem_sch) {
        let s_new;

        if (sc == vc) {
            s_new = {
                $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
                data: c_data,
                mark: "bar",
                encoding: { x: {"bin": true, "field": sc}, y: {"aggregate": "count"}}
            }
        } else {
            s_new = {
                $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
                data: c_data,
                mark: {type:'point', filled:true},
                encoding: {
                    x: { field: sc, type:"quantitative"}, y: {field: vc, type:"quantitative"}
                }
            };
        }

        // var s_old_vega = gemini.vl2vg4gemini(s_old)
        let s_new_vega = gemini.vl2vg4gemini(s_new);

        // initially empty
        if(s_old_vega.constructor === Object && Object.keys(s_old_vega).length === 0) {
            //console.log("Setting the old vega var for first time in Chart "+id)
            s_old_vega = s_new_vega;
        }

        async function play(ov, nv, gss) {
            console.log("In play function for for Chart #vis_" + id)
            console.log("OV:",ov)
            console.log("NV:",nv)
            let anim = await gemini.animate(ov, nv, gss);
            await anim.play('#vis_' + id);
            
            // update 
            s_old_vega = nv;
        }

        play(s_old_vega, s_new_vega, gem_sch);

    }

    $: updateChart(static_col, var_col, gs)

    // console.log("OV outside of func scope: ", s_old_vega)
    
   
</script>

<!-- The mouse enter with no functon forwards this event to app I think -->
<div on:mouseenter id="vis_{id}"></div> 

