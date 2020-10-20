<script>
    const gemSpec = {
        timeline: {
            sync: [
                { component: { axis: "x" }, timing: { duration: 1000 } },
                { component: { mark: "marks" }, timing: { duration: 1000 } },
            ],
        },
    };
    const sSpec = gemini.vl2vg4gemini({
        data: {
            values: [
                { Hungry: 50, Name: "Gemini" },
                { Hungry: 100, Name: "Cordelia" },
            ],
        },
        mark: "bar",
        encoding: {
            x: { field: "Hungry", type: "quantitative" },
            y: { field: "Name", type: "nominal" },
        },
    });
    const eSpec = gemini.vl2vg4gemini({
        data: {
            values: [
                { Hungry: 100, Name: "Gemini" },
                { Hungry: 80, Name: "Cordelia" },
            ],
        },
        mark: "bar",
        encoding: {
            x: { field: "Hungry", type: "quantitative" },
            y: { field: "Name", type: "nominal" },
        },
    });

    // STUFF THAT CHANGES

    var old_c = sSpec;
    var new_c = eSpec;
    export let c_id;
    export let i;

    vegaEmbed("#view"+c_id, sSpec, { renderer: "svg" });

    function handleChange(index) {
        console.log("Index in "+c_id+" is "+index)
        play("#view"+c_id);
        
        let temp = old_c;
        old_c = new_c;
        new_c = temp;
        
    }

    async function play(viewtag) {
        console.log("running play");
        let anim = await gemini.animate(old_c, new_c, gemSpec);
        await anim.play(viewtag);

        return viewtag;
    }

    $: handleChange(i)
</script>

<div>
    <p id="texttag">{'clicked ' + i}</p>
</div>

<div id={"view"+c_id} />
