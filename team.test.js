const teamObj = require('./team.js');

test('giving a name and level argument initiates object with arguments', () => {
    const result = new teamObj('Raptors', 10);

    expect(result).toBeInstanceOf(Object);
    expect(result.teamName).toEqual('Raptors');
    expect(result.level).toEqual(10);
    expect(result.points).toEqual(0);

});
