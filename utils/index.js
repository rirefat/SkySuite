export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);

    return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
    return updatedObj;
}

export const isDateInBetween = (date, from, to) => {
    return (
        new Date(date).getTime() >= new Date(from).getTime() &&
        new Date(date).getTime() >= new Date(to).getTime()
    )
}

export const getDayDifferences = (from, to) => {
    const difference = (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24) + 1;
    return difference;
}