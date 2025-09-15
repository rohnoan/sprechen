function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    await wait(1000);  // wait 1 second
    console.log("End after 1 second");
}

run();


//all three are handling tasks that are dependent of prev tasks.