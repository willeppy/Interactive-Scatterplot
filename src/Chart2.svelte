<script>
    import "../public/gemini.web.js";

    // CONST SPECS
    const gemSpec = {
        timeline: {
            sync: [
                { component: { axis: "x" }, timing: { duration: 1000 } },
                {
                    component: { mark: "marks" },
                    timing: { duration: 1000 },
                },
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

    // SHIT THAT CHANGES

    let id = 0;
    let count = 0;

    var old_c = sSpec;
    var new_c = eSpec;

    function handleClick() {
        count++;

        runGem(old_c, new_c, gemSpec, id, count);
        
    }

    vegaEmbed("#view_"+id, gemSpec, { renderer: "svg" });

    // vegaEmbed("#view2", sSpec, { renderer: "svg" });


    // this gets re-run
    function runGem(o, n, g, idd, ccnt) {

        async function play(o, n, g, idd, ccnt) {
            console.log("running play, id="+idd+" count="+ccnt);
            let anim = await gemini.animate(o, n, g);
            await anim.play("view_"+idd);
            // await anim.play("#view2");
            return ccnt;
        }

        play(o, n, g, idd, ccnt)
            .then(value => {
                console.log(value)

                // switch
                let temp = old_c;
                old_c = new_c;
                new_c = temp;

            });
    
        // play(old_c, new_c, gemSpec, id, count);

        // play(c);
    }


    
</script>

<div>
    <p>{"Button clicked " + count}</p>
    <button on:click={handleClick}>click me</button>
</div>

<div id={"view_"+id} /> 
