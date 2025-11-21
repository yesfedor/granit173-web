export default function chunkArray<T>(array: T[], chunkCount: number) {
    function split(array, cols) {
        if (cols === 1) return array;
        const size = Math.ceil(array.length / cols);
        return array.slice(0, size).concat([null]).concat(split(array.slice(size), cols-1));
    }

    const a = split(array, chunkCount);
    const groups = [];
    let group = [];
    for(let i = 0; i < a.length; i++) {
        if (a[i] === null) {
            groups.push(group);
            group = [];
            continue;
        }
        group.push(a[i]);

    }
    groups.push(group);
    return groups;
}