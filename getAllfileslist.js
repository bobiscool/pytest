var walk = require('walk')

var files = [];

var walker = walk.walk('/Users/mac/',{followLinks:false});

walker.on('file',function(root,stat,next){
    files.push(root+'/'+stat.name)
    console.log(stat.name);
    next(); //突然好像明白了 yeild的意思

});

walker.on('end',function(){
     console.log(files);
});