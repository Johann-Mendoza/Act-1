const ph = {
    jem:(req, res)=>{
        res.render('index');
    },
    emile:(req, res)=>{
        res.render('about');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    message:(req, res)=>{
        res.render('message');
    },
    report:(req, res)=>{
        res.render('report');
    }
};

module.exports = ph;