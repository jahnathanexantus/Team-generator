
const Engineer = require('../lib/Engineer');



// to get the github username
describe('get github username',()=>{
    it('set the constructor for username',()=>{
        const githubUsername = 'jahhatfishscale';
        const e = new Engineer('jahnatahn',743939,'janjsf@zipmail.com','jahhatfishscale');
        expect(e.github).toBe(githubUsername);
    })
    it('gives github username',()=>{
        const getGit = 'thestallion';
        const e = new Engineer('chris','id','KHF@zipmail.com','thestallion')
        
        expect(e.getGithub()).toBe(getGit)
    })
})
