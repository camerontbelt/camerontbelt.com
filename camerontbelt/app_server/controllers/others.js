/*GET home page*/
module.exports.about = function(req,res)
{
    res.render('generic-text', { 
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sid down and get a bit of work done. \n\nLorem ipusm'
    });
};