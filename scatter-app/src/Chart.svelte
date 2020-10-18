<script>

    export let c_data;
    export let x_col;
    export let y_col;
    export let id;

    // Assign the specification to a local variable vlSpec.
    var vlSpec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      data: c_data,
      mark: {type:'point', filled:true},
      encoding: {
        x: { field: x_col, type:"quantitative"}, y: {field: y_col, type:"quantitative"}
      }
    };

    // Embed the visualization in the container with id `vis`
    vegaEmbed('#vis_' + id, vlSpec);
</script>

<div id="vis_{id}"></div>