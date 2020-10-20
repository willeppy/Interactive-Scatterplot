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

    let i = 0;

    function handleClick() {
        i++;
        runGem();
    }

    function runGem() {
        async function play() {
            console.log("running play");
            let anim = await gemini.animate(old_c, new_c, gemSpec);
            await anim.play("#view");

            // switch
            let temp = old_c;
            old_c = new_c;
            new_c = temp;
        }

        // setInterval(play, 3000)

        play();
    }
</script>

<div>
    <p id="texttag">{"clicked "+i}</p>
    <button on:click={handleClick} id="btn">click me</button>
</div>

<div id="view" />
