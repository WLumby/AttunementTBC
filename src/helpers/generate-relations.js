// this function isn't great, but it's the best solution without completely refactoring the App render function

const generateRelations = (...vals) => {
    const relationsNum = (vals.length / 3);
    const relations = [];

    for (let step = 0; step < relationsNum; step++) {
      let stepIndex = step*3;

      relations.push({
        targetId: vals[stepIndex],
        targetAnchor: vals[stepIndex+1],
        sourceAnchor: vals[stepIndex+2],
      })
    }

    return relations;
}

module.exports = { generateRelations }