module.exports = {
    // originSynonyms - our in memory data
    // data - new synonyms from user's body request
    addNewSynonyms: function(originSynonyms, data) {
        let newSynonymsData = [...originSynonyms];

        if (originSynonyms.length === 0) {
            newSynonymsData.push(data); // first time adding synonyms
        } else {
            let indexesOfArraysWhichContainsNewAddedSynonym = []; // used for storing indexes of arrays which contains one of new added synonym

            // go through the arrays and check if any contains at least one of new added synonyms
            for (let i = 0; i < originSynonyms.length; i++) {
                const found = originSynonyms[i].some(item =>
                    data.includes(item)
                );

                if (found) {
                    indexesOfArraysWhichContainsNewAddedSynonym.push(i);
                }
            }

            // if no - just add new array
            if (!indexesOfArraysWhichContainsNewAddedSynonym) {
                return newSynonymsData.push(data);
            } else {
                let newArrayToSave = [...data]; // new array which consists from new added synonyms and corresponding synonyms added earlier

                for (let value of indexesOfArraysWhichContainsNewAddedSynonym) {
                    originSynonyms[value].map(item =>
                        newArrayToSave.push(item)
                    );
                }

                originSynonyms.push([...new Set(newArrayToSave)]); //unique values

                //filter- remove old arrays (transitive rule)
                newSynonymsData = originSynonyms.filter(
                    (arr, index) =>
                        !indexesOfArraysWhichContainsNewAddedSynonym.includes(
                            index
                        )
                );
            }
        }
        return newSynonymsData;
    },

    searchSynonyms: function(searchValue, synonyms) {
        for (let synonymsArr of synonyms) {
            const found = synonymsArr.includes(searchValue); // check if any array contains searched synonym

            // if yes - return that array except the search value (array already has the searched value)
            if (found) {
                const synonymsWithoutSearchValue = synonymsArr.filter(
                    item => item != searchValue
                );
                return synonymsWithoutSearchValue;
            }
        }
        // otherwise return null
        return null;
    }
};
