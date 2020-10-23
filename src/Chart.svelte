<script>
    import embed from "vega-embed";

    export let c_data;
    export let static_col;
    export let var_col;
    export let c_id;

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
    var old_c = gemini.vl2vg4gemini({
        $schema: "https://vega.github.io/schema/vega-lite/v4.json",
        data: c_data,
        mark: "bar",
        encoding: {
            x: { bin: true, field: static_col },
            y: { aggregate: "count" },
        },
    });

    var new_c = old_c;
    let viewtag = "#view_" + c_id;

    embed(viewtag, old_c, { renderer: "svg" });

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

        new_c = gemini.vl2vg4gemini(s_new);

        play(old_c, new_c).then((res) => {
            console.log("Finished play in " + res)
        }).catch((err) => {
            console.log("ERROR: ", err)
        });

        // update
        old_c = new_c;
    }

    async function play(oc, nc) {
        // console.log("In play for "+viewtag);
        // console.log("OLD_C ", oc);
        // console.log("NEW_C ", nc);

        let anim = await gemini.animate(oc, nc, gs);
        await anim.play(viewtag);
        return viewtag;
    }

    $: updateChart(static_col, var_col);
</script>

<style>
    .chart_wrapper {
        display: inline-block;
    }
</style>

<div class="chart_wrapper">
    <p>{'static: ' + static_col + ', var: ' + var_col}</p>
    <div on:mouseenter id={'view_' + c_id} />
    <!-- <div id={'view_' + c_id} /> -->
</div>
