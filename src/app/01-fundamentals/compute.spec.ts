import {compute} from './compute';
// ng test to checking
describe('compute',()=>{
    it('The result is 0 if negative number',()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('The result is one more if positive number',()=>{
        const result = compute(5);
        expect(result).toBe(6);
    })
})