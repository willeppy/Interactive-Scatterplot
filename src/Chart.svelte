<script>
    // import "../public/gemini.web.js";

    export let c_data;
    export let static_col;
    export let var_col;
    export let c_id;

    // let id_tag = ""

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

    var s_new_vega = s_old_vega;

    vegaEmbed("#vis_" + c_id, s_old_vega);

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

        s_new_vega = gemini.vl2vg4gemini(s_new);

        play("#vis_"+c_id);
        
        // update
        s_old_vega = s_new_vega;
    }

    // func
    async function play(chartTag) {
        console.log("In play function for for Chart "+ chartTag);
        console.log("OV:", s_old_vega);
        console.log("NV:", s_new_vega);
        let anim = await gemini.animate(s_old_vega, s_new_vega, gs);
        await anim.play(chartTag);
        
        //return "done.";
    }


    $: updateChart(static_col, var_col);
</script>

<!-- The mouse enter with no functon forwards this event to app I think -->
<div on:mouseenter id="vis_{c_id}" />
