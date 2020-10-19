<script>

    export let c_data;
    export let static_col;
    export let var_col;
    export let id;

    var s = {};
    $: console.log("This was run. static is " + static_col + " var is " + var_col)

    function updateChart(sc, vc) {

        if (sc == vc) {
        
        s = {
            $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
            data: c_data,
            mark: "bar",
            encoding: {
                x: {"bin": true, "field": sc},
                y: {"aggregate": "count"}
            }
        }

        } else {

            s = {
                $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
                data: c_data,
                mark: {type:'point', filled:true},
                encoding: {
                    x: { field: sc, type:"quantitative"}, y: {field: vc, type:"quantitative"}
                }
            };
        }

        vegaEmbed('#vis_' + id, s);

    }

    $: updateChart(static_col, var_col)
    
   
</script>

<!-- The mouse enter with no functon forwards this event to app I think -->
<div on:mouseenter id="vis_{id}"></div> 

