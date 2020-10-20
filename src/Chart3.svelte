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

    var old_c = sSpec;
    var new_c = eSpec;

    vegaEmbed("#view", sSpec, { renderer: "svg" });
    vegaEmbed("#view2", sSpec, { renderer: "svg" });

    let i = 0;

    function handleClick() {
        i++;
        play("#view");
        play("#view2");
        
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
</script>

<div>
    <p id="texttag">{'clicked ' + i}</p>
    <button on:click={handleClick} id="btn">click me</button>
</div>

<div id="view" />
<div id="view2" />
