
const Intern = require('../lib/intern');





   
        it('get schooling',()=>{
            const school = 'central H.S';
            const e = new Intern('brendon',74899,'jahh@zipmail.com','central H.S');
            // const schooling = e.getSchool();
            expect(e.getSchool()).toBe(school)
        })
