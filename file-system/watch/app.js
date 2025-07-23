const fs = require('fs/promises');
((async()=>{
    const watcher = fs.watch("./");
    for await (const event of watcher) {
        console.log(event);

    }

})())
// write and save text to a file,watcher will detect changes
//and log them
//whatever text file you create, it will log the event
//to the console