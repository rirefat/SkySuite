export const replaceMongoIdInArray = (array) => {
    if (!Array.isArray(array)) return [];
    return array.map(item => {
        if (!item) return item;
        const id = item._id ? item._id.toString() : item.id;
        const { _id, ...rest } = item;
        return { id, ...rest };
    });
};

export const replaceMongoIdInObject = (obj) => {
    if (!obj) return null;
    const id = obj._id ? obj._id.toString() : obj.id;
    const { _id, ...updatedObj } = { ...obj, id };
    return updatedObj;
};

/**
 * Checks if two date ranges overlap:
 * Range A [startA, endA] and Range B [startB, endB]
 * Overlap occurs if startA < endB AND endA > startB
 */
export const doDateRangesOverlap = (startA, endA, startB, endB) => {
    if (!startA || !endA || !startB || !endB) return false;
    const sA = new Date(startA).getTime();
    const eA = new Date(endA).getTime();
    const sB = new Date(startB).getTime();
    const eB = new Date(endB).getTime();

    return sA < eB && eA > sB;
};

export const isDateInBetween = (date, from, to) => {
    if (!date || !from || !to) return false;
    const d = new Date(date).getTime();
    const f = new Date(from).getTime();
    const t = new Date(to).getTime();
    return d >= f && d <= t;
};

export const getDayDifferences = (from, to) => {
    if (!from || !to) return 1;
    const diff = (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24);
    return Math.max(1, Math.round(diff));
};
