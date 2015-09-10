describe('wordOrder', function() {
    it('counts one word', function() {
        expect(wordOrder('word')).to.deep.equal({ "word": 1 });
    });

    it('counts single instances of multiple words', function() {
        expect(wordOrder('the right answer')).to.deep.equal({ "the": 1, "right": 1, "answer": 1});
    });

    it('counts multiple instances of the same word', function() {
        expect(wordOrder('word word')).to.deep.equal({ "word": 2 });
    });

    it('ignores casing', function() {
        expect(wordOrder('WORD word')).to.deep.equal({ "word": 2 });
    });

    it('handles punctuation', function() {
        expect(wordOrder('WORD! word! word....')).to.deep.equal({ "word": 3 });
    });

    it('handles floating punctuation or extra spaces', function() {
        expect(wordOrder('WORD       WORD ... word ... brah')).to.deep.equal({ "word": 3, "brah": 1 });
    });

    it('sorts words based on how often they appear', function() {
        expect(wordOrder('hey hey a a bear word word word')).to.deep.equal({ "word": 3, "hey": 2, "a": 2, "bear": 1 })
    });

    it('sorts', function() {
        expect(wordOrder('bear bear bear hey hey hey hey')).to.eql({ "bear": 3, "hey": 4 });
    });
});
