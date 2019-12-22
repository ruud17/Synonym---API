module.exports = function(originSynonyms, data) {
    let newSynonymsData = [...originSynonyms];

    if (originSynonyms.length === 0) {
        newSynonymsData.push(data);
    } else {
        let indexesOfArraysWhichContainsNewAddedSynonym = [];

        for (let i = 0; i < originSynonyms.length; i++) {
            const found = originSynonyms[i].some(item => data.includes(item));

            if (found) {
                indexesOfArraysWhichContainsNewAddedSynonym.push(i);
            }
        }

        if (!indexesOfArraysWhichContainsNewAddedSynonym) {
            return newSynonymsData.push(data);
        } else {
            let newArrayToSave = [...data]; // we create new array to save which consists of new added synonyms and already added ones

            for (let value of indexesOfArraysWhichContainsNewAddedSynonym) {
                originSynonyms[value].map(item => newArrayToSave.push(item));
            }

            originSynonyms.push([...new Set(newArrayToSave)]); //unique values

            //filter- remove old arrays
            newSynonymsData = originSynonyms.filter(
                (arr, index) =>
                    !indexesOfArraysWhichContainsNewAddedSynonym.includes(index)
            ); 
        }
    }
    return newSynonymsData;
};
