export async function* asyncGenerator(lines) {
    for (const line of lines) {
        yield line;
    }
}
