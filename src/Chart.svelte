<script>
    // import "../public/gemini.web.js";

    export let c_data;
    export let static_col;
    export let var_col;
    export let id;

    // const
    const gs = {
        timeline: {
            concat: [
                {
                    sync: [
                        {
                            component: { mark: "marks" },
                            change: {
                                scale: ["x", "y"],
                                data: true,
                                encode: {
                                    update: true,
                                    enter: true,
                                    exit: true,
                                },
                                marktype: true,
                            },
                            timing: { duration: { ratio: 1 } },
                        },
                        {
                            component: { axis: "x" },
                            timing: { duration: { ratio: 1 } },
                        },
                        {
                            component: { axis: "y" },
                            timing: { duration: { ratio: 1 } },
                        },
                    ],
                },
            ],
        },
        totalDuration: 2000,
    };

    // init
    var s_old_vega = gemini.vl2vg4gemini({
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        data: c_data,
        mark: "bar",
        encoding: {
            x: { bin: true, field: static_col },
            y: { aggregate: "count" },
        },
    });


    // func
    async function play(ov, nv) {
        console.log("In play function for for Chart #vis_" + id);
        console.log("OV:", ov);
        console.log("NV:", nv);
        let anim = await gemini.animate(ov, nv, gs);
        await anim.play("#vis_" + id);
        
        //return "done.";
    }
    
    function updateChart(sc, vc) {
        let s_new;

        if (sc == vc) {
            s_new = {
                $schema: "https://vega.github.io/schema/vega-lite/v4.json",
                data: c_data,
                mark: "bar",
                encoding: {
                    x: { bin: true, field: sc },
                    y: { aggregate: "count" },
                },
            };
        } else {
            s_new = {
                $schema: "https://vega.github.io/schema/vega-lite/v4.json",
                data: c_data,
                mark: { type: "point", filled: true },
                encoding: {
                    x: { field: sc, type: "quantitative" },
                    y: { field: vc, type: "quantitative" },
                },
            };
        }

        let s_new_vega = gemini.vl2vg4gemini(s_new);

        play(s_old_vega, s_new_vega);
        
        // update
        s_old_vega = s_new_vega;
    }

    // console.log("Vega embed being run in " + id + " with... ");
    // console.log(s_old_vega);
    vegaEmbed("#vis_" + id, s_old_vega);

    $: updateChart(static_col, var_col);
</script>

<!-- The mouse enter with no functon forwards this event to app I think -->
<div on:mouseenter id="vis_{id}" />
